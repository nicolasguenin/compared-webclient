'use client';

import { FC, ReactNode, useCallback, useState } from 'react';
import { AuthContext } from '../contexts';

const AuthProvider: FC<{
  children: ReactNode;
  loggedInValue: boolean;
}> = ({ children, loggedInValue }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(loggedInValue);

  const setIsLoggedInState = useCallback(
    (value: boolean) => setIsLoggedIn(value),
    []
  );

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn: setIsLoggedInState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
