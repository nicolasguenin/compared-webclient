import { api } from '@cpd/shared';
import { IUser } from '../types';

export default async function fetchUser(id: string) {
  const { data } = await api.get<IUser>('/user', {
    params: {
      id,
    },
  });
  return data;
}
