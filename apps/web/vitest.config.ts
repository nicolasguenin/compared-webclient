import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'web',
    include: ['**/*.test.{ts,js,jsx,tsx}'],
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
});
