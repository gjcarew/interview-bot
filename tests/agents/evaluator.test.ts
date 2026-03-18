import { evaluateSession } from '../../src/agents/evaluator';
import { llmClient } from '../../src/lib/llm';
import { createSession, submitCode, setRunResult } from '../../src/interview/session';
import type { Problem, Feedback } from '../../src/types';

jest.mock('../../src/lib/llm');

// ─── Helpers ──────────────────────────────────────────────────────────────────

const mockRunResult = (passed: number, total: number) => ({
  results: [],
  passed,
  failed: total - passed,
  total,
  passRate: passed / total,
});

const mockProblem: Problem = {
  id: 'two-sum',
  neetcodeId: 1,
  title: 'Two Sum',
  category: 'Arrays & Hashing',
  difficulty: 'Easy',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  examples: [{ input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' }],
  constraints: ['2 <= nums.length <= 10^4'],
  functionSignature: 'function twoSum(nums, target) {}',
  testCases: [{ input: [[2, 7, 11, 15], 9], expected: [0, 1] }],
};

const validFeedbackJson: Feedback = {
  correctnessScore: 100,
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  communicationScore: 8,
  strengths: ['Clear variable naming', 'Good use of hash map'],
  improvements: ['Could explain the approach before coding'],
  summary: 'Strong solution with optimal time complexity.',
};

const mockLlmResponse = (content: string) => ({
  choices: [{ message: { content } }],
});

function getMockedCreate() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (llmClient.chat.completions.create as jest.MockedFunction<any>);
}

function buildSession(code: string, passed: number, total: number) {
  let session = createSession(mockProblem, 'Easy');
  session = submitCode(session, code);
  session = setRunResult(session, mockRunResult(passed, total));
  return session;
}

beforeEach(() => {
  getMockedCreate().mockResolvedValue(
    mockLlmResponse(JSON.stringify(validFeedbackJson))
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('evaluateSession', () => {
  test('returns a Feedback object with all required fields', async () => {
    const session = buildSession('function twoSum(nums, target) { return [0,1]; }', 5, 5);

    const result = await evaluateSession(session);

    expect(result).toHaveProperty('correctnessScore');
    expect(result).toHaveProperty('timeComplexity');
    expect(result).toHaveProperty('spaceComplexity');
    expect(result).toHaveProperty('communicationScore');
    expect(result).toHaveProperty('strengths');
    expect(result).toHaveProperty('improvements');
    expect(result).toHaveProperty('summary');
  });

  test('correctnessScore is ~100 when passRate is 1.0', async () => {
    getMockedCreate().mockResolvedValue(
      mockLlmResponse(JSON.stringify({ ...validFeedbackJson, correctnessScore: 100 }))
    );
    const session = buildSession('function twoSum() { return [0,1]; }', 5, 5);

    const result = await evaluateSession(session);

    expect(result.correctnessScore).toBeGreaterThanOrEqual(90);
    expect(result.correctnessScore).toBeLessThanOrEqual(100);
  });

  test('correctnessScore is ~50 when passRate is 0.5', async () => {
    getMockedCreate().mockResolvedValue(
      mockLlmResponse(JSON.stringify({ ...validFeedbackJson, correctnessScore: 50 }))
    );
    const session = buildSession('function twoSum() { return [0,1]; }', 5, 10);

    const result = await evaluateSession(session);

    expect(result.correctnessScore).toBeGreaterThanOrEqual(30);
    expect(result.correctnessScore).toBeLessThanOrEqual(70);
  });

  test('LLM prompt includes test result counts', async () => {
    const session = buildSession('function twoSum() {}', 3, 5);

    await evaluateSession(session);

    const call = getMockedCreate().mock.calls[0][0];
    const allContent: string = call.messages
      .map((m: { content: string }) => m.content)
      .join('\n');

    expect(allContent).toMatch(/3|passed/i);
    expect(allContent).toMatch(/5|total/i);
  });

  test('LLM prompt includes the submitted code', async () => {
    const code = 'function twoSum(nums, target) { const map = {}; }';
    const session = buildSession(code, 2, 5);

    await evaluateSession(session);

    const call = getMockedCreate().mock.calls[0][0];
    const allContent: string = call.messages
      .map((m: { content: string }) => m.content)
      .join('\n');

    expect(allContent).toContain(code);
  });

  test('strengths and improvements are arrays', async () => {
    const session = buildSession('function twoSum() {}', 5, 5);

    const result = await evaluateSession(session);

    expect(Array.isArray(result.strengths)).toBe(true);
    expect(Array.isArray(result.improvements)).toBe(true);
  });

  test('throws or returns default Feedback when LLM returns malformed JSON', async () => {
    getMockedCreate().mockResolvedValue(mockLlmResponse('not valid json'));
    const session = buildSession('function twoSum() {}', 5, 5);

    let result: Feedback | undefined;
    let threw = false;

    try {
      result = await evaluateSession(session);
    } catch {
      threw = true;
    }

    if (!threw) {
      // Returned a default/error Feedback — summary should signal the problem
      expect(result).toBeDefined();
      expect(typeof result!.summary).toBe('string');
      expect(result!.summary.length).toBeGreaterThan(0);
    } else {
      // Throwing is also acceptable
      expect(threw).toBe(true);
    }
  });

  test('summary is a non-empty string', async () => {
    const session = buildSession('function twoSum() { return [0,1]; }', 5, 5);

    const result = await evaluateSession(session);

    expect(typeof result.summary).toBe('string');
    expect(result.summary.length).toBeGreaterThan(0);
  });
});
