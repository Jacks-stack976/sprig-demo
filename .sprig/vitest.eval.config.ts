import { defineConfig } from "vitest/config";

// Used by SprigAgent's Eval-Runner to execute a single frozen task test
// after the coding agent has attempted the task. Run from the repo root:
//   npx vitest run --config .sprig/vitest.eval.config.ts .sprig/tasks/task-01.test.ts
export default defineConfig({
  test: {
    include: [".sprig/tasks/**/*.test.ts"],
  },
});
