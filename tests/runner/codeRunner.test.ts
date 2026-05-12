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
  {
    input: [[2, 7, 11, 15], 9],
    expected: [0, 1],
    label: 'basic',
    comparison: 'unordered-array-deep-equal',
  },
  {
    input: [[3, 2, 4], 6],
    expected: [1, 2],
    label: 'non-zero start',
    comparison: 'unordered-array-deep-equal',
  },
  {
    input: [[3, 3], 6],
    expected: [0, 1],
    label: 'duplicates',
    comparison: 'unordered-array-deep-equal',
  },
];

describe('runCode', () => {
  it('passes all test cases for a correct solution', () => {
    const result = runCode(twoSumCorrect, twoSumCases);
    expect(result.results.every((r: TestResult) => r.status === 'pass')).toBe(true);
    expect(result.passRate).toBe(1);
    expect(result.passed).toBe(result.total);
  });

  it('passes when unordered array output has the right values in a different order', () => {
    const reversedTwoSum = `
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) return [i, map[complement]];
    map[nums[i]] = i;
  }
}
`;

    const result = runCode(reversedTwoSum, [
      {
        input: [[3, 2, 4], 6],
        expected: [1, 2],
        comparison: 'unordered-array-deep-equal',
      },
    ]);

    expect(result.results[0].status).toBe('pass');
    expect(result.results[0].actual).toEqual([2, 1]);
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

  it('includes code snippet and line number in syntax error message', () => {
    const code = [
      'function twoSum(nums, target) {',
      '  const fMap = new Map();',
      '  for (let i = 0; i < nums.length; i++) {',
      '    fMap.set(i, ++(fMap.get(i) ?? 0))',
      '  }',
      '}',
    ].join('\n');
    const cases: TestCase[] = [{ input: [], expected: null }];
    const result = runCode(code, cases);
    const msg = result.results[0].errorMessage ?? '';
    expect(msg).toMatch(/Line \d+ in solution\.js/);
    expect(msg).toMatch(/\^\^+/);
    expect(msg).toContain('SyntaxError');
  });

  it('includes stack trace in runtime error message', () => {
    const code = `function broken() { throw new Error('oops'); }`;
    const cases: TestCase[] = [{ input: [], expected: null }];
    const result = runCode(code, cases);
    const msg = result.results[0].errorMessage ?? '';
    expect(msg).toContain('Error: oops');
    expect(msg).toMatch(/at broken/);
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

  it('supports custom invocation for multi-function problems', () => {
    const code = `
function encode(strs) {
  return strs.map((str) => \`\${str.length}#\${str}\`).join('');
}

function decode(s) {
  const result = [];
  let index = 0;

  while (index < s.length) {
    let delimiter = index;
    while (s[delimiter] !== '#') delimiter++;

    const length = Number(s.slice(index, delimiter));
    const start = delimiter + 1;
    result.push(s.slice(start, start + length));
    index = start + length;
  }

  return result;
}
`;
    const cases: TestCase[] = [
      {
        input: [['lint', 'code', 'love', 'you']],
        expected: ['lint', 'code', 'love', 'you'],
        invocation: '__result__ = decode(encode(__args__[0]))',
      },
    ];

    const result = runCode(code, cases);
    expect(result.results[0].status).toBe('pass');
    expect(result.passed).toBe(1);
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
