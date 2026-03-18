import type { InterviewSession } from '../types';
import { llmClient, DEFAULT_MODEL } from '../lib/llm';

function buildSystemPrompt(session: InterviewSession): string {
  const base =
    'You are a technical interviewer at a top tech company conducting a coding interview. Be professional, encouraging, and helpful without giving away answers.';

  const phaseGuidance: Record<string, string> = {
    setup:
      'The candidate is asking clarifying questions about the problem. Answer their questions helpfully and in-character as an interviewer.',
    clarification:
      'The candidate is asking clarifying questions about the problem. Answer their questions helpfully and in-character as an interviewer.',
    planning:
      'The candidate is explaining their approach. Listen actively, ask probing questions about edge cases or complexity.',
    coding:
      'The candidate is coding. Do not interrupt unless they ask a question. If they ask for hints, give small nudges only.',
    followup:
      'The candidate has submitted their solution. Ask follow-up questions about time/space complexity and trade-offs.',
    debrief: 'The interview is wrapping up. Be warm and professional.',
  };

  return `${base}\n\n${phaseGuidance[session.phase] ?? ''}`;
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
