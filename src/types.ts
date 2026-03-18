// ─── Difficulty ───────────────────────────────────────────────────────────────

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

// ─── Problem & Test Cases ─────────────────────────────────────────────────────

export interface TestCase {
  /** Arguments passed to the solution function, in order */
  input: unknown[];
  /** Expected return value */
  expected: unknown;
  /** Optional human-readable label shown in results */
  label?: string;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Problem {
  /** Unique kebab-case identifier, e.g. "two-sum" */
  id: string;
  /** Position in the Neetcode 150 (1–150) */
  neetcodeId: number;
  title: string;
  category: string;
  difficulty: Difficulty;
  description: string;
  examples: Example[];
  constraints: string[];
  /** JS function stub the user fills in, e.g. "function twoSum(nums, target) {}" */
  functionSignature: string;
  testCases: TestCase[];
}

// ─── Code Runner ──────────────────────────────────────────────────────────────

export type TestStatus = 'pass' | 'fail' | 'error' | 'timeout';

export interface TestResult {
  testCase: TestCase;
  status: TestStatus;
  /** Actual value returned by the user's code (undefined on error/timeout) */
  actual?: unknown;
  /** Error message if status is 'error' */
  errorMessage?: string;
  /** Execution time in milliseconds */
  durationMs: number;
}

export interface RunResult {
  results: TestResult[];
  passed: number;
  failed: number;
  total: number;
  /** Overall pass rate 0–1 */
  passRate: number;
}

// ─── Interview Session ────────────────────────────────────────────────────────

export type InterviewPhase =
  | 'setup'
  | 'clarification'
  | 'planning'
  | 'coding'
  | 'followup'
  | 'debrief';

export type MessageRole = 'user' | 'assistant' | 'system';

export interface Message {
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface InterviewSession {
  id: string;
  problem: Problem;
  difficulty: Difficulty;
  phase: InterviewPhase;
  messages: Message[];
  /** The user's submitted code (set when they submit in coding phase) */
  submittedCode?: string;
  runResult?: RunResult;
  startedAt: Date;
  endedAt?: Date;
}

// ─── Feedback ─────────────────────────────────────────────────────────────────

export interface Feedback {
  /** 0–100 correctness score based on test pass rate */
  correctnessScore: number;
  /** e.g. "O(n)" */
  timeComplexity: string;
  /** e.g. "O(1)" */
  spaceComplexity: string;
  /** 0–10 score for how well the candidate communicated */
  communicationScore: number;
  strengths: string[];
  improvements: string[];
  /** Overall summary paragraph */
  summary: string;
}
