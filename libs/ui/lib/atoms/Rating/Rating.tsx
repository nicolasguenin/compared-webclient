import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { Symbol } from '../Symbol';
import { IColorElement } from '../../types';

type IRatingProps = ComponentPropsWithoutRef<'div'> & {
  color?: IColorElement;
  value: number;
};

const Rating = ({
                  className,
                  color = 'neutral',
                  value,
                  ...rest
                }: IRatingProps) => {
  const rootClassName = clsx('flex', `text-${color}`, className);

  let hasDecimal = value % 1 !== 0;

  const plainStars = !hasDecimal ? value : Math.floor(value);
  const emptyStars = 5 - +value.toFixed();

  const getPlainStars = () => {
    const res = [];
    for (let i = 0; i < plainStars; i++) {
      res.push(<Symbol key={`plain-${i}`} name='star' />);
    }
    return res;
  };

  const getEmptyStars = () => {
    const res = [];
    for (let i = 0; i < emptyStars; i++) {
      res.push(<Symbol key={`empty-${i}`} name='star-outline' />);
    }
    return res;
  };
  return (
    <div className={rootClassName} {...rest}>
      {getPlainStars()}

      {hasDecimal && <Symbol name='star-half-full' />}

      {getEmptyStars()}
    </div>
  );
};

export default Rating;
