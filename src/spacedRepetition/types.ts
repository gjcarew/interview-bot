export interface ProblemRecord {
  problemId: string;
  neetcodeId: number;
  /** Easiness factor, range 1.3–2.5, starts at 2.5 */
  easinessFactor: number;
  /** Days until next review */
  interval: number;
  /** Consecutive successful review count (grade >= 3) */
  repetitions: number;
  /** ISO date YYYY-MM-DD */
  nextReviewDate: string;
  /** ISO date YYYY-MM-DD */
  lastReviewDate: string;
  /** SM-2 grade 0–5 from last session */
  lastGrade: number;
}

export interface UserProgress {
  version: 1;
  problems: Record<string, ProblemRecord>;
}
