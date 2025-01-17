import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type ComponentProps = {};

type PolymorphicProps<
  Element extends React.ElementType,
  ComponentProps,
> = ComponentProps &
  Omit<React.ComponentProps<Element>, 'as'> & {
    as?: Element;
    errorMessage?: string;
    inputClassName?: string;
    type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'search';
    value: string;
  };

const defaultElement = 'input';

const Input = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicProps<Element, ComponentProps>
) => {
  const {
    as: Component = defaultElement,
    children,
    className,
    errorMessage,
    inputClassName,
    type = 'text',
    value,
    ...rest
  } = props;

  const rootClassName = clsx('field', className);

  const rootInputClassName = clsx(
    'input',
    { textarea: Component === 'textarea' },
    inputClassName
  );

  const [dirty, setDirty] = useState(false);
  const previousValue = useRef(value);

  useEffect(() => {
    if (previousValue.current !== value && !dirty) {
      setDirty(true);
    }

    previousValue.current = value;
  }, [value, dirty]);

  return (
    <label className={rootClassName}>
      <span className='label'>{children}</span>
      <Component
        type={Component !== 'textarea' ? type : undefined}
        className={rootInputClassName}
        {...rest}
      />
      {errorMessage && dirty && (
        <p className='mt-0-5 text-sm text-600 text-danger'>{errorMessage}</p>
      )}
    </label>
  );
};

export default Input;
