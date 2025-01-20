import React from 'react';
import clsx from 'clsx';
import { Loader } from '../Loader';
import { Symbol } from '../Symbol';
import styles from './Button.module.scss';
import type { IColorElement, IIcon } from '../../types';

type ComponentProps = {
  block?: boolean;
  color?: IColorElement | 'transparent';
  disabled?: boolean;
  icon?: IIcon;
  loading?: boolean;
  lowercase?: boolean;
  minWidth?: boolean;
  outline?: boolean;
  rounded?: boolean;
  roundedFull?: boolean;
  text?: boolean;
};

type PolymorphicProps<
  Element extends React.ElementType,
  ComponentProps,
> = ComponentProps &
  Omit<React.ComponentProps<Element>, 'as'> & {
    as?: Element;
  };

const defaultElement = 'button';

const Button = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicProps<Element, ComponentProps>
) => {
  const {
    as: Component = defaultElement,
    block = false,
    children,
    className,
    color = 'neutral',
    disabled,
    icon = '',
    loading = false,
    lowercase = false,
    minWidth = false,
    outline = false,
    rounded = true,
    roundedFull = false,
    text = false,
    ...rest
  } = props;

  const getColor = (color: IColorElement | 'transparent', outline: boolean) => {
    return `${outline || color === 'transparent' ? color : 'white'}`;
  };

  const getBackgroundColor = (
    color: IColorElement | 'transparent',
    outline: boolean,
    text: boolean
  ) => {
    if (outline) {
      return 'bg-white';
    }

    if (color === 'transparent' || text) {
      return 'bg-transparent';
    }

    return `bg-${color}`;
  };

  const rootClassName = clsx([
    block ? 'block' : 'inline-block',
    { 'w-full': block },
    { 'rounded-md': rounded },
    { [styles.buttonRounded]: roundedFull },
    getBackgroundColor(color, outline, text),
    `text-${getColor(color, outline)}`,
    'relative inline-block py-0-75 px-1 text-sm text-600 lh-default bordered',
    { 'text-uppercase': !lowercase },
    outline ? `border-${color} ${styles.outline}` : 'border-transparent',
    `text-decoration-${text ? 'underline' : 'none'}`,
    styles.button,
    styles[`button-${color}`],
    { [styles.buttonLoading]: loading },
    { [styles.buttonMinWidth]: minWidth },
    className,
  ]);

  return (
    <Component
      className={rootClassName}
      disabled={disabled || loading}
      {...rest}
    >
      {!!icon && (
        <Symbol
          name={icon}
          className={clsx({ 'mr-0-75': children })}
        />
      )}
      {children}
      {loading && (
        <Loader
          className={
            block
              ? `${styles.buttonBlockLoader} inline-block ml-0-75`
              : styles.buttonLoader
          }
        />
      )}
    </Component>
  );
};

export default Button;
