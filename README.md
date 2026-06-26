# sprig-demo

A tiny TypeScript invoicing toolkit: compute a subtotal from line items, apply a
percentage discount, then apply tax. All money is handled in **integer cents**;
pure functions, no I/O, fully tested.

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
- `.sprigagent/tasks/<id>/` — frozen eval suite (one dir per task: `task.md`,
  hidden `test.test.ts`, `task.json`) that SprigAgent runs to prove a prune is safe
- `.sprigagent/vitest.eval.config.ts` — runner config for the task tests

## How SprigAgent uses the eval suite
For a candidate prune, the Eval-Runner copies the repo, has the coding agent
attempt each task (it sees only `task.md`, never the test), then runs the paired
hidden test:
```bash
npx vitest run --config .sprigagent/vitest.eval.config.ts \
  .sprigagent/tasks/001-split-evenly/test.test.ts
```
Pass rate with the full config vs. the pruned config is the evidence: quality
must hold (tests still pass) and token cost must drop for a change to be surfaced.
