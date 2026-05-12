import { runCode } from '../../src/runner/codeRunner';
import { getInterviewerResponse } from '../../src/agents/interviewer';
import { evaluateSession } from '../../src/agents/evaluator';
import {
  createSession,
  addMessage,
  advancePhase,
  submitCode,
  setRunResult,
  endSession,
} from '../../src/interview/session';
import { getProblemById, getRandomProblem, getCategories } from '../../src/interview/problemBank';
import { llmClient } from '../../src/lib/llm';
import type { Feedback, InterviewPhase } from '../../src/types';

jest.mock('../../src/lib/llm');

const mockCreate = jest.fn();
(llmClient as jest.Mocked<typeof llmClient>).chat = {
  completions: { create: mockCreate },
} as never;

const validFeedback: Feedback = {
  correctnessScore: 100,
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  communicationScore: 9,
  strengths: ['Optimal approach', 'Clear explanation'],
  improvements: ['Consider edge cases'],
  summary: 'Excellent solution demonstrating strong problem-solving skills.',
};

beforeEach(() => {
  mockCreate.mockReset();
  mockCreate.mockResolvedValue({
    choices: [{ message: { content: 'Great, let\'s continue.' } }],
  });
});

// ─── Problem Bank ─────────────────────────────────────────────────────────────

describe('Problem Bank', () => {
  it('returns the two-sum problem by id', () => {
    const problem = getProblemById('two-sum');
    expect(problem).toBeDefined();
    expect(problem?.title).toBe('Two Sum');
    expect(problem?.testCases.length).toBeGreaterThan(0);
  });

  it('returns contains-duplicate by id', () => {
    const problem = getProblemById('contains-duplicate');
    expect(problem).toBeDefined();
    expect(problem?.difficulty).toBe('Easy');
  });

  it('returns a random problem', () => {
    const problem = getRandomProblem({ difficulty: 'Easy' });
    expect(problem).toBeDefined();
    expect(problem?.difficulty).toBe('Easy');
  });

  it('returns undefined for unknown id', () => {
    expect(getProblemById('not-a-real-problem')).toBeUndefined();
  });

  it('lists categories', () => {
    const cats = getCategories();
    expect(cats).toContain('Arrays & Hashing');
  });
});

// ─── Code Runner ─────────────────────────────────────────────────────────────

describe('Code Runner — real execution', () => {
  it('correct two-sum solution passes all test cases', () => {
    const problem = getProblemById('two-sum')!;
    const code = `
      function twoSum(nums, target) {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
          const comp = target - nums[i];
          if (map[comp] !== undefined) return [map[comp], i];
          map[nums[i]] = i;
        }
      }
    `;
    const result = runCode(code, problem.testCases);
    expect(result.passRate).toBe(1);
    expect(result.passed).toBe(result.total);
  });

  it('wrong two-sum solution fails all test cases', () => {
    const problem = getProblemById('two-sum')!;
    const code = `function twoSum(nums, target) { return []; }`;
    const result = runCode(code, problem.testCases);
    expect(result.passed).toBe(0);
  });

  it('correct contains-duplicate solution passes all test cases', () => {
    const problem = getProblemById('contains-duplicate')!;
    const code = `function containsDuplicate(nums) { return new Set(nums).size !== nums.length; }`;
    const result = runCode(code, problem.testCases);
    expect(result.passRate).toBe(1);
  });

  it('identity encode/decode solution fails encode-and-decode-strings', () => {
    const problem = getProblemById('encode-and-decode-strings')!;
    const code = `
      function encode(strs) { return strs; }
      function decode(s) { return s; }
    `;
    const result = runCode(code, problem.testCases);
    expect(result.passed).toBeLessThan(result.total);
  });

  it('valid encode/decode solution passes encode-and-decode-strings', () => {
    const problem = getProblemById('encode-and-decode-strings')!;
    const code = `
      function encode(strs) {
        return JSON.stringify(strs);
      }

      function decode(s) {
        return JSON.parse(s);
      }
    `;
    const result = runCode(code, problem.testCases);
    expect(result.passRate).toBe(1);
  });

  it('RunResult totals are consistent', () => {
    const problem = getProblemById('two-sum')!;
    const code = `function twoSum(nums, target) { return [0,1]; }`;
    const result = runCode(code, problem.testCases);
    expect(result.total).toBe(problem.testCases.length);
    expect(result.passed + result.failed).toBe(result.total);
  });
});

// ─── Session Lifecycle ────────────────────────────────────────────────────────

