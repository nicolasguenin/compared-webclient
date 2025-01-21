import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'features',
    include: ['**/*.test.{ts,js,jsx,tsx}'],
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
  resolve: {
    alias: {
      '@cpd/ui': path.resolve(__dirname, '../ui/lib/atoms'),
      '@cpd/shared': path.resolve(__dirname, '../shared/lib'),
    },
  },
});
