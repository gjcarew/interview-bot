import type { Problem, RunResult, Feedback, InterviewPhase } from '../types';

// ANSI escape codes — avoids ESM-only chalk v5 / boxen v8 issues in CommonJS
const A = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  bgCyan: '\x1b[46m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgRed: '\x1b[41m',
  bgBlue: '\x1b[44m',
  black: '\x1b[30m',
};

function styled(...parts: string[]): string {
  return parts.join('') + A.reset;
}

function box(content: string, title?: string): string {
  const lines = content.split('\n');
  const width = Math.max(...lines.map((l) => stripAnsi(l).length), title ? stripAnsi(title).length + 2 : 0);
  const hr = '─'.repeat(width + 2);
  const top = title
    ? `┌─ ${styled(A.bold, title)} ${'─'.repeat(Math.max(0, width - stripAnsi(title).length - 1))}┐`
    : `┌${hr}┐`;
  const bottom = `└${hr}┘`;
  const rows = lines.map((l) => {
    const pad = width - stripAnsi(l).length;
    return `│ ${l}${' '.repeat(pad)} │`;
  });
  return [top, ...rows, bottom].join('\n');
}

function stripAnsi(str: string): string {
   
  return str.replace(/\x1b\[[0-9;]*m/g, '');
}

const DIFFICULTY_STYLE: Record<string, string> = {
  Easy: styled(A.bold, A.bgGreen, A.black, ' Easy '),
  Medium: styled(A.bold, A.bgYellow, A.black, ' Medium '),
  Hard: styled(A.bold, A.bgRed, A.white, ' Hard '),
};

const PHASE_LABEL: Record<InterviewPhase, string> = {
  setup: 'Setup',
  clarification: 'Clarification',
  planning: 'Planning',
  coding: 'Coding',
  followup: 'Follow-up',
  debrief: 'Debrief',
};

export function displayProblem(problem: Problem): void {
  const difficulty = DIFFICULTY_STYLE[problem.difficulty] ?? problem.difficulty;
  const header = `${styled(A.bold, A.cyan, problem.title)}  ${difficulty}  ${styled(A.dim, `[${problem.category}]`)}`;
  const lines: string[] = [header, ''];

  lines.push(problem.description);

  if (problem.examples.length > 0) {
    lines.push('', styled(A.bold, 'Examples:'));
    for (const ex of problem.examples) {
      lines.push(`  ${styled(A.cyan, 'Input:')}  ${ex.input}`);
      lines.push(`  ${styled(A.cyan, 'Output:')} ${ex.output}`);
      if (ex.explanation) lines.push(`  ${styled(A.dim, ex.explanation)}`);
    }
  }

  if (problem.constraints.length > 0) {
    lines.push('', styled(A.bold, 'Constraints:'));
    for (const c of problem.constraints) lines.push(`  • ${c}`);
  }

  console.log('\n' + box(lines.join('\n'), `#${problem.neetcodeId} ${problem.title}`) + '\n');
}

export function displayMessage(role: 'user' | 'assistant', content: string): void {
  if (role === 'assistant') {
    console.log(`${styled(A.bold, A.cyan, '🤖 Interviewer:')} ${styled(A.cyan, content)}`);
  } else {
    console.log(`${styled(A.bold, A.white, '👤 You:')} ${content}`);
  }
}

const STATUS_ICON: Record<string, string> = {
  pass: styled(A.green, '✓'),
  fail: styled(A.red, '✗'),
  error: styled(A.yellow, '⚠'),
  timeout: styled(A.yellow, '⏱'),
};

export function displayRunResults(result: RunResult): void {
  console.log(`\n${styled(A.bold, 'Test Results:')}`);

  result.results.forEach((r, i) => {
    const icon = STATUS_ICON[r.status] ?? r.status;
    const label = r.testCase.label ?? `Test ${i + 1}`;
    const time = styled(A.dim, `(${r.durationMs}ms)`);

    if (r.status === 'pass') {
      console.log(`  ${icon} ${label} ${time}`);
    } else if (r.status === 'fail') {
      console.log(`  ${icon} ${styled(A.red, label)} ${time}`);
      console.log(`     Expected: ${styled(A.green, JSON.stringify(r.testCase.expected))}`);
      console.log(`     Actual:   ${styled(A.red, JSON.stringify(r.actual))}`);
    } else if (r.status === 'error') {
      console.log(`  ${icon} ${styled(A.yellow, label)} ${time}`);
      console.log(`     ${styled(A.dim, r.errorMessage ?? 'Unknown error')}`);
    } else {
      console.log(`  ${icon} ${styled(A.yellow, label)} — timed out ${time}`);
    }
  });

  const summaryColor = result.passed === result.total ? A.green : result.passed === 0 ? A.red : A.yellow;
  console.log(`\n  ${styled(summaryColor, A.bold, `${result.passed}/${result.total} tests passed`)}\n`);
}

export function displayFeedback(feedback: Feedback): void {
  const lines: string[] = [];

  const correctnessBadge = feedback.correctnessScore >= 80
    ? styled(A.bgGreen, A.black, A.bold, ` ${feedback.correctnessScore}% `)
    : feedback.correctnessScore >= 50
      ? styled(A.bgYellow, A.black, A.bold, ` ${feedback.correctnessScore}% `)
      : styled(A.bgRed, A.white, A.bold, ` ${feedback.correctnessScore}% `);

  lines.push(`${styled(A.bold, 'Correctness:')} ${correctnessBadge}   ${styled(A.bold, 'Communication:')} ${feedback.communicationScore}/10`);
  lines.push(`${styled(A.bold, 'Complexity:')} Time ${styled(A.cyan, feedback.timeComplexity)}  ·  Space ${styled(A.cyan, feedback.spaceComplexity)}`);
  lines.push('');
  lines.push(feedback.summary);

  if (feedback.strengths.length > 0) {
    lines.push('', styled(A.bold, A.green, '✓ Strengths:'));
    for (const s of feedback.strengths) lines.push(`  • ${s}`);
  }

  if (feedback.improvements.length > 0) {
    lines.push('', styled(A.bold, A.yellow, '↑ Areas for Improvement:'));
    for (const imp of feedback.improvements) lines.push(`  • ${imp}`);
  }

  console.log('\n' + box(lines.join('\n'), 'Interview Feedback') + '\n');
}

export function displayPhaseHeader(phase: InterviewPhase): void {
  const label = PHASE_LABEL[phase];
  const bar = '━'.repeat(label.length + 4);
  console.log(`\n${styled(A.bold, A.bgBlue, A.white, `  Phase: ${label}  `)}\n${styled(A.blue, bar)}\n`);
}

export function clearScreen(): void {
  process.stdout.write('\x1b[2J\x1b[H');
}
