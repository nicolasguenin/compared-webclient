import React from 'react';
import clsx from 'clsx';
import { Symbol } from '../Symbol';

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
    ...rest
  } = props;

  const rootClassName = clsx('field', className);

  const rootInputClassName = clsx(
    'input',
    { textarea: Component === 'textarea' },
    inputClassName
  );

  return (
    <label className={rootClassName}>
      <span className='label'>{children}</span>
      <Component
        type={Component !== 'textarea' ? type : undefined}
        className={rootInputClassName}
        {...rest}
      />
      {errorMessage && (
        <p className='mt-0-5 text-tn text-600 text-danger'>
          <Symbol
            name={'alert-circle'}
            size={20}
            className={'mr-0-25'}
          />
          {errorMessage}
        </p>
      )}
    </label>
  );
};

export default Input;
