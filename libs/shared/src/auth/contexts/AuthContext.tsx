'use client';

import { createContext } from 'react';
import { IAuthContext } from '../types';

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});
