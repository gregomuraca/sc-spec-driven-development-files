import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Compile JSX in test files with Hono's runtime, matching tsconfig.json.
  oxc: { jsx: { runtime: 'automatic', importSource: 'hono/jsx' } },
  test: {
    include: ['tests/**/*.test.{ts,tsx}'],
  },
});
