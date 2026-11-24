import { getInterviewerResponse } from '../../src/agents/interviewer';
import { llmClient } from '../../src/lib/llm';
import { createSession, addMessage, advancePhase, submitCode, setRunResult } from '../../src/interview/session';
import type { Problem } from '../../src/types';

jest.mock('../../src/lib/llm');

const mockCreate = jest.fn();
(llmClient as jest.Mocked<typeof llmClient>).chat = {
  completions: { create: mockCreate },
} as never;

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

function makeMockResponse(content: string | null) {
  return Promise.resolve({
    choices: [{ message: { content } }],
  });
}

beforeEach(() => {
  mockCreate.mockReset();
});

describe('getInterviewerResponse', () => {
  it('returns a string response', async () => {
    mockCreate.mockReturnValue(makeMockResponse("Hello, let's begin."));
    const session = createSession(mockProblem, 'Easy');

    const result = await getInterviewerResponse(session);

    expect(typeof result).toBe('string');
  });

  it('returns the LLM content', async () => {
    mockCreate.mockReturnValue(makeMockResponse('What is your approach?'));
    const session = createSession(mockProblem, 'Easy');

    const result = await getInterviewerResponse(session);

    expect(result).toBe('What is your approach?');
  });

  it('includes a system prompt with interviewer context', async () => {
    mockCreate.mockReturnValue(makeMockResponse('Hello'));
    const session = createSession(mockProblem, 'Easy');

    await getInterviewerResponse(session);

    const [callArgs] = mockCreate.mock.calls;
    const messages: Array<{ role: string; content: string }> = callArgs[0].messages;

    expect(messages[0].role).toBe('system');
    expect(messages[0].content.toLowerCase()).toContain('interviewer');
  });

  it('includes conversation history in messages passed to LLM', async () => {
    mockCreate.mockReturnValue(makeMockResponse('Go on...'));
    let session = createSession(mockProblem, 'Easy');
    session = addMessage(session, 'user', 'I would use a hash map.');
    session = addMessage(session, 'user', 'The time complexity would be O(n).');

    await getInterviewerResponse(session);

    const [callArgs] = mockCreate.mock.calls;
    const messages: Array<{ role: string; content: string }> = callArgs[0].messages;
    const contents = messages.map((m) => m.content);

    expect(contents).toContain('I would use a hash map.');
    expect(contents).toContain('The time complexity would be O(n).');
  });

  it('reflects the current phase in the system prompt', async () => {
    mockCreate.mockReturnValue(makeMockResponse('ok'));

    const clarificationSession = advancePhase(createSession(mockProblem, 'Easy')); // setup → clarification
    await getInterviewerResponse(clarificationSession);
    const clarificationMessages: Array<{ role: string; content: string }> =
      mockCreate.mock.calls[0][0].messages;
    const clarificationSystemPrompt = clarificationMessages[0].content;

    mockCreate.mockClear();

    let codingSession = createSession(mockProblem, 'Easy');
    codingSession = { ...codingSession, phase: 'coding' };
    await getInterviewerResponse(codingSession);
    const codingMessages: Array<{ role: string; content: string }> =
      mockCreate.mock.calls[0][0].messages;
    const codingSystemPrompt = codingMessages[0].content;

    expect(clarificationSystemPrompt).not.toBe(codingSystemPrompt);
  });

  it.each(['clarification', 'planning', 'followup'] as const)(
    'ends the request with a user turn when opening the %s phase',
    async (phase) => {
      mockCreate.mockReturnValue(makeMockResponse('Hello'));
      const session = {
        ...addMessage(createSession(mockProblem, 'Easy'), 'assistant', 'Any questions?'),
        phase,
      };

      await getInterviewerResponse(session);

      const messages: Array<{ role: string; content: string }> =
        mockCreate.mock.calls[0][0].messages;
      const last = messages[messages.length - 1];
      expect(last.role).toBe('user');
      expect(last.content).toContain(phase);
      expect(session.messages).toHaveLength(1);
    },
  );

  it('ends the request with a user turn when there is no history', async () => {
    mockCreate.mockReturnValue(makeMockResponse('Hello'));

    await getInterviewerResponse(createSession(mockProblem, 'Easy'));

    const messages: Array<{ role: string }> = mockCreate.mock.calls[0][0].messages;
    expect(messages.map((m) => m.role)).toEqual(['system', 'user']);
  });

  it('does not add a turn when the candidate spoke last', async () => {
    mockCreate.mockReturnValue(makeMockResponse('Yes.'));
    const session = addMessage(createSession(mockProblem, 'Easy'), 'user', 'Can it be empty?');

    await getInterviewerResponse(session);

    const messages: Array<{ role: string; content: string }> =
      mockCreate.mock.calls[0][0].messages;
    expect(messages).toHaveLength(2);
    expect(messages[1].content).toBe('Can it be empty?');
  });

  it('handles LLM returning null content by throwing a descriptive error', async () => {
    mockCreate.mockReturnValue(makeMockResponse(null));
    const session = createSession(mockProblem, 'Easy');

    await expect(getInterviewerResponse(session)).rejects.toThrow();
  });

  it('calls the LLM exactly once per invocation', async () => {
    mockCreate.mockReturnValue(makeMockResponse('Sure.'));
    const session = createSession(mockProblem, 'Easy');

    await getInterviewerResponse(session);

    expect(mockCreate).toHaveBeenCalledTimes(1);
  });

  it('adds direct-fix escalation guidance for blocked users in follow-up', async () => {
    mockCreate.mockReturnValue(makeMockResponse('Here is the fix.'));

    let session = createSession(mockProblem, 'Easy');
    session = { ...session, phase: 'followup' };
    session = submitCode(session, 'function twoSum(nums, target) { return []; }');
    session = setRunResult(session, {
      passed: 0,
      failed: 1,
      total: 1,
      passRate: 0,
      results: [
        {
          testCase: { input: [[2, 7, 11, 15], 9], expected: [0, 1], label: 'basic' },
          status: 'fail',
          actual: [],
          durationMs: 0,
          consoleOutput: ['map []'],
        },
      ],
    });
    session = addMessage(session, 'user', 'No, write the exact code. I cannot debug here.');

    await getInterviewerResponse(session);

    const [callArgs] = mockCreate.mock.calls;
    const messages: Array<{ role: string; content: string }> = callArgs[0].messages;
    const systemPrompt = messages[0].content;

    expect(systemPrompt).toContain('provide the concrete corrected code');
    expect(systemPrompt).toContain('Do not tell them to use console.log');
    expect(systemPrompt).toContain('Submitted code');
    expect(systemPrompt).toContain('Expected: [0,1]');
    expect(systemPrompt).toContain('Actual: []');
    expect(systemPrompt).toContain('Console output:');
  });

  it('keeps the no-solution rule during coding phase', async () => {
    mockCreate.mockReturnValue(makeMockResponse('Think about edge cases.'));

    let session = createSession(mockProblem, 'Easy');
    session = { ...session, phase: 'coding' };
    session = addMessage(session, 'user', 'Write the exact code for me.');

    await getInterviewerResponse(session);

    const [callArgs] = mockCreate.mock.calls;
    const messages: Array<{ role: string; content: string }> = callArgs[0].messages;
    const systemPrompt = messages[0].content;

    expect(systemPrompt).toContain('NEVER complete the candidate\'s code for them');
    expect(systemPrompt).not.toContain('provide the concrete corrected code');
  });
});
