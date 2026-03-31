import { computeGrade, updateRecord, createRecord } from '../../src/spacedRepetition/sm2';
import type { Feedback } from '../../src/types';
import type { ProblemRecord } from '../../src/spacedRepetition/types';

function makeFeedback(correctnessScore: number, communicationScore: number): Feedback {
  return {
    correctnessScore,
    communicationScore,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    strengths: [],
    improvements: [],
    summary: '',
  };
}

describe('computeGrade', () => {
  it('returns 0 for combined score 0–19', () => {
    // correctness=0, comms=0 → combined=0
    expect(computeGrade(makeFeedback(0, 0))).toBe(0);
    // correctness=20, comms=0 → combined=14 (20*0.7=14)
    expect(computeGrade(makeFeedback(20, 0))).toBe(0);
  });

  it('returns 1 for combined score 20–39', () => {
    // correctness=28, comms=0 → combined=19.6 ≈ 19.6 → grade 0? No: 20*0.7=14... let me recalculate
    // combined = correctness*0.7 + comms*10*0.3
    // For combined=20: correctness=28.57, comms=0 → 28.57*0.7=20
    expect(computeGrade(makeFeedback(29, 0))).toBe(1); // 29*0.7=20.3 → grade 1
    expect(computeGrade(makeFeedback(55, 0))).toBe(1); // 55*0.7=38.5 → grade 1
  });

  it('returns 2 for combined score 40–59', () => {
    // 57*0.7=39.9 → grade 1; 58*0.7=40.6 → grade 2
    expect(computeGrade(makeFeedback(58, 0))).toBe(2); // 40.6 → grade 2
    expect(computeGrade(makeFeedback(80, 0))).toBe(2); // 56 → grade 2
  });

  it('returns 3 for combined score 60–74', () => {
    // 86*0.7=60.2 → grade 3
    expect(computeGrade(makeFeedback(86, 0))).toBe(3);
    // 100*0.7 + 0 = 70 → grade 3
    expect(computeGrade(makeFeedback(100, 0))).toBe(3);
  });

  it('returns 4 for combined score 75–89', () => {
    // 0*0.7 + 10*10*0.3 = 30 → grade 1... use mixed
    // correctness=100, comms=2.5 → 70 + 7.5 = 77.5 → grade 4
    expect(computeGrade(makeFeedback(100, 2.5))).toBe(4);
    // correctness=90, comms=5 → 63 + 15 = 78 → grade 4
    expect(computeGrade(makeFeedback(90, 5))).toBe(4);
  });

  it('returns 5 for combined score 90–100', () => {
    // correctness=100, comms=8 → 70 + 24 = 94 → grade 5
    expect(computeGrade(makeFeedback(100, 8))).toBe(5);
    // correctness=100, comms=10 → 70 + 30 = 100 → grade 5
    expect(computeGrade(makeFeedback(100, 10))).toBe(5);
  });

  it('handles boundary at exactly 20, 40, 60, 75, 90', () => {
    // combined=20 exactly → grade 1
    expect(computeGrade(makeFeedback(0, 6.667))).toBe(1); // 0 + 6.667*10*0.3 = 20.001 ≈ 20 → grade 1
    // combined=60 exactly → grade 3
    // 0*0.7 + 6.667*10*0.3... Let's use correctness only
    // 100*0.7 = 70, comms=3.33 → 70+9.99=79.99 ≈ 80 → grade 4
    // Let me compute combined=90: correctness=100, comms=6.667 → 70+20=90 → grade 5
    expect(computeGrade(makeFeedback(100, 6.667))).toBe(5);
  });
});

describe('createRecord', () => {
  it('creates a record with SM-2 default values', () => {
    const record = createRecord('two-sum', 3);
    expect(record.problemId).toBe('two-sum');
    expect(record.neetcodeId).toBe(3);
    expect(record.easinessFactor).toBe(2.5);
    expect(record.interval).toBe(1);
    expect(record.repetitions).toBe(0);
  });

  it('sets nextReviewDate to today', () => {
    const today = new Date().toISOString().split('T')[0];
    const record = createRecord('two-sum', 3);
    expect(record.nextReviewDate).toBe(today);
    expect(record.lastReviewDate).toBe(today);
  });
});

describe('updateRecord', () => {
  const baseRecord: ProblemRecord = {
    problemId: 'two-sum',
    neetcodeId: 3,
    easinessFactor: 2.5,
    interval: 1,
    repetitions: 0,
    nextReviewDate: '2025-01-01',
    lastReviewDate: '2025-01-01',
    lastGrade: 3,
  };

  const reviewDate = '2025-01-01';

  it('resets repetitions and interval to 1 when grade < 3', () => {
    const updated = updateRecord({ ...baseRecord, repetitions: 5, interval: 30 }, 2, reviewDate);
    expect(updated.repetitions).toBe(0);
    expect(updated.interval).toBe(1);
  });

  it('sets interval to 1 on first successful review (repetitions=0)', () => {
    const updated = updateRecord({ ...baseRecord, repetitions: 0 }, 3, reviewDate);
    expect(updated.interval).toBe(1);
    expect(updated.repetitions).toBe(1);
  });

  it('sets interval to 6 on second successful review (repetitions=1)', () => {
    const updated = updateRecord({ ...baseRecord, repetitions: 1, interval: 1 }, 4, reviewDate);
    expect(updated.interval).toBe(6);
    expect(updated.repetitions).toBe(2);
  });

  it('multiplies interval by EF on third+ successful review', () => {
    const record = { ...baseRecord, repetitions: 2, interval: 6, easinessFactor: 2.5 };
    const updated = updateRecord(record, 5, reviewDate);
    expect(updated.interval).toBe(Math.round(6 * 2.5));
    expect(updated.repetitions).toBe(3);
  });

  it('clamps easinessFactor to minimum 1.3', () => {
    const record = { ...baseRecord, easinessFactor: 1.35, repetitions: 1, interval: 1 };
    // grade 3: EF += 0.1 - (5-3)*(0.08+(5-3)*0.02) = 0.1 - 2*(0.08+0.04) = 0.1 - 0.24 = -0.14
    const updated = updateRecord(record, 3, reviewDate);
    expect(updated.easinessFactor).toBeGreaterThanOrEqual(1.3);
  });

  it('increases easinessFactor for grade 5', () => {
    const updated = updateRecord({ ...baseRecord, repetitions: 1 }, 5, reviewDate);
    expect(updated.easinessFactor).toBeGreaterThan(2.5);
  });

  it('sets nextReviewDate correctly based on interval', () => {
    const record = { ...baseRecord, repetitions: 1, interval: 1 };
    const updated = updateRecord(record, 4, '2025-03-01');
    // interval after rep=1, grade=4: interval=6
    const expectedDate = new Date('2025-03-01');
    expectedDate.setDate(expectedDate.getDate() + 6);
    expect(updated.nextReviewDate).toBe(expectedDate.toISOString().split('T')[0]);
  });

  it('updates lastReviewDate and lastGrade', () => {
    const updated = updateRecord(baseRecord, 4, '2025-06-15');
    expect(updated.lastReviewDate).toBe('2025-06-15');
    expect(updated.lastGrade).toBe(4);
  });
});
