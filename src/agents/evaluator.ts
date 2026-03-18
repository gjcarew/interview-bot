import { llmClient, DEFAULT_MODEL } from '../lib/llm';
import type { InterviewSession, Feedback } from '../types';

export async function evaluateSession(session: InterviewSession): Promise<Feedback> {
  const { problem, submittedCode, runResult, messages } = session;

  const passed = runResult?.passed ?? 0;
  const total = runResult?.total ?? 0;
  const passRate = runResult?.passRate ?? 0;

  const transcript = messages
    .map(m => `${m.role.toUpperCase()}: ${m.content}`)
    .join('\n');

  const prompt = `
Problem: ${problem.title}

Description:
${problem.description}

Submitted Code:
\`\`\`js
${submittedCode ?? '(no code submitted)'}
\`\`\`

Test Results: ${passed}/${total} tests passed (pass rate: ${(passRate * 100).toFixed(1)}%)
Note: the candidate passed ${passRate * 100}% of test cases. Use this to anchor correctnessScore.

Interview Transcript:
${transcript}

Respond with ONLY a valid JSON object with these exact fields:
{
  "correctnessScore": <number 0-100>,
  "timeComplexity": <string like "O(n)">,
  "spaceComplexity": <string like "O(1)">,
  "communicationScore": <number 0-10>,
  "strengths": [<string>, ...],
  "improvements": [<string>, ...],
  "summary": <string>
}
`.trim();

  const response = await llmClient.chat.completions.create({
    model: DEFAULT_MODEL,
    messages: [
      { role: 'system', content: 'You are an expert technical interviewer evaluating a coding interview session.' },
      { role: 'user', content: prompt },
    ],
  });

  const content = response.choices[0]?.message?.content ?? '';

  try {
    return JSON.parse(content) as Feedback;
  } catch (e) {
    throw new Error('Evaluator received malformed JSON from LLM: ' + (e as Error).message);
  }
}
