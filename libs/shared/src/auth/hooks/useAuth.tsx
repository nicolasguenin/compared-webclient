import { useContext } from 'react';
import { AuthContext } from '../contexts';
import { IAuthContext } from '../types';

export default function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
