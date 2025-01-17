import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import Button from '../Button/Button';

type ModalProps = ComponentPropsWithoutRef<'dialog'> & {
  close: () => void;
  title?: string;
};

const Modal = ({ children, className, close, title }: ModalProps) => {
  const rootClassName = clsx(
    'relative rounded-md border-none mx-auto px-0 flex flex-dir-column',
    styles.modal,
    className
  );

  return (
    <div
      className={clsx(
        'fixed flex flex-align-center flex-justify-center',
        styles.modalContainer
      )}
    >
      <dialog open className={rootClassName}>
        <Button
          icon='close'
          color='transparent'
          title='Close modal window'
          className={clsx(styles.modalClose, 'absolute')}
          onClick={close}
        />

        {title && (
          <div className='border-bottom border-neutral-300 pr-3'>
            <p className='mb-1 mt-0 ml-2 text-600 text-md'>{title}</p>
          </div>
        )}

        {children}
      </dialog>
    </div>
  );
};

export default Modal;
