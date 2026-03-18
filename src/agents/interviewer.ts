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

You know this problem thoroughly. You can confirm example inputs/outputs, clarify the problem statement, and answer questions about constraints. Do not be evasive about the problem — you presented it.`;

  const phaseGuidance: Record<string, string> = {
    setup:
      'Present the problem warmly. Invite the candidate to read it and ask any clarifying questions.',
    clarification:
      'The candidate is asking clarifying questions. Answer directly and helpfully — you know the problem well. Confirm examples, constraints, and edge cases as needed.',
    planning:
      'The candidate is explaining their approach. Listen actively, ask probing questions about edge cases or complexity.',
    coding:
      'The candidate is coding. Do not interrupt unless they ask a question. If they ask for hints, give small nudges only.',
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
