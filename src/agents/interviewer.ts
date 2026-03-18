import type { InterviewSession } from '../types';
import { llmClient, DEFAULT_MODEL } from '../lib/llm';

function buildSystemPrompt(session: InterviewSession): string {
  const { problem, phase } = session;

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

  const base = `You are a technical interviewer at a top tech company conducting a coding interview. Be professional, encouraging, and helpful — but do not write code or give away the solution.

${problemContext}

You know this problem thoroughly. You can confirm example inputs/outputs, clarify the problem statement, and answer questions about constraints. Do not be evasive about the problem — you presented it.

## Critical Rules
- NEVER complete the candidate's code for them or suggest the correct implementation
- NEVER write out the full solution, even as an "example"
- If the candidate shares partial code, give high-level directional feedback only (e.g. "that's on the right track" or "think about what happens when...")
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
      'The candidate has submitted their solution. Ask follow-up questions about time/space complexity and trade-offs.',
    debrief: 'The interview is wrapping up. Be warm and professional.',
  };

  return `${base}\n\n## Current Phase: ${phase.toUpperCase()}\n${phaseGuidance[phase] ?? ''}`;
}

export async function getInterviewerResponse(session: InterviewSession): Promise<string> {
  const systemPrompt = buildSystemPrompt(session);

  const messages = [
    { role: 'system' as const, content: systemPrompt },
    ...session.messages
      .filter((m) => m.role !== 'system')
      .map((m) => ({ role: m.role, content: m.content })),
  ];

  const response = await llmClient.chat.completions.create({
    model: DEFAULT_MODEL,
    messages,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) throw new Error('Interviewer agent received empty response from LLM');
  return content;
}
