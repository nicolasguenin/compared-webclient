export interface IUser {
  createdAt: string;
  firstName: string | null;
  lastName: string | null;
  status: 'active' | 'inactive' | 'new' | 'deleted' | 'readonly';
  username: string;
}
