import type { Feedback } from '../types';
import type { ProblemRecord } from './types';

const MIN_EASINESS_FACTOR = 1.3;
const DEFAULT_EASINESS_FACTOR = 2.5;

/** Map a 0–100 combined score to an SM-2 grade 0–5 */
function scoreToGrade(combinedScore: number): number {
  if (combinedScore < 20) return 0;
  if (combinedScore < 40) return 1;
  if (combinedScore < 60) return 2;
  if (combinedScore < 75) return 3;
  if (combinedScore < 90) return 4;
  return 5;
}

/**
 * Convert session Feedback to an SM-2 grade (0–5).
 * Combined score = correctnessScore×0.7 + communicationScore×10×0.3
 */
export function computeGrade(feedback: Feedback): number {
  const combined = feedback.correctnessScore * 0.7 + feedback.communicationScore * 10 * 0.3;
  return scoreToGrade(combined);
}

function addDays(dateStr: string, days: number): string {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
}

/** Create a brand-new ProblemRecord for a problem that has never been reviewed */
export function createRecord(problemId: string, neetcodeId: number): ProblemRecord {
  const today = new Date().toISOString().split('T')[0];
  return {
    problemId,
    neetcodeId,
    easinessFactor: DEFAULT_EASINESS_FACTOR,
    interval: 1,
    repetitions: 0,
    nextReviewDate: today,
    lastReviewDate: today,
    lastGrade: 0,
  };
}

/**
 * Apply the SM-2 algorithm to produce an updated ProblemRecord.
 * reviewDate: YYYY-MM-DD string representing when the review occurred.
 */
export function updateRecord(
  record: ProblemRecord,
  grade: number,
  reviewDate: string,
): ProblemRecord {
  let { easinessFactor, interval, repetitions } = record;

  if (grade < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easinessFactor);
    }
    repetitions += 1;
  }

  easinessFactor = Math.max(
    MIN_EASINESS_FACTOR,
    easinessFactor + 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02),
  );

  return {
    ...record,
    easinessFactor,
    interval,
    repetitions,
    lastReviewDate: reviewDate,
    lastGrade: grade,
    nextReviewDate: addDays(reviewDate, interval),
  };
}
