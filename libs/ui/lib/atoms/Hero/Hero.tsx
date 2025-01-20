import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

interface HeroProps extends ComponentPropsWithoutRef<'div'> {
  left: ReactNode;
  right?: ReactNode;
}

const Hero = ({ className, left, right, ...rest }: HeroProps) => {
  const rootClassName = clsx(
    'px-1 py-0-75 flex flex-justify-space-between flex-align-items-center hero',
    className
  );

  return (
    <div
      className={rootClassName}
      {...rest}
    >
      <div>{left}</div>
      {right && <div>{right}</div>}
    </div>
  );
};

export default Hero;
