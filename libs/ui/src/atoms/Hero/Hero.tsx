import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

interface HeroProps extends ComponentPropsWithoutRef<'header'> {
  left: ReactNode;
  right?: ReactNode;
}

const Hero = ({ className, left, right, ...rest }: HeroProps) => {
  const rootClassName = clsx(
    'px-1 flex flex-justify-space-between flex-align-center hero',
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
