import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IColor, SpaceValue } from '../../types';

type ComponentProps = {
  bold?: boolean;
  color?: IColor | 'white';
  light?: boolean;
  lineHeight?: 'xs' | 'sm' | 'default' | 'md' | 'lg';
  margin?: SpaceValue;
  marginTop?: SpaceValue;
  marginLeft?: SpaceValue;
  marginRight?: SpaceValue;
  marginBottom?: SpaceValue;
  nowrap?: boolean;
  padding?: SpaceValue;
  paddingTop?: SpaceValue;
  paddingLeft?: SpaceValue;
  paddingRight?: SpaceValue;
  paddingBottom?: SpaceValue;
  size?: 'tn' | 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  textAlign?: 'left' | 'center' | 'right';
  underline?: boolean;
  weight?: 300 | 400 | 600 | 700;
};

type TextProps = ComponentProps &
  (
    | (ComponentPropsWithoutRef<'p'> & {
        as?: 'p';
      })
    | (ComponentPropsWithoutRef<'h1'> & {
        as?: 'h1';
      })
    | (ComponentPropsWithoutRef<'h2'> & {
        as?: 'h2';
      })
    | (ComponentPropsWithoutRef<'h3'> & {
        as?: 'h3';
      })
    | (ComponentPropsWithoutRef<'h4'> & {
        as?: 'h4';
      })
    | (ComponentPropsWithoutRef<'h5'> & {
        as?: 'h5';
      })
    | (ComponentPropsWithoutRef<'h6'> & {
        as?: 'h6';
      })
  );

const defaultElement = 'p';

export default function Text({
  as: Component = defaultElement,
  bold,
  className,
  color,
  light = false,
  lineHeight,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  nowrap,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  textAlign,
  size,
  underline,
  weight,
  ...rest
}: TextProps) {
  const getSpaceClasses = (
    prefix: 'm' | 'p',
    space: SpaceValue | undefined = undefined,
    spaceTop: SpaceValue | undefined = undefined,
    spaceLeft: SpaceValue | undefined = undefined,
    spaceRight: SpaceValue | undefined = undefined,
    spaceBottom: SpaceValue | undefined = undefined
  ) => {
    const classes = [];

    if (space !== undefined) {
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
      if (spaceLeft !== undefined) {
        classes.push(`${prefix}l-${spaceLeft}`);
      }
      if (spaceRight !== undefined) {
        classes.push(`${prefix}r-${spaceRight}`);
      }

      if (spaceTop !== undefined) {
        classes.push(`${prefix}t-${spaceTop}`);
      }
      if (spaceBottom !== undefined) {
        classes.push(`${prefix}b-${spaceBottom}`);
      }
    }
    return classes;
  };

  const getColor = (color: IColor | 'white' | undefined, light: boolean) => {
    if (!color && !light) {
      return null;
    }
    if (!color && light) {
      return 'text-neutral-400';
    }
    return light ? `text-${color}-400` : `text-${color}`;
  };

  const rootClassName = clsx(
    'text',
    bold && !weight && 'text-600',
    getColor(color, light),
    lineHeight && `lh-${lineHeight}`,
    nowrap && 'text-nowrap',
    size && `text-${size}`,
    textAlign && `text-${textAlign}`,
    underline && 'text-underline',
    weight && `text-${weight}`,
    getSpaceClasses(
      'm',
      margin,
      marginTop,
      marginLeft,
      marginRight,
      marginBottom
    ),
    getSpaceClasses(
      'p',
      padding,
      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom
    ),
    className
  );

  return (
    <Component
      className={rootClassName}
      {...rest}
    ></Component>
  );
}
