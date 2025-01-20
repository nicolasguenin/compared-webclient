import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'shared',
    include: ['**/*.test.{ts,js,jsx,tsx}'],
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
});
