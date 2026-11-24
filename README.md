# Interview Bot

An AI-powered CLI for practicing technical interviews. Simulates a real coding interview with an AI interviewer that guides you through problem clarification, planning, coding, and debrief — all from your terminal.

This project was written in Typescript, the challenges are executed in javascript.

## Features

- **Neetcode 150 problem bank** — curated problems with real test cases
- **Real code execution** — your JavaScript solution is run against test cases and graded
- **Visible debugging output** — failing test output includes expected/actual values plus captured `console.log` lines
- **AI interviewer** — runs locally via [Ollama](https://ollama.com) (Qwen2.5 7B by default), or remotely via GitHub Models
- **Multi-phase interview flow** — mirrors a real technical interview
- **Structured feedback & debrief** — correctness score, complexity analysis, communication score, strengths/improvements
- **Spaced repetition** - keeps track of your progress, and determines which problem to show using the SuperMemo-2 spaced repetition algorithm.

## Prerequisites

- Node.js 22 (if you use nvm, run `nvm use` to pick up the version in `.nvmrc`)
- [Ollama](https://ollama.com) (`brew install ollama`), or optionally a GitHub account with a Copilot subscription for [GitHub Models](https://github.com/marketplace/models)

## Setup

```bash
git clone https://github.com/your-username/interview-bot.git
cd interview-bot
nvm use        # optional, if you use nvm
npm install
cp .env.example .env
```

Start Ollama and pull the default model:

```bash
brew services start ollama   # or run `ollama serve` in another terminal, or open the Ollama app
ollama pull qwen2.5:7b
```

When you're finished practicing:

```bash
ollama stop qwen2.5:7b       # unload the model to free memory, but keep the server running
brew services stop ollama    # stop the server (Ctrl+C if you used `ollama serve`, or quit the app)
```

On Apple Silicon, use native (arm64) builds of Homebrew and Ollama. Ollama can't use the GPU when running under Rosetta. While the model is loaded, `ollama ps` should show it running on the GPU.

The defaults in `.env` work out of the box. To use a different model, set `LLM_MODEL`:

```env
LLM_PROVIDER=ollama
LLM_MODEL=qwen2.5:7b         # on 8 GB machines, llama3.2:3b or qwen2.5:3b are lighter options
```

The app checks that Ollama is reachable and the model is pulled before starting an interview.

To use GitHub Models instead:

```env
LLM_PROVIDER=github
GITHUB_TOKEN=your_github_token_here        # PAT with models:read scope, or Copilot token
INTERVIEW_MODEL=gpt-4o                     # optional — default is gpt-4o
```

Interview bot will open your editor to allow you to work on the problem - whatever is in your environment as `$EDITOR`. I recommend something simple like vim or nano so you can practice syntax without the help of a language server. 

## Usage

```bash
npm run dev
```

You'll be guided through 5 interview phases:

1. **Clarification** — ask the AI interviewer questions about the problem
2. **Planning** — describe your approach before coding
3. **Coding** — your `$EDITOR` opens with the function signature; write your JavaScript solution, then save and close to submit. You have **20 minutes**.
4. **Follow-up** — the interviewer asks about complexity and trade-offs
5. **Debrief** — review your score, feedback, and areas for improvement

If your solution fails any test cases, you'll be offered a chance to fix your code before moving to the follow-up phase. The failing test view includes expected vs. actual output, and any `console.log` output emitted during each test run is shown inline.

### Controls

| Input | Effect |
|-------|--------|
| `next` or `ready` | Advance to the next phase (Clarification, Planning) |
| `done` | End the follow-up phase |
| `Ctrl+C` | Exit at any time |

## Interview Flow

| Phase | Description |
|-------|-------------|
| Setup | Problem selection via spaced repetition |
| Clarification | Q&A with the interviewer about edge cases and constraints |
| Planning | Explain your intended approach |
| Coding | Write and submit your JS solution in your editor (20-min timer) |
| Follow-up | Complexity and design discussion |
| Debrief | Scored feedback with strengths and improvements |

## Development

```bash
npm test          
npm run lint:fix  
npm run build     
```

## Architecture

```
src/
  agents/           # AI agent logic (interviewer persona, prompts)
  interview/        # session management and phase transitions
  runner/           # code execution and test case evaluation
  spacedRepetition/ # SM-2 algorithm and progress tracking
  ui/               # terminal display and user input
  lib/              # shared utilities
  types.ts          # core interfaces (Problem, InterviewSession, Feedback, etc.)
data/
  problems/         # problem definitions as TypeScript files
  progress.json     # your spaced repetition progress (auto-generated)
```

## Adding Problems

Problems live in `data/problems/<category>/index.ts` as TypeScript objects implementing the `Problem` interface from `src/types.ts`. Each problem needs an `id`, `neetcodeId`, `title`, `category`, `difficulty`, `description`, `examples`, `constraints`, `functionSignature`, and `testCases`.

## Contributing

Want to support another language? A different model? A different problem set? Feel free to fork this repo and make a contribution. This is released under the MIT license. Go support [Neetcode](https://neetcode.io) for coming up with this list. 
