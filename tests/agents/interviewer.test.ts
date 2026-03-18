import { getInterviewerResponse } from '../../src/agents/interviewer';
import { llmClient } from '../../src/lib/llm';
import { createSession, addMessage, advancePhase } from '../../src/interview/session';
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
});
