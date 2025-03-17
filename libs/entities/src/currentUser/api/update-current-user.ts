import { api } from '@cpd/shared';
import { getCookie } from 'cookies-next';
import { ICurrentUser } from '../types';

type IPayload = {
  email: string | FormDataEntryValue;
  username: string | FormDataEntryValue;
};

export default async function updateCurrentUser(payload: IPayload) {
  const userId = await getCookie('user');
  const { data } = await api.patch<ICurrentUser>(`/users/${userId}`, payload);
  return data;
}
