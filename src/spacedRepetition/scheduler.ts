import type { Problem, Feedback } from '../types';
import type { UserProgress } from './types';
import { computeGrade, createRecord, updateRecord } from './sm2';

export interface NextProblemResult {
  problem: Problem;
  isReview: boolean;
}

/** Returns true if a review date (YYYY-MM-DD) is due today or overdue */
function isDue(nextReviewDate: string, today: string): boolean {
  return nextReviewDate <= today;
}

/**
 * Select the next problem for the user.
 *
 * Priority:
 * 1. Most-overdue due review (nextReviewDate <= today), sorted oldest first
 * 2. Next unseen problem in neetcodeId ascending order
 * 3. Fallback: soonest upcoming review (when all problems seen, none currently due)
 */
export function getNextProblem(
  progress: UserProgress,
  allProblems: Problem[],
): NextProblemResult {
  const today = new Date().toISOString().split('T')[0];
  const problemsById = Object.fromEntries(allProblems.map(p => [p.id, p]));

  // Step 1: find all due reviews
  const dueReviews = Object.values(progress.problems)
    .filter(r => isDue(r.nextReviewDate, today))
    .sort((a, b) => a.nextReviewDate.localeCompare(b.nextReviewDate));

  if (dueReviews.length > 0) {
    const record = dueReviews[0];
    const problem = problemsById[record.problemId];
    if (problem) {
      return { problem, isReview: true };
    }
  }

  // Step 2: find the next unseen problem in neetcodeId order
  const seenIds = new Set(Object.keys(progress.problems));
  const unseen = allProblems
    .filter(p => !seenIds.has(p.id))
    .sort((a, b) => a.neetcodeId - b.neetcodeId);

  if (unseen.length > 0) {
    return { problem: unseen[0], isReview: false };
  }

  // Step 3: fallback — all problems seen, none due yet; return soonest upcoming
  const upcoming = Object.values(progress.problems)
    .sort((a, b) => a.nextReviewDate.localeCompare(b.nextReviewDate));

  const fallback = upcoming[0];
  const problem = problemsById[fallback.problemId];
  return { problem, isReview: true };
}

/**
 * Record the result of a completed session, updating or creating the problem record.
 * Returns a new UserProgress (does not mutate the original).
 */
export function recordResult(
  progress: UserProgress,
  problem: Problem,
  feedback: Feedback,
  reviewDate: string,
): UserProgress {
  const grade = computeGrade(feedback);
  const existing = progress.problems[problem.id];

  const baseRecord = existing ?? createRecord(problem.id, problem.neetcodeId);
  const updated = updateRecord(baseRecord, grade, reviewDate);

  return {
    ...progress,
    problems: {
      ...progress.problems,
      [problem.id]: updated,
    },
  };
}