describe('Session Lifecycle', () => {
  it('phases advance in correct order', () => {
    const problem = getProblemById('two-sum')!;
    const expectedPhases: InterviewPhase[] = [
      'setup', 'clarification', 'planning', 'coding', 'followup', 'debrief',
    ];
    let session = createSession(problem, 'Easy');
    expect(session.phase).toBe('setup');

    for (let i = 1; i < expectedPhases.length; i++) {
      session = advancePhase(session);
      expect(session.phase).toBe(expectedPhases[i]);
    }
  });

  it('throws when advancing past debrief', () => {
    const problem = getProblemById('two-sum')!;
    let session = createSession(problem, 'Easy');
    for (let i = 0; i < 5; i++) session = advancePhase(session);
    expect(() => advancePhase(session)).toThrow();
  });

  it('stores messages immutably', () => {
    const problem = getProblemById('two-sum')!;
    const original = createSession(problem, 'Easy');
    const updated = addMessage(original, 'user', 'What is the output format?');
    expect(original.messages).toHaveLength(0);
    expect(updated.messages).toHaveLength(1);
    expect(updated.messages[0].role).toBe('user');
  });

  it('submitCode and setRunResult update session immutably', () => {
    const problem = getProblemById('two-sum')!;
    let session = createSession(problem, 'Easy');
    session = submitCode(session, 'function twoSum() {}');
    expect(session.submittedCode).toBe('function twoSum() {}');

    const runResult = runCode(session.submittedCode!, problem.testCases);
    session = setRunResult(session, runResult);
    expect(session.runResult).toBeDefined();
    expect(session.runResult?.total).toBe(problem.testCases.length);
  });

  it('endSession sets endedAt', () => {
    const problem = getProblemById('two-sum')!;
    const session = endSession(createSession(problem, 'Easy'));
    expect(session.endedAt).toBeInstanceOf(Date);
  });
});

// ─── Interviewer Agent ────────────────────────────────────────────────────────

describe('Interviewer Agent (mocked LLM)', () => {
  it('returns LLM response in clarification phase', async () => {
    mockCreate.mockResolvedValue({
      choices: [{ message: { content: 'Welcome! Please read the problem carefully.' } }],
    });
    const problem = getProblemById('two-sum')!;
    let session = createSession(problem, 'Easy');
    session = advancePhase(session); // setup → clarification

    const response = await getInterviewerResponse(session);
    expect(response).toBe('Welcome! Please read the problem carefully.');
  });

  it('passes conversation history to the LLM', async () => {
    const problem = getProblemById('two-sum')!;
    let session = createSession(problem, 'Easy');
    session = addMessage(session, 'user', 'Can I use a hash map?');
    session = addMessage(session, 'assistant', 'Yes, that is a good approach.');

    await getInterviewerResponse(session);

    const messages = mockCreate.mock.calls[0][0].messages;
    const contents = messages.map((m: { content: string }) => m.content);
    expect(contents).toContain('Can I use a hash map?');
  });
});

// ─── Evaluator Agent ─────────────────────────────────────────────────────────

describe('Evaluator Agent (mocked LLM)', () => {
  it('returns valid Feedback after a complete session', async () => {
    mockCreate.mockResolvedValue({
      choices: [{ message: { content: JSON.stringify(validFeedback) } }],
    });
    const problem = getProblemById('two-sum')!;
    const code = `function twoSum(nums, target) {
      const map = {};
      for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map[comp] !== undefined) return [map[comp], i];
        map[nums[i]] = i;
      }
    }`;
    let session = createSession(problem, 'Easy');
    session = submitCode(session, code);
    session = setRunResult(session, runCode(code, problem.testCases));
    session = endSession(session);

    const feedback = await evaluateSession(session);

    expect(feedback.correctnessScore).toBeGreaterThanOrEqual(0);
    expect(typeof feedback.summary).toBe('string');
    expect(feedback.summary.length).toBeGreaterThan(0);
    expect(Array.isArray(feedback.strengths)).toBe(true);
    expect(Array.isArray(feedback.improvements)).toBe(true);
  });

  it('prompt includes submitted code and test results', async () => {
    mockCreate.mockResolvedValue({
      choices: [{ message: { content: JSON.stringify(validFeedback) } }],
    });
    const problem = getProblemById('two-sum')!;
    const code = `function twoSum(nums, target) { return [0, 1]; }`;
    let session = createSession(problem, 'Easy');
    session = submitCode(session, code);
    session = setRunResult(session, runCode(code, problem.testCases));

    await evaluateSession(session);

    const allContent = mockCreate.mock.calls[0][0].messages
      .map((m: { content: string }) => m.content)
      .join('\n');
    expect(allContent).toContain(code);
    expect(allContent).toMatch(/passed|test/i);
  });
});
