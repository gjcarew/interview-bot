# Interview Bot

An AI-powered CLI for practicing technical interviews. Simulates a real coding interview with an AI interviewer that guides you through problem clarification, planning, coding, and debrief — all from your terminal.

A secondary goal of this project is to explore agentic coding workflows, sub-agent personas, and agent skills with the aim of writing enterprise-level software that fully leverages AI tools.

## Features

- **Neetcode 150 problem bank** — curated problems with real test cases
- **Real code execution** — your JavaScript solution is run against test cases and graded
- **AI interviewer** — powered by GitHub Models (GPT-4o by default)
- **Multi-phase interview flow** — mirrors a real technical interview
- **Structured feedback & debrief** — correctness score, complexity analysis, communication score, strengths/improvements

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

## Usage

```bash
npm run dev
```

You'll be guided through 6 interview phases:

1. **Setup** — select a problem and difficulty
2. **Clarification** — ask the AI interviewer questions about the problem
3. **Planning** — describe your approach before coding
4. **Coding** — type your JavaScript solution line by line; type `--submit` on a new line to submit
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

## Problem Bank

Currently includes **Arrays & Hashing** (9 problems from Neetcode 150):

| # | Problem | Difficulty |
|---|---------|------------|
| 1 | Contains Duplicate | Easy |
| 2 | Valid Anagram | Easy |
| 3 | Two Sum | Easy |
| 4 | Group Anagrams | Medium |
| 5 | Top K Frequent Elements | Medium |
| 6 | Encode and Decode Strings | Medium |
| 7 | Product of Array Except Self | Medium |
| 8 | Valid Sudoku | Medium |
| 9 | Longest Consecutive Sequence | Medium |

Each problem includes multiple test cases that are executed against your submitted code.

## Development

```bash
npm test          # run tests (35 tests)
npm run lint:fix  # lint and auto-fix
npm run build     # compile TypeScript to dist/
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

