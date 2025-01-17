import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from '../styles/Toast.module.scss';
import {Symbol} from '../../Symbol';
import type { IIcon } from '../../../types';
import type {
  IToast,
  IToastState,
} from '../interfaces/Toast.interface';
import { useToast } from '../context/ToastProvider';
import ToastProgress from './ToastProgress';

const icons: Record<IToastState, IIcon> = {
  danger: 'close-circle',
  info: 'information',
  success: 'check-circle',
  warning: 'alert-circle',
};

const Toast = ({ id, message, type }: IToast) => {
  const rootClassName = clsx(
    'relative rounded-lg overflow-hidden text-600 py-0-75 px-0-75 text-sm w-full',
    `bg-${type}-100 text-${type}`,
    styles.toast
  );

  const progressRef = useRef<HTMLDivElement>(null);

  const { remove } = useToast();
  const handleRemove = () => remove(id);

  const timer = useRef<null | ReturnType<typeof setTimeout>>(null);

  const handleHover = () => {
    if (timer.current && progressRef.current) {
      clearTimeout(timer.current);
      progressRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleBlur = () => {
    if (!progressRef.current) {
      return;
    }
    const remainingTime =
      (progressRef.current.offsetWidth /
        (progressRef.current.parentElement?.offsetWidth || 1)) *
      4000;

    progressRef.current.style.animationPlayState = 'running';

    timer.current = setTimeout(() => {
      handleRemove();
    }, remainingTime);
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      handleRemove();
    }, 4000);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <div
      className={rootClassName}
      onMouseEnter={handleHover}
      onMouseLeave={handleBlur}
    >
      <div className='flex flex-align-center gap-0-5'>
        <Symbol name={icons[type]} size={32} />
        <p className='my-0'>{message}</p>
      </div>
      <ToastProgress ref={progressRef} type={type} />
    </div>
  );
};

export default Toast;
