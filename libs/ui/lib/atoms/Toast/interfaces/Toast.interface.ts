export type IToastState = 'danger' | 'info' | 'success' | 'warning';

export type IToast = {
  id: string;
  message: string;
  type: IToastState;
};
