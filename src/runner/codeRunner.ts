import * as vm from 'vm';
import { TestCase, TestResult, RunResult } from '../types';

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

/** Normalize arrays and objects before order-insensitive deep equality checks. */
function normalizeForUnorderedArrayComparison(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value
      .map(normalizeForUnorderedArrayComparison)
      .sort((left, right) =>
        JSON.stringify(left).localeCompare(JSON.stringify(right))
      );
  }

  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, nestedValue]) => [key, normalizeForUnorderedArrayComparison(nestedValue)])
    );
  }

  return value;
}

function matchesExpected(actual: unknown, testCase: TestCase): boolean {
  if (testCase.comparison === 'unordered-array-deep-equal') {
    return deepEqual(
      normalizeForUnorderedArrayComparison(actual),
      normalizeForUnorderedArrayComparison(testCase.expected)
    );
  }

  return deepEqual(actual, testCase.expected);
}

/** Reformat vm.Script syntax error stacks from "file:line\n code\n ^^^" to "Line N in file\n code\n ^^^" */

function formatSyntaxError(e: unknown): string {
  const errLike = e as { stack?: string; message?: string };
  const stack = typeof errLike?.stack === 'string' ? errLike.stack : null;
  if (!stack) return errLike?.message ?? String(e);
  return stack
    .replace(/^([^:\n]+):(\d+)\n/, (_, file, line) => `Line ${line} in ${file}\n`)
    .replace(/\n\n(SyntaxError:)/, '\n$1');
}

/** Return the full stack trace for a runtime error */
function formatRuntimeError(e: unknown): string {
  const errLike = e as { stack?: string; message?: string };
  if (typeof errLike?.stack === 'string') return errLike.stack;
  return errLike?.message ?? String(e);
}

export function runCode(code: string, testCases: TestCase[]): RunResult {
  if (testCases.length === 0) {
    return { results: [], passed: 0, failed: 0, total: 0, passRate: 0 };
  }

  const match = /function\s+(\w+)\s*\(/.exec(code);
  const fnName = match?.[1];

  const results: TestResult[] = testCases.map((testCase) => {
    if (!fnName) {
      return {
        testCase,
        status: 'error',
        errorMessage: 'Could not parse function name',
        durationMs: 0,
      } satisfies TestResult;
    }

    const sandbox: Record<string, unknown> = {};
    vm.createContext(sandbox);

    let script: vm.Script;
    try {
      script = new vm.Script(code, { filename: 'solution.js' });
    } catch (e) {
      return {
        testCase,
        status: 'error',
        errorMessage: formatSyntaxError(e),
        durationMs: 0,
      } satisfies TestResult;
    }

    // Define the function in the sandbox (no timeout needed — just a definition)
    try {
      script.runInContext(sandbox);
    } catch (e) {
      return {
        testCase,
        status: 'error',
        errorMessage: formatRuntimeError(e),
        durationMs: 0,
      } satisfies TestResult;
    }

    // Call the function inside vm so the timeout applies to the invocation too
    const invocation = testCase.invocation?.trim() || `__result__ = ${fnName}(...__args__)`;
    const callScript = new vm.Script(invocation);
    sandbox['__args__'] = testCase.input;
    sandbox['__result__'] = undefined;

    const start = Date.now();
    try {
      callScript.runInContext(sandbox, { timeout: 5000 });
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      const isTimeout =
        (err as NodeJS.ErrnoException).code === 'ERR_SCRIPT_EXECUTION_TIMEOUT' ||
        err.message.toLowerCase().includes('timed out');
      return {
        testCase,
        status: isTimeout ? 'timeout' : 'error',
        errorMessage: isTimeout ? err.message : formatRuntimeError(e),
        durationMs: Date.now() - start,
      } satisfies TestResult;
    }
    const durationMs = Date.now() - start;
    const actual = sandbox['__result__'];

    const status = matchesExpected(actual, testCase) ? 'pass' : 'fail';
    return { testCase, status, actual, durationMs } satisfies TestResult;
  });

  const passed = results.filter((r) => r.status === 'pass').length;
  const failed = results.filter((r) => r.status !== 'pass').length;
  return { results, passed, failed, total: testCases.length, passRate: passed / testCases.length };
}

export function hasErrors(result: RunResult): boolean {
  return result.results.some((r) => r.status === 'error');
}
