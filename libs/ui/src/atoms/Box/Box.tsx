import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IColor, SpaceValue } from '../../types';
import styles from './Box.module.scss';

type RoundedValue = boolean | 'full' | 0 | '0' | 'sm' | 'md' | 'lg';

interface BoxProps extends ComponentPropsWithoutRef<'div'> {
  borderColor?: IColor;
  bordered?: boolean;
  borderTop?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  highlighted?: boolean;
  margin?: SpaceValue;
  marginTop?: SpaceValue;
  marginLeft?: SpaceValue;
  marginRight?: SpaceValue;
  marginBottom?: SpaceValue;
  padding?: SpaceValue;
  paddingTop?: SpaceValue;
  paddingLeft?: SpaceValue;
  paddingRight?: SpaceValue;
  paddingBottom?: SpaceValue;
  rounded?: RoundedValue;
  size?: 300 | 450 | 750 | 1024 | 1200;
  textAlign?: 'left' | 'center' | 'right';
  wFull?: boolean;
  wrapper?: boolean;
}

const Box = ({
  bordered = false,
  borderTop,
  borderLeft,
  borderRight,
  borderBottom,
  className,
  borderColor,
  highlighted,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  rounded = false,
  textAlign,
  size,
  wFull = false,
  wrapper,
  ...rest
}: BoxProps) => {
  const getSpaceClasses = (
    prefix: 'm' | 'p',
    space: SpaceValue | undefined = undefined,
    spaceTop: SpaceValue | undefined = undefined,
    spaceLeft: SpaceValue | undefined = undefined,
    spaceRight: SpaceValue | undefined = undefined,
    spaceBottom: SpaceValue | undefined = undefined,
    canBeWrapped = false,
    wrapper = false
  ) => {
    const classes = [];

    if (wrapper && canBeWrapped) {
      classes.push(`${prefix}l-auto ${prefix}r-auto`);
    } else if (space !== undefined) {
      classes.push(
        spaceLeft !== undefined
          ? `${prefix}l-${spaceLeft}`
          : `${prefix}l-${space}`
      );
      classes.push(
        spaceRight !== undefined
          ? `${prefix}r-${spaceRight}`
          : `${prefix}r-${space}`
      );
    } else {
      if (spaceLeft !== undefined) {
        classes.push(`${prefix}l-${spaceLeft}`);
      }
      if (spaceRight !== undefined) {
        classes.push(`${prefix}r-${spaceRight}`);
      }
    }

    if (space !== undefined) {
      classes.push(
        spaceTop !== undefined
          ? `${prefix}t-${spaceTop}`
          : `${prefix}t-${space}`
      );
      classes.push(
        spaceBottom !== undefined
          ? `${prefix}b-${spaceBottom}`
          : `${prefix}b-${space}`
      );
    } else {
      if (spaceTop !== undefined) {
        classes.push(`${prefix}t-${spaceTop}`);
      }
      if (spaceBottom !== undefined) {
        classes.push(`${prefix}b-${spaceBottom}`);
      }
    }
    return classes;
  };

  const getRoundedClass = (rounded: RoundedValue) => {
    if (rounded === true) {
      return 'rounded-md';
    }
    if (rounded === 'full') {
      return 'rounded-full';
    }
    if (rounded === false) {
      return null;
    }
    return `rounded-${rounded}`;
  };

  const rootClassName = clsx(
    'box',
    borderColor && `border-${borderColor}`,
    bordered && 'bordered',
    borderTop && 'border-top',
    borderLeft && 'border-left',
    borderRight && 'border-right',
    borderBottom && 'border-bottom',
    highlighted && 'bg-white',
    size && `${styles[`boxSize-${size}`]}`,
    size && 'w-full',
    textAlign && `text-${textAlign}`,
    wFull && !size && 'w-full',
    getSpaceClasses(
      'm',
      margin,
      marginTop,
      marginLeft,
      marginRight,
      marginBottom,
      true,
      wrapper
    ),
    getSpaceClasses(
      'p',
      padding,
      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom
    ),
    getRoundedClass(rounded),
    className
  );

  return (
    <div
      className={rootClassName}
      {...rest}
    ></div>
  );
};

export default Box;
