import type {
  Difficulty,
  InterviewPhase,
  InterviewSession,
  Message,
  MessageRole,
  Problem,
  RunResult,
} from '../types.js';

const PHASE_ORDER: InterviewPhase[] = [
  'setup',
  'clarification',
  'planning',
  'coding',
  'followup',
  'debrief',
];

export function getPhaseOrder(): InterviewPhase[] {
  return [...PHASE_ORDER];
}

export function createSession(problem: Problem, difficulty: Difficulty): InterviewSession {
  return {
    id: crypto.randomUUID(),
    problem,
    difficulty,
    phase: 'setup',
    messages: [],
    startedAt: new Date(),
  };
}

export function addMessage(
  session: InterviewSession,
  role: MessageRole,
  content: string,
): InterviewSession {
  const message: Message = { role, content, timestamp: new Date() };
  return { ...session, messages: [...session.messages, message] };
}

export function advancePhase(session: InterviewSession): InterviewSession {
  const index = PHASE_ORDER.indexOf(session.phase);
  if (index === PHASE_ORDER.length - 1) {
    throw new Error('Cannot advance phase: already at debrief');
  }
  return { ...session, phase: PHASE_ORDER[index + 1] };
}

export function submitCode(session: InterviewSession, code: string): InterviewSession {
  return { ...session, submittedCode: code };
}

export function setRunResult(session: InterviewSession, result: RunResult): InterviewSession {
  return { ...session, runResult: result };
}

export function endSession(session: InterviewSession): InterviewSession {
  return { ...session, endedAt: new Date() };
}
