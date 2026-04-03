import { runCode, hasErrors } from '../../src/runner/codeRunner';
import { TestCase, TestResult } from '../../src/types';

const twoSumCorrect = `
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) return [map[complement], i];
    map[nums[i]] = i;
  }
}
`;

const twoSumWrong = `function twoSum(nums, target) { return []; }`;

const twoSumCases: TestCase[] = [
  { input: [[2, 7, 11, 15], 9], expected: [0, 1], label: 'basic' },
  { input: [[3, 2, 4], 6],      expected: [1, 2], label: 'non-zero start' },
  { input: [[3, 3], 6],          expected: [0, 1], label: 'duplicates' },
];

describe('runCode', () => {
  it('passes all test cases for a correct solution', () => {
    const result = runCode(twoSumCorrect, twoSumCases);
    expect(result.results.every((r: TestResult) => r.status === 'pass')).toBe(true);
    expect(result.passRate).toBe(1);
    expect(result.passed).toBe(result.total);
  });

  it('fails all test cases for an always-wrong solution', () => {
    const result = runCode(twoSumWrong, twoSumCases);
    expect(result.results.every((r: TestResult) => r.status === 'fail')).toBe(true);
    expect(result.passed).toBe(0);
  });

  it('tracks totals correctly', () => {
    const result = runCode(twoSumCorrect, twoSumCases);
    expect(result.total).toBe(twoSumCases.length);
    expect(result.passed + result.failed).toBe(result.total);
  });

  it('captures runtime errors with errorMessage', () => {
    const code = `function broken() { throw new Error('oops'); }`;
    const cases: TestCase[] = [{ input: [], expected: null }];
    const result = runCode(code, cases);
    expect(result.results[0].status).toBe('error');
    expect(result.results[0].errorMessage).toContain('oops');
  });

  it('captures syntax errors as error status', () => {
    const code = `function bad( { }`;
    const cases: TestCase[] = [{ input: [], expected: null }];
    const result = runCode(code, cases);
    expect(result.results[0].status).toBe('error');
  });

  it('times out an infinite loop', () => {
    const code = `function forever() { while(true) {} }`;
    const cases: TestCase[] = [{ input: [], expected: null }];
    const result = runCode(code, cases);
    expect(result.results[0].status).toBe('timeout');
  }, 10000);

  it('records durationMs >= 0 for every result', () => {
    const result = runCode(twoSumCorrect, twoSumCases);
    expect(result.results.every((r: TestResult) => r.durationMs >= 0)).toBe(true);
  });

  it('captures actual value on a passing test', () => {
    const result = runCode(twoSumCorrect, twoSumCases);
    const passing = result.results.find((r: TestResult) => r.status === 'pass')!;
    expect(passing.actual).toEqual(passing.testCase.expected);
  });

  it('captures actual value on a failing test', () => {
    const result = runCode(twoSumWrong, twoSumCases);
    const failing = result.results.find((r: TestResult) => r.status === 'fail')!;
    expect(failing.actual).toBeDefined();
    expect(failing.actual).not.toEqual(failing.testCase.expected);
  });

  it('handles mixed pass/fail correctly', () => {
    const code = `function alwaysFortyTwo() { return 42; }`;
    const cases: TestCase[] = [
      { input: [], expected: 42 },
      { input: [], expected: 99 },
    ];
    const result = runCode(code, cases);
    expect(result.passed).toBe(1);
    expect(result.failed).toBe(1);
    expect(result.passRate).toBe(0.5);
  });
});

describe('hasErrors', () => {
  it('returns true when a syntax error prevents code from compiling', () => {
    const result = runCode(`function bad( { }`, [{ input: [], expected: null }]);
    expect(hasErrors(result)).toBe(true);
  });

  it('returns true when a runtime error is thrown during execution', () => {
    const result = runCode(`function broken() { throw new Error('oops'); }`, [{ input: [], expected: null }]);
    expect(hasErrors(result)).toBe(true);
  });

  it('returns false when all tests pass', () => {
    const result = runCode(twoSumCorrect, twoSumCases);
    expect(hasErrors(result)).toBe(false);
  });

  it('returns false when tests fail with wrong output (not errors)', () => {
    const result = runCode(twoSumWrong, twoSumCases);
    expect(hasErrors(result)).toBe(false);
  });

  it('returns false for an empty result set', () => {
    const result = runCode(twoSumCorrect, []);
    expect(hasErrors(result)).toBe(false);
  });
});
