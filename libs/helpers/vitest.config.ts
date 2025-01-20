import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'helpers',
    include: ['**/*.test.{ts,js}'],
    environment: 'node',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
});
