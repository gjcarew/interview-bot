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
    // Small local models drift from bare JSON without these.
    response_format: { type: 'json_object' },
    temperature: 0.2,
  });

  const content = response.choices[0]?.message?.content ?? '';

  try {
    return JSON.parse(content) as Feedback;
  } catch {
    const extracted = extractJsonFromText(content);
    if (extracted) return extracted;
    return buildFallbackFeedback(passRate);
  }
}

/** Try to pull a JSON object out of text that may include markdown fences or prose. */
function extractJsonFromText(text: string): Feedback | null {
  const candidates = [
    text.match(/```(?:json)?\s*([\s\S]*?)\s*```/)?.[1],
    text.match(/(\{[\s\S]*\})/)?.[1],
  ];
  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      return JSON.parse(candidate) as Feedback;
    } catch {
      // try next candidate
    }
  }
  return null;
}

/** Construct a safe fallback Feedback when the LLM response cannot be parsed. */
function buildFallbackFeedback(passRate: number): Feedback {
  return {
    correctnessScore: Math.round(passRate * 100),
    timeComplexity: 'Unknown',
    spaceComplexity: 'Unknown',
    communicationScore: 5,
    strengths: [],
    improvements: [],
    summary:
      'Evaluation could not be parsed from the LLM response. ' +
      'Correctness score has been estimated from test results.',
  };
}
