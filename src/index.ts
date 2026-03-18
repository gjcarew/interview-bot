import * as readline from 'readline';
import * as dotenv from 'dotenv';

import { getRandomProblem } from './interview/problemBank';
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
} from './ui/display';
import type { Difficulty, InterviewSession } from './types';

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

  console.log('Select difficulty: (1) Easy  (2) Medium  (3) Hard');
  const choice = await ask(rl, '> ');
  const difficulty: Difficulty = choice === '1' ? 'Easy' : choice === '2' ? 'Medium' : 'Hard';

  const problem = getRandomProblem({ difficulty });
  if (!problem) {
    console.error(`No problems found for difficulty: ${difficulty}`);
    rl.close();
    process.exit(1);
  }

  let session: InterviewSession = createSession(problem, difficulty);
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

  // openEditor creates its own readline interface over stdin, so close ours first
  rl.close();
  const submittedCode = await openEditor(problem.functionSignature);

  session = submitCode(session, submittedCode);

  const runResult = runCode(submittedCode, problem.testCases);
  session = setRunResult(session, runResult);

  displayRunResults(runResult);

  session = addMessage(session, 'user', 'Submitted code:\n' + submittedCode);
  session = addMessage(
    session,
    'assistant',
    `Test results: ${runResult.passed}/${runResult.total} passed`,
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
}

main().catch((err: unknown) => {
  console.error('\n❌  Something went wrong:', err instanceof Error ? err.message : String(err));
  process.exit(1);
});
