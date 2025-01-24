import { IUser } from '../../user';

export interface ICurrentUser extends IUser {
  email: string;
  lastLoginAt: string;
  statusUpdatedAt: string | null;
  updatedAt: string | null;
}
