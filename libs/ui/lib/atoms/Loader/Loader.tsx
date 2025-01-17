import clsx from 'clsx';
import { type ComponentPropsWithoutRef } from 'react';
import styles from './Loader.module.scss';
import {Symbol} from '../Symbol';

const Loader = ({ className }: ComponentPropsWithoutRef<'svg'>) => {
  const loaderClassName = clsx(
    'block mx-auto my-0 fill-none stroke-neutral-400 stroke-1',
    styles.loader
  );

  return (
    <div className={className}>
      <Symbol className={loaderClassName} name='spinner' />
    </div>
  );
};

export default Loader;
