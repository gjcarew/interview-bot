import { getNextProblem, recordResult } from '../../src/spacedRepetition/scheduler';
import type { UserProgress, ProblemRecord } from '../../src/spacedRepetition/types';
import type { Problem, Feedback } from '../../src/types';

function makeRecord(
  problemId: string,
  neetcodeId: number,
  nextReviewDate: string,
  overrides: Partial<ProblemRecord> = {},
): ProblemRecord {
  return {
    problemId,
    neetcodeId,
    easinessFactor: 2.5,
    interval: 6,
    repetitions: 1,
    nextReviewDate,
    lastReviewDate: '2025-01-01',
    lastGrade: 4,
    ...overrides,
  };
}

function makeProblem(id: string, neetcodeId: number): Problem {
  return {
    id,
    neetcodeId,
    title: id,
    category: 'Arrays & Hashing',
    difficulty: 'Easy',
    description: '',
    examples: [],
    constraints: [],
    functionSignature: `function ${id}() {}`,
    testCases: [],
  };
}

const today = new Date().toISOString().split('T')[0];
const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

const problem1 = makeProblem('contains-duplicate', 1);
const problem2 = makeProblem('valid-anagram', 2);
const problem3 = makeProblem('two-sum', 3);
const problem4 = makeProblem('group-anagrams', 4);
const allProblems = [problem1, problem2, problem3, problem4];

describe('getNextProblem', () => {
  it('returns neetcodeId 1 (first problem) when progress is empty', () => {
    const progress: UserProgress = { version: 1, problems: {} };
    const result = getNextProblem(progress, allProblems);
    expect(result.problem.neetcodeId).toBe(1);
    expect(result.isReview).toBe(false);
  });

  it('returns next unseen problem by neetcodeId when no reviews are due', () => {
    const progress: UserProgress = {
      version: 1,
      problems: {
        'contains-duplicate': makeRecord('contains-duplicate', 1, tomorrow),
      },
    };
    const result = getNextProblem(progress, allProblems);
    expect(result.problem.neetcodeId).toBe(2);
    expect(result.isReview).toBe(false);
  });

  it('returns most-overdue review when reviews are due', () => {
    const twoDaysAgo = new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0];
    const progress: UserProgress = {
      version: 1,
      problems: {
        'contains-duplicate': makeRecord('contains-duplicate', 1, yesterday),
        'valid-anagram': makeRecord('valid-anagram', 2, twoDaysAgo),
        'two-sum': makeRecord('two-sum', 3, tomorrow),
      },
    };
    const result = getNextProblem(progress, allProblems);
    expect(result.problem.id).toBe('valid-anagram'); // most overdue
    expect(result.isReview).toBe(true);
  });

  it('prioritizes due reviews over unlocking new problems', () => {
    const progress: UserProgress = {
      version: 1,
      problems: {
        'contains-duplicate': makeRecord('contains-duplicate', 1, today),
        'valid-anagram': makeRecord('valid-anagram', 2, tomorrow),
      },
    };
    // contains-duplicate is due today, valid-anagram is not; two-sum is unseen
    const result = getNextProblem(progress, allProblems);
    expect(result.problem.id).toBe('contains-duplicate');
    expect(result.isReview).toBe(true);
  });

  it('falls back to next-due review when all problems are seen and none due today', () => {
    const progress: UserProgress = {
      version: 1,
      problems: {
        'contains-duplicate': makeRecord('contains-duplicate', 1, tomorrow),
        'valid-anagram': makeRecord('valid-anagram', 2, tomorrow),
        'two-sum': makeRecord('two-sum', 3, tomorrow),
        'group-anagrams': makeRecord('group-anagrams', 4, tomorrow),
      },
    };
    const result = getNextProblem(progress, [problem1, problem2, problem3, problem4]);
    // All seen, none due — return the soonest upcoming
    expect(result.isReview).toBe(true);
    expect(result.problem).toBeDefined();
  });

  it('treats a record with nextReviewDate of today as due', () => {
    const progress: UserProgress = {
      version: 1,
      problems: {
        'contains-duplicate': makeRecord('contains-duplicate', 1, today),
      },
    };
    const result = getNextProblem(progress, allProblems);
    expect(result.problem.id).toBe('contains-duplicate');
    expect(result.isReview).toBe(true);
  });
});

describe('recordResult', () => {
  const feedback: Feedback = {
    correctnessScore: 100,
    communicationScore: 8,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    strengths: [],
    improvements: [],
    summary: '',
  };

  it('creates a new record for an unseen problem', () => {
    const progress: UserProgress = { version: 1, problems: {} };
    const updated = recordResult(progress, problem1, feedback, today);
    expect(updated.problems['contains-duplicate']).toBeDefined();
    expect(updated.problems['contains-duplicate'].lastReviewDate).toBe(today);
  });

  it('updates an existing record for a seen problem', () => {
    const progress: UserProgress = {
      version: 1,
      problems: {
        'contains-duplicate': makeRecord('contains-duplicate', 1, yesterday, { repetitions: 1 }),
      },
    };
    const updated = recordResult(progress, problem1, feedback, today);
    expect(updated.problems['contains-duplicate'].repetitions).toBeGreaterThan(1);
    expect(updated.problems['contains-duplicate'].lastReviewDate).toBe(today);
  });

  it('does not mutate the original progress object', () => {
    const progress: UserProgress = { version: 1, problems: {} };
    recordResult(progress, problem1, feedback, today);
    expect(progress.problems['contains-duplicate']).toBeUndefined();
  });
});
