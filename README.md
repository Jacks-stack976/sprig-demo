# sprig-demo

A tiny TypeScript invoicing toolkit: compute a subtotal from line items, apply a
percentage discount, then apply tax. Pure functions, no I/O, fully tested.

This repo exists as a **testbed for SprigAgent** — its `CLAUDE.md`, `GEMINI.md`,
and `AGENTS.md` are intentionally a mix of clean and messy so the agent has real
context to prune. The application code itself is incidental.

## Quickstart
```bash
npm install
npm start        # prints a sample invoice total
npm test         # runs the baseline suite (8 tests)
npm run typecheck
npm run lint
```

## Layout
- `src/` — `currency`, `tax`, `discount`, `validate`, `invoice`, `index`
- `tests/` — baseline suite (always green)
- `.sprig/tasks/` — frozen eval suite SprigAgent runs to prove a prune is safe
- `.sprig/vitest.eval.config.ts` — runner config for a single task test

## How SprigAgent uses the eval suite
For a candidate prune, the Eval-Runner copies the repo, has the coding agent
attempt each task, then runs the paired test:
```bash
npx vitest run --config .sprig/vitest.eval.config.ts .sprig/tasks/task-01.test.ts
```
Pass rate with the full config vs. the pruned config is the evidence: quality
must hold (tests still pass) and token cost must drop for a change to be surfaced.
