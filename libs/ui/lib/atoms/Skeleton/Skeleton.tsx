import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import styles from './Skeleton.module.scss';

type SkeletonProps = ComponentPropsWithoutRef<'div'> & {
    rounded?: 'none' | 'default' | 'full';
    height: string;
    width: string;
};

const Skeleton = ({
  children,
  className,
  height,
  rounded = 'default',
  width,
}: SkeletonProps) => {
    const rootClassName = clsx(
        className,
        {
            'rounded-md': rounded === 'default',
            'rounded-full': rounded === 'full',
        },
        styles.skeleton
    );

    return (
        <div style={{ height, width }} className={rootClassName}>
            {children}
        </div>
    );
};

export default Skeleton;
