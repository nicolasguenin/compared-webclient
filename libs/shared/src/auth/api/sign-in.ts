import { api } from '@cpd/shared';
import { SignInPayload, SignInResponse } from '../types';

export default async function signIn(payload: SignInPayload) {
  return api.post<SignInResponse>('/signin', payload).catch((err) => {
    if (err?.response?.data) {
      throw {
        ...err.response.data,
        payload,
      };
    }
    throw {
      error: {
        message: 'An error occurred during sign-in tentative',
      },
      payload,
    };
  });
}
