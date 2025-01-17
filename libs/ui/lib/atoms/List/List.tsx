import { type ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import styles from './List.module.scss';

const List = ({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<'ul'>) => {
  return (
    <ul
      className={clsx('my-0 mx-0 py-0 px-0', styles.list, className)}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default List;
