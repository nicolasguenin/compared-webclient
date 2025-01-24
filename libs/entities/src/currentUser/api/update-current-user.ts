import { api } from '@cpd/shared';
import { ICurrentUser } from '../types';

type IPayload = {
  email: string;
  firstName: string | null;
  lastName: string | null;
  username: string;
};

export default async function updateCurrentUser(payload: IPayload) {
  const { data } = await api.put<ICurrentUser>('/user', payload);
  return data;
}
