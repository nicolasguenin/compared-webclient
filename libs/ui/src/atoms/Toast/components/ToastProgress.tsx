import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from '../styles/Toast.module.scss';
import type { IToastState } from '../interfaces/Toast.interface';

const ToastProgress = forwardRef<HTMLDivElement, { type: IToastState }>(
  ({ type }, ref) => {
    const rootClassName = clsx('absolute', `bg-${type}`, styles.toastProgress);
    return (
      <div
        ref={ref}
        className={rootClassName}
      ></div>
    );
  }
);

export default ToastProgress;
