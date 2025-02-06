import clsx from 'clsx';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { IColor, SpaceValue } from '../../types';
import styles from './Box.module.scss';

type AlignValue = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type ColumnsValue = 1 | 2 | 3 | 4;
type DirectionValue = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyValue =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'left'
  | 'right';
type RoundedValue = boolean | 'full' | 0 | '0' | 'sm' | 'md' | 'lg';
type ShadowValue = boolean | 'tn' | 'md' | 'lg';

interface BoxProps extends ComponentPropsWithoutRef<'div'> {
  align?: AlignValue;
  borderColor?: IColor;
  bordered?: boolean;
  borderTop?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  columns?: ColumnsValue;
  direction?: DirectionValue;
  flex?: boolean;
  gap?: SpaceValue;
  grid?: boolean;
  grow?: boolean;
  highlighted?: boolean;
  justify?: JustifyValue;
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
  row?: boolean;
  shadow?: ShadowValue;
  shrink?: boolean;
  size?: 300 | 450 | 750 | 1024 | 1200;
  textAlign?: 'left' | 'center' | 'right';
  wFull?: boolean;
  wrap?: boolean;
  wrapper?: boolean;
}

const Box = ({
  align,
  bordered = false,
  borderTop,
  borderLeft,
  borderRight,
  borderBottom,
  className,
  borderColor,
  columns,
  direction,
  flex,
  gap,
  grid,
  grow,
  highlighted,
  justify,
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
  row,
  textAlign,
  shadow = false,
  shrink,
  size,
  wFull = false,
  wrap,
  wrapper,
  ...rest
}: BoxProps) => {
  const [rowClass, setRowClass] = useState('');
  const refElement = useRef<null | HTMLDivElement>(null);

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

  const getShadowClass = (shadow: ShadowValue) => {
    if (!shadow) {
      return;
    }
    if (shadow === true) {
      return 'shadow-tn';
    }
    return `shadow-${shadow}`;
  };

  const getAlignmentClassPrefix = (
    prop: 'justify' | 'align',
    cl: AlignValue | JustifyValue,
    flex: boolean
  ) => {
    if (flex) {
      return cl === 'start' || cl === 'end'
        ? `flex-${prop}-flex-${cl}`
        : `flex-${prop}-${cl}`;
    }
    return `grid-${prop}-${cl}`;
  };

  const rootClassName = clsx(
    'box',
    borderColor && `border-${borderColor}`,
    bordered && 'bordered',
    borderTop && 'border-top',
    borderLeft && 'border-left',
    borderRight && 'border-right',
    borderBottom && 'border-bottom',
    grid && !columns && 'grid',
    columns && `grid grid-col-${columns}`,
    direction && `flex-dir-${direction}`,
    flex && 'flex',
    gap !== undefined && `gap-${gap}`,
    grid && 'grid',
    grow && 'flex-grow',
    highlighted && 'bg-white',
    row && rowClass,
    shrink && 'flex-shrink',
    size && `${styles[`boxSize-${size}`]}`,
    size && 'w-full',
    textAlign && `text-${textAlign}`,
    wFull && !size && 'w-full',
    wrap && `flex-wrap-wrap`,
    !wrap && flex && `flex-wrap-nowrap`,
    align && flex && getAlignmentClassPrefix('align', align, flex),
    justify && flex && getAlignmentClassPrefix('justify', justify, flex),
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
    getShadowClass(shadow),
    className
  );

  useEffect(() => {
    const getRowClass = () => {
      if (!row || !refElement.current) {
        return;
      }
      const parent = refElement.current.parentElement;
      if (!parent) {
        return;
      }

      if (parent.classList.contains('flex')) {
        setRowClass('flex-basis-100');
      }

      if (parent.classList.contains('grid')) {
        // Loop on parent classList to find grid-col-* class
        // FindIndex is not used here to preserve DOMTokenList type
        parent.classList.forEach((x) => {
          const matched = x.match(/grid-col/i);
          if (matched?.input) {
            // Split to get the column value grid-col-<value>
            const res = matched.input.split('-');
            return setRowClass(`grid-row-${res[res.length - 1]}`);
          }
        });
        return `grid-row-${columns}`;
      }
    };
    getRowClass();
  }, []);

  return (
    <div
      ref={refElement}
      className={rootClassName}
      {...rest}
    ></div>
  );
};

export default Box;
