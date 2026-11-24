import type { InterviewSession, RunResult, TestResult } from '../types';
import { llmClient, DEFAULT_MODEL } from '../lib/llm';

function formatValue(value: unknown): string {
  if (value === undefined) return 'undefined';
  return JSON.stringify(value);
}

function getLatestUserMessage(session: InterviewSession): string {
  for (let i = session.messages.length - 1; i >= 0; i -= 1) {
    const message = session.messages[i];
    if (message.role === 'user') return message.content;
  }
  return '';
}

function isExactFixRequest(message: string): boolean {
  return /(?:write|show|give).*(?:exact|fixed|correct(?:ed)?).*(?:code|solution)|fix(?:ing)? (?:the|my) code|what did i do wrong|write the code/i.test(
    message,
  );
}

function isBlockedDebugRequest(message: string): boolean {
  return /can(?:not|'t)\s+debug|can(?:not|'t)\s+go back|can(?:not|'t)\s+see.*(?:console|log|output)|console\.log.*(?:not visible|invisible|can(?:not|'t)\s+see)|something is wrong in your system prompt/i.test(
    message,
  );
}

function formatTestResult(result: TestResult, index: number): string {
  const label = result.testCase.label ?? `Test ${index + 1}`;
  const lines = [`- ${label}`];

  if (result.status === 'fail') {
    lines.push(`  Expected: ${formatValue(result.testCase.expected)}`);
    lines.push(`  Actual: ${formatValue(result.actual)}`);
  } else if (result.status === 'error') {
    lines.push(`  Error: ${result.errorMessage ?? 'Unknown error'}`);
  } else if (result.status === 'timeout') {
    lines.push('  Timed out');
  }

  if (result.consoleOutput?.length) {
    lines.push('  Console output:');
    result.consoleOutput.forEach((line) => lines.push(`    - ${line}`));
  }

  return lines.join('\n');
}

function formatRunResultContext(runResult: RunResult): string {
  const failingResults = runResult.results
    .map((result, index) => ({ result, index }))
    .filter(({ result }) => result.status !== 'pass');

  const lines = [
    `Passed ${runResult.passed}/${runResult.total} tests.`,
    '',
  ];

  if (failingResults.length === 0) {
    lines.push('All tests passed.');
  } else {
    lines.push('Failing or errored tests:');
    failingResults.forEach(({ result, index }) => lines.push(formatTestResult(result, index)));
  }

  return lines.join('\n');
}

function buildSubmissionContext(session: InterviewSession): string {
  const sections: string[] = [];

  if (session.submittedCode) {
    sections.push(`## Submitted code\n\`\`\`js\n${session.submittedCode}\n\`\`\``);
  }

  if (session.runResult) {
    sections.push(`## Execution results\n${formatRunResultContext(session.runResult)}`);
  }

  return sections.join('\n\n');
}

function buildSystemPrompt(session: InterviewSession): string {
  const { problem, phase, runResult } = session;

  const problemContext = `
## Problem You Are Presenting
**Title:** ${problem.title}
**Difficulty:** ${problem.difficulty}
**Category:** ${problem.category}

**Description:**
${problem.description}

**Examples:**
${problem.examples.map((e, i) => `Example ${i + 1}:\n  Input: ${e.input}\n  Output: ${e.output}${e.explanation ? `\n  Explanation: ${e.explanation}` : ''}`).join('\n')}

**Constraints:**
${problem.constraints.map((c) => `- ${c}`).join('\n')}
`.trim();

  const latestUserMessage = getLatestUserMessage(session);
  const exactFixRequested = isExactFixRequest(latestUserMessage);
  const blockedDebugging = isBlockedDebugRequest(latestUserMessage);
  const failedSubmissionInFollowup =
    phase === 'followup' && runResult !== undefined && runResult.passed < runResult.total;

  const base = `You are a technical interviewer at a top tech company conducting a coding interview. Be professional, encouraging, and helpful.

${problemContext}

You know this problem thoroughly. You can confirm example inputs/outputs, clarify the problem statement, and answer questions about constraints. Do not be evasive about the problem — you presented it.

## Critical Rules
- During clarification, planning, and coding, NEVER complete the candidate's code for them or suggest the correct implementation.
- During clarification, planning, and coding, NEVER write out the full solution, even as an "example".
- If the candidate shares partial code during clarification, planning, or coding, give high-level directional feedback only (e.g. "that's on the right track" or "think about what happens when...").
- In follow-up after a failed submission, ground your help in the submitted code and visible test failures instead of generic advice.
- Phase transitions are controlled by the user typing a special word in the terminal (not by you). When you feel the current phase has run its course, you can gently prompt the candidate — e.g. "Whenever you're ready to move on, just type 'next'." — but never describe or anticipate what the next phase will involve.`;

  const phaseGuidance: Record<string, string> = {
    setup:
      'Present the problem warmly. Invite the candidate to read it and ask any clarifying questions.',
    clarification:
      'The candidate is asking clarifying questions. Answer directly and helpfully — you know the problem well. Confirm examples, constraints, and edge cases as needed.',
    planning:
      'The candidate is explaining their approach. Listen actively, ask probing questions about edge cases or complexity.',
    coding:
      'The candidate is writing their solution. Stay silent unless they ask a question. If they ask for hints, give only a small nudge — never write code or complete their implementation for them. If they share code snippets, respond with brief directional feedback only.',
    followup:
      'The candidate has submitted their solution. Discuss time/space complexity and trade-offs. If the submission failed tests, diagnose the real issue from the execution results instead of guessing.',
    debrief: 'The interview is wrapping up. Be warm and professional.',
  };

  const submissionContext = buildSubmissionContext(session);
  const escalationContext = failedSubmissionInFollowup
    ? `
## Failed submission guidance
- The candidate is blocked on a failing submission.
- Use the submitted code and execution results below as the source of truth.
- If the candidate explicitly asks for the exact fix, corrected code, or a direct rewrite, provide the concrete corrected code.
- If the candidate says they cannot debug in this interface or cannot see output, provide the diagnosis and direct fix instead of another debugging checklist.
- Do not tell them to use console.log or rely on hidden debug output.
- Do not repeat the same high-level advice after the candidate says it is not actionable.
${exactFixRequested ? '- The latest user message is an explicit request for exact corrected code. Honor that request directly.' : ''}
${blockedDebugging ? '- The latest user message says they are blocked by the interface. Treat that as a request for concrete help now.' : ''}`.trim()
    : '';

  return [
    base,
    `## Current Phase: ${phase.toUpperCase()}\n${phaseGuidance[phase] ?? ''}`,
    escalationContext,
    submissionContext,
  ]
    .filter(Boolean)
    .join('\n\n');
}

export async function getInterviewerResponse(session: InterviewSession): Promise<string> {
  const systemPrompt = buildSystemPrompt(session);

  const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
    { role: 'system' as const, content: systemPrompt },
    ...session.messages
      .filter((m) => m.role !== 'system')
      .map((m) => ({ role: m.role, content: m.content })),
  ];

  // Phase openings have no new candidate message. Ollama treats a trailing assistant
  // message as text to continue and returns nothing, so always end on a user turn.
  if (messages[messages.length - 1].role !== 'user') {
    messages.push({
      role: 'user',
      content: `I'm ready to begin the ${session.phase} phase.`,
    });
  }

  const response = await llmClient.chat.completions.create({
    model: DEFAULT_MODEL,
    messages,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) throw new Error('Interviewer agent received empty response from LLM');
  return content;
}
