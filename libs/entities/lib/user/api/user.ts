import { api } from '@cpd/shared';
import { IUser } from '../types';

export const fetchUser = async () => {
  const { data } = await api.get<IUser>('/user');
  return data;
};
