import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';

const ModalInner = ({ children }: { children: ReactNode }) => {
  const innerClassName = clsx(
    styles.modalInner,
    'mx-2 overflow-y-auto overflow-x-hidden h-full'
  );

  return <div className={innerClassName}>{children}</div>;
};

export default ModalInner;
