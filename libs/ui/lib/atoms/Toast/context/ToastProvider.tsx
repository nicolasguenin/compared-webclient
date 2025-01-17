'use client';

import {
  createContext,
  FC,
  ReactNode,
  Reducer,
  useContext,
  useReducer,
} from 'react';
import type { IToast, IToastState } from '../interfaces/Toast.interface';
import ToastList from '../containers/ToastList';

type State = {
  toasts: IToast[];
};

type Action =
  | { type: 'add_toast'; payload: IToast }
  | { type: 'remove_toast'; payload: IToast['id'] };

const initialState: State = {
  toasts: [],
};

const toastsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add_toast':
      return { ...state, toasts: [...state.toasts, action.payload] };
    case 'remove_toast':
      const filtered = state.toasts.filter((x) => x.id !== action.payload);
      return { ...state, toasts: filtered };
    default:
      throw new Error(`Unhandled action type`);
  }
};

const useToastElements = () => {
  const [{ toasts }, dispatch] = useReducer<Reducer<State, Action>>(
    toastsReducer,
    initialState
  );

  const addToast = (type: IToastState, message: string) => {
    const id = Math.floor(Math.random() * 100).toString();
    dispatch({ type: 'add_toast', payload: { id, type, message } });
  };

  const danger = (message: string) => addToast('danger', message);
  const info = (message: string) => addToast('info', message);
  const success = (message: string) => addToast('success', message);
  const warning = (message: string) => addToast('warning', message);

  const remove = (payload: string) => {
    dispatch({ type: 'remove_toast', payload });
  };

  return {
    toasts,
    danger,
    info,
    success,
    warning,
    remove,
  };
};

export const ToastContext = createContext(
  {} as ReturnType<typeof useToastElements>
);

export const useToast = () => useContext(ToastContext);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const elements = useToastElements();

  return (
    <ToastContext.Provider value={elements}>
      <ToastList toasts={elements.toasts} />
      {children}
    </ToastContext.Provider>
  );
};
