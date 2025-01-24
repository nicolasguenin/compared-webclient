import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Hero.module.scss';

interface HeroProps extends ComponentPropsWithoutRef<'header'> {
  left: ReactNode;
  right?: ReactNode;
}

const Hero = ({ className, left, right, ...rest }: HeroProps) => {
  const rootClassName = clsx(
    'px-1 py-0-75 flex flex-justify-space-between flex-align-center shadow-sm bg-white hero',
    styles.hero,
    className
  );

  return (
    <header
      className={rootClassName}
      {...rest}
    >
      <div>{left}</div>
      {right && <div>{right}</div>}
    </header>
  );
};

export default Hero;
