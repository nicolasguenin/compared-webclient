import React from 'react';
import clsx from 'clsx';
import { Loader } from '../Loader';
import { Symbol } from '../Symbol';
import styles from './Button.module.scss';
import type { IColorElement, IIcon } from '../../types';

type ComponentProps = {
  block?: boolean;
  border?: boolean;
  color?: IColorElement | 'transparent';
  disabled?: boolean;
  icon?: IIcon;
  link?: boolean;
  loading?: boolean;
  lowercase?: boolean;
  minWidth?: boolean;
  outline?: boolean;
  rounded?: boolean;
  roundedFull?: boolean;
  size?: 'tn' | 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
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
    border = true,
    children,
    className,
    color = 'neutral',
    disabled,
    icon = '',
    link = false,
    loading = false,
    lowercase = true,
    minWidth = false,
    outline = false,
    rounded = true,
    roundedFull = false,
    size,
    text = false,
    ...rest
  } = props;

  const getColor = (
    color: IColorElement | 'transparent',
    outline: boolean,
    text: boolean,
    link: boolean
  ) => {
    return `${outline || color === 'transparent' || text || link ? color : 'white'}`;
  };

  const getBackgroundColor = (
    color: IColorElement | 'transparent',
    outline: boolean,
    text: boolean,
    link: boolean
  ) => {
    if (outline) {
      return 'bg-white';
    }

    if (color === 'transparent' || text || link) {
      return 'bg-transparent';
    }

    return `bg-${color}`;
  };

  const rootClassName = clsx([
    block ? 'block' : 'inline-block',
    { 'w-full': block },
    { 'rounded-md': rounded },
    { [styles.buttonRounded]: roundedFull },
    getBackgroundColor(color, outline, text, link),
    `text-${getColor(color, outline, text, link)}`,
    'relative inline-block py-0-75 px-1 text-sm text-600 lh-default bordered',
    { [styles.outline]: outline },
    outline && border ? `border-${color}` : 'border-transparent',
    `text-decoration-${link ? 'underline' : 'none'}`,
    { 'text-uppercase': !lowercase },
    size && `text-${size}`,
    { [styles.buttonText]: text },
    { [styles.buttonLink]: link },
    'btn',
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
