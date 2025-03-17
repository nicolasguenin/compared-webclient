import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'widgets',
    include: ['**/*.test.{ts,js,jsx,tsx}'],
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
  resolve: {
    alias: {
      '@cpd/ui': path.resolve(__dirname, '../ui/src/atoms'),
      '@cpd/shared': path.resolve(__dirname, '../shared/src'),
    },
  },
});
