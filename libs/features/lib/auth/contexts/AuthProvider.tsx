'use client';

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

type IAuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const useAuth = (): IAuthContext => useContext(AuthContext);

export const AuthProvider: FC<{
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
