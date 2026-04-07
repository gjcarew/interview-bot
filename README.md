# Interview Bot

An AI-powered CLI for practicing technical interviews. Simulates a real coding interview with an AI interviewer that guides you through problem clarification, planning, coding, and debrief — all from your terminal.

This project was written in Typescript, the challenges are executed in javascript.

## Features

- **Neetcode 150 problem bank** — curated problems with real test cases
- **Real code execution** — your JavaScript solution is run against test cases and graded
- **AI interviewer** — powered by GitHub Models (GPT-4o by default)
- **Multi-phase interview flow** — mirrors a real technical interview
- **Structured feedback & debrief** — correctness score, complexity analysis, communication score, strengths/improvements
- **Spaced repetition** - keeps track of your progress, and determines which problem to show using the SuperMemo-2 spaced repetition algorithm.

## Prerequisites

- Node.js 18+
- A GitHub account with a Copilot subscription (for [GitHub Models](https://github.com/marketplace/models) API access)

## Setup

```bash
git clone https://github.com/your-username/interview-bot.git
cd interview-bot
npm install
cp .env.example .env
```

Edit `.env` and fill in your values:

```env
GITHUB_TOKEN=your_github_token_here        # PAT with models:read scope, or Copilot token
GITHUB_MODELS_ENDPOINT=https://models.inference.ai.azure.com
INTERVIEW_MODEL=gpt-4o                     # optional — default is gpt-4o
```

Interview bot will open your editor to allow you to work on the problem - whatever is in your environment as `$EDITOR`. I recommend something simple like vim or nano so you can practice syntax without the help of a language server. 

## Usage

```bash
npm run dev
```

You'll be guided through 5 interview phases:

1. **Clarification** — ask the AI interviewer questions about the problem
3. **Planning** — describe your approach before coding
4. **Coding** — type your JavaScript solution line by line; save and close your editor to submit
5. **Follow-up** — the interviewer asks about complexity and trade-offs
6. **Debrief** — review your score, feedback, and areas for improvement

## Interview Flow

| Phase | Description |
|-------|-------------|
| Setup | Problem selection |
| Clarification | Q&A with the interviewer about edge cases and constraints |
| Planning | Explain your intended approach |
| Coding | Write and submit your JS solution |
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
  agents/     # AI agent logic (interviewer persona, prompts)
  interview/  # session management and phase transitions
  runner/     # code execution and test case evaluation
  ui/         # terminal display and user input
  lib/        # shared utilities
  types.ts    # core interfaces (Problem, InterviewSession, Feedback, etc.)
data/
  problems/   # problem definitions as TypeScript files
```

## Adding Problems

Problems live in `data/problems/<category>/index.ts` as TypeScript objects implementing the `Problem` interface from `src/types.ts`. Each problem needs an `id`, `neetcodeId`, `title`, `category`, `difficulty`, `description`, `examples`, `constraints`, `functionSignature`, and `testCases`.

## Contributing

Want to support another language? A different model? A different problem set? Feel free to fork this repo and make a contribution. This is released under the MIT license. Go support [Neetcode](https://neetcode.io) for coming up with this list. 
