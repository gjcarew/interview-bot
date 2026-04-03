import * as readline from 'readline';
import * as dotenv from 'dotenv';

import { ALL_PROBLEMS } from '../data/problems/index';
import {
  createSession,
  addMessage,
  advancePhase,
  endSession,
  submitCode,
  setRunResult,
} from './interview/session';
import { getInterviewerResponse } from './agents/interviewer';
import { evaluateSession } from './agents/evaluator';
import { runCode } from './runner/codeRunner';
import { openEditor } from './ui/editor';
import {
  displayProblem,
  displayPhaseHeader,
  displayMessage,
  displayRunResults,
  displayFeedback,
  displayTimerStart,
  displayTimerWarning,
  displayTimerExpired,
} from './ui/display';
import { loadProgress, saveProgress, getNextProblem, recordResult } from './spacedRepetition/index';
import type { InterviewSession } from './types';

dotenv.config();

function ask(rl: readline.Interface, prompt: string): Promise<string> {
  return new Promise(resolve => rl.question(prompt, resolve));
}

async function main(): Promise<void> {
  process.on('SIGINT', () => {
    console.log('');
    process.exit(0);
  });

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  console.log('\n🎤  Welcome to Interview Bot!\n');
  console.log('Controls:');
  console.log('  • Type "next" or "ready" to advance to the next phase');
  console.log('  • Type "done" to end the follow-up phase');
  console.log('  • Press Ctrl+C to exit at any time\n');

  const progress = loadProgress();
  const { problem, isReview } = getNextProblem(progress, ALL_PROBLEMS);

  const indicator = isReview ? '🔄 Review' : '🆕 New';
  console.log(`${indicator}: ${problem.title}  (NeetCode #${problem.neetcodeId})\n`);

  let session: InterviewSession = createSession(problem, problem.difficulty);
  session = advancePhase(session); // setup → clarification

  displayProblem(problem);

  // ── Clarification ────────────────────────────────────────────────────────────
  displayPhaseHeader('clarification');

  const openingResponse = await getInterviewerResponse(session);
  session = addMessage(session, 'assistant', openingResponse);
  displayMessage('assistant', openingResponse);

  while (true) {
    const input = await ask(rl, '\nYou (type "next" to proceed): ');

    const normalized = input.trim().toLowerCase();
    if (normalized === 'next' || normalized === 'ready') break;

    session = addMessage(session, 'user', input);
    const response = await getInterviewerResponse(session);
    session = addMessage(session, 'assistant', response);
    displayMessage('assistant', response);
  }

  session = advancePhase(session); // clarification → planning

  // ── Planning ─────────────────────────────────────────────────────────────────
  displayPhaseHeader('planning');

  const planningOpening = await getInterviewerResponse(session);
  session = addMessage(session, 'assistant', planningOpening);
  displayMessage('assistant', planningOpening);

  while (true) {
    const input = await ask(rl, '\nYou (type "next" to proceed): ');
    if (input.trim().toLowerCase() === 'next') break;

    session = addMessage(session, 'user', input);
    const response = await getInterviewerResponse(session);
    session = addMessage(session, 'assistant', response);
    displayMessage('assistant', response);
  }

  session = advancePhase(session); // planning → coding

  // ── Coding ───────────────────────────────────────────────────────────────────
  displayPhaseHeader('coding');

  const CODING_DURATION_MS = 20 * 60 * 1000;
  const WARNING_THRESHOLD_MS = 5 * 60 * 1000;
  const codingStartedAt = Date.now();

  displayTimerStart(20);

  // openEditor creates its own readline interface over stdin, so close ours first
  rl.close();
  const submittedCode = await openEditor(problem.functionSignature);

  const elapsedMs = Date.now() - codingStartedAt;
  const remainingMs = CODING_DURATION_MS - elapsedMs;

  if (remainingMs <= 0) {
    displayTimerExpired();
  } else if (remainingMs <= WARNING_THRESHOLD_MS) {
    displayTimerWarning(Math.ceil(remainingMs / 60_000));
  }

  session = submitCode(session, submittedCode);

  const runResult = runCode(submittedCode, problem.testCases);
  session = setRunResult(session, runResult);

  displayRunResults(runResult);

  // ── Pre-follow-up fix loop ────────────────────────────────────────────────
  let finalCode = submittedCode;
  let finalResult = runResult;

  if (finalResult.passed < finalResult.total) {
    const rlFix = readline.createInterface({ input: process.stdin, output: process.stdout });

    while (finalResult.passed < finalResult.total) {
      const answer = await ask(rlFix, '\nWould you like to fix your code before the follow-up? (y/n): ');
      if (answer.trim().toLowerCase() !== 'y') break;

      finalCode = await openEditor(finalCode);
      finalResult = runCode(finalCode, problem.testCases);
      displayRunResults(finalResult);

      if (finalResult.passed === finalResult.total) {
        console.log('✅  All tests passing!\n');
        break;
      }
    }

    rlFix.close();

    if (finalCode !== submittedCode) {
      session = submitCode(session, finalCode);
      session = setRunResult(session, finalResult);
    }
  }

  session = addMessage(session, 'user', 'Submitted code:\n' + finalCode);
  session = addMessage(
    session,
    'assistant',
    `Test results: ${finalResult.passed}/${finalResult.total} passed`,
  );

  session = advancePhase(session); // coding → followup

  // Re-open readline for follow-up phase
  const rl2 = readline.createInterface({ input: process.stdin, output: process.stdout });

  // ── Follow-Up ─────────────────────────────────────────────────────────────────
  displayPhaseHeader('followup');

  const followupOpening = await getInterviewerResponse(session);
  session = addMessage(session, 'assistant', followupOpening);
  displayMessage('assistant', followupOpening);

  while (true) {
    const input = await ask(rl2, '\nYou (type "done" to finish): ');
    if (input.trim().toLowerCase() === 'done') break;

    session = addMessage(session, 'user', input);
    const response = await getInterviewerResponse(session);
    session = addMessage(session, 'assistant', response);
    displayMessage('assistant', response);
  }

  rl2.close();

  session = endSession(session);

  // ── Debrief ───────────────────────────────────────────────────────────────────
  displayPhaseHeader('debrief');

  const feedback = await evaluateSession(session);
  displayFeedback(feedback);

  const reviewDate = new Date().toISOString().split('T')[0];
  const updatedProgress = recordResult(progress, problem, feedback, reviewDate);
  saveProgress(updatedProgress);

  const nextReviewDate = updatedProgress.problems[problem.id]?.nextReviewDate;
  if (nextReviewDate) {
    const daysUntil = Math.round(
      (new Date(nextReviewDate).getTime() - new Date(reviewDate).getTime()) / 86400000,
    );
    const when = daysUntil === 0 ? 'today' : daysUntil === 1 ? 'tomorrow' : `in ${daysUntil} days`;
    console.log(`\n📅  Next review of "${problem.title}": ${nextReviewDate} (${when})\n`);
  }

}

main().catch((err: unknown) => {
  console.error('\n❌  Something went wrong:', err instanceof Error ? err.message : String(err));
  process.exit(1);
});
