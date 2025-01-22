import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll } from 'vitest';

// MSW configuration
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
