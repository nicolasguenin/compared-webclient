import { setupServer } from 'msw/node';
import { signInHandlers } from './handlers/signin';

export const server = setupServer(...signInHandlers);
