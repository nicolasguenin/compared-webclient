import { api } from '@cpd/shared';
import { ICurrentUser } from '../types';

export default async function fetchCurrentUser() {
  const { data } = await api.get<ICurrentUser>('/user');
  return data;
}
