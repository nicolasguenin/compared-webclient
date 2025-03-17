import { IUser } from '@cpd/entities/src/user';
import { api } from '@cpd/shared';
import { setCookie } from 'cookies-next';
import { SignInPayload } from '../types';

export default async function signIn(payload: SignInPayload) {
  return api.post<IUser>('/auth/signin', payload).then(async ({ data }) => {
    await setCookie('user', data.uuid, {
      secure: true,
    });
  });
}
