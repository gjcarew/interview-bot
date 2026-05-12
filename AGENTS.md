# Project overview
- Interview Bot is a terminal app for practicing coding interviews with an AI interviewer.
- The core experience is: select a problem, move through interview phases, submit code, run tests, discuss results, then record progress for spaced repetition.
- Good changes preserve the interview feel: realistic prompts, visible execution feedback, and small, predictable CLI interactions.

# Architecture
- `src/index.ts` is the main entry point. It wires together problem selection, interview phase transitions, code submission, evaluation, and progress persistence.
- `src/types.ts` is the shared source of truth for core domain types like `Problem`, `TestCase`, `InterviewSession`, `RunResult`, and `Feedback`.
- `src/interview/session.ts` owns immutable session state transitions such as adding messages, advancing phases, storing submitted code, and saving run results.
- `src/interview/problemBank.ts` provides problem lookup/filter helpers over the static problem dataset.
- `src/agents/interviewer.ts` builds the interviewer system prompt and generates the assistant's conversational behavior.
- `src/agents/evaluator.ts` turns the completed session and test results into final feedback.
- `src/runner/codeRunner.ts` executes submitted JavaScript against problem test cases and returns structured pass/fail/error results.
- `src/ui/` contains terminal presentation and editor integration. Keep display logic here instead of mixing it into interview or runner logic.
- `src/spacedRepetition/` contains scheduling, progress tracking, and SM-2 logic for deciding which problem to show next.
- `data/problems/` is the curated problem bank. Problem definitions are plain TypeScript objects grouped by topic.

# Core workflows
- Startup: load progress, choose the next review/new problem, create a session, and display the selected problem.
- Interview flow: clarification -> planning -> coding -> followup -> debrief. Phase progression is explicit in `session.ts`.
- Coding flow: open the user's editor with the function signature, run the submission against `problem.testCases`, and show structured results.
- Failed submission flow: allow the user to iterate before follow-up, then carry the final submitted code and run results into the interviewer/evaluator context.
- Debrief flow: evaluate the finished session, print feedback, update spaced repetition records, and persist progress.

# Development rules
- Do not access anything in the `~/jib/` directory. Alert the user if a request would violate that boundary.
- Prefer test-driven development when practical: write or update tests first, confirm the failure is meaningful, then implement the fix.
- Run `npm run lint:fix && npm test` after code changes. Documentation-only edits do not need that unless they affect tested behavior.
- Create feature branches from `main`.
- Use conventional commits.
- Keep edits behavior-safe and consistent with the existing CLI style: straightforward prompts, minimal surprise, and explicit feedback on failures.

# Agent guidance
- Start from existing patterns before adding new abstractions. This repo is small and benefits from direct, readable code.
- If you change a core type in `src/types.ts`, check all affected surfaces: runner, UI, agents, session flow, and tests.
- If you change problem behavior, update both the problem definition in `data/problems/` and the relevant runner/integration tests.
- Keep prompt changes in `src/agents/` tightly grounded in actual session state and visible execution results.
- Add UI assertions in `tests/ui/`, runner assertions in `tests/runner/`, agent prompt assertions in `tests/agents/`, and end-to-end flow checks in `tests/integration/`.
- Avoid speculative refactors. Prefer small changes that preserve the current architecture and user experience.
