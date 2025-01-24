import React from 'react';
import clsx from 'clsx';
import type { IIcon } from '../../types';

interface SymbolProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: IIcon;
  size?: 16 | 20 | 24 | 28 | 32 | 38 | 42 | 48;
}

const Symbol = ({ className, name, size = 16, ...rest }: SymbolProps) => {
  const href = `/images/symbol-defs.svg#${name}`;
  return (
    <svg
      viewBox='0 0 24 24'
      className={clsx('icon', `icon-${size}`, className)}
      {...rest}
    >
      <use href={href}></use>
    </svg>
  );
};

export default Symbol;
