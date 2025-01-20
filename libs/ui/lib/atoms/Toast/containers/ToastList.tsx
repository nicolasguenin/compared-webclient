import clsx from 'clsx';
import styles from '../styles/Toast.module.scss';
import Toast from '../components/Toast';
import { IToast } from '../interfaces/Toast.interface';

type IToastListProps = {
  toasts: IToast[];
};

const ToastList = ({ toasts }: IToastListProps) => {
  const rootClassName = clsx(
    'fixed flex flex-dir-column-reverse gap-0-75',
    styles.toastList
  );

  return (
    <div className={rootClassName}>
      {toasts.map((toast) => {
        return (
          <Toast
            key={toast.id}
            {...toast}
          />
        );
      })}
    </div>
  );
};

export default ToastList;
