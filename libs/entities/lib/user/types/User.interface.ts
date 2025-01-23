export interface IUser {
  createdAt: string;
  email: string;
  firstName: string | null;
  lastLoginAt: string;
  lastName: string | null;
  status: 'active' | 'inactive' | 'new' | 'deleted' | 'readonly';
  statusUpdatedAt: string | null;
  updatedAt: string | null;
  username: string;
}
