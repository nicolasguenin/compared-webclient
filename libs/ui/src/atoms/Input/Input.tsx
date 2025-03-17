import React, { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import FormTextError from '../Form/FormTextError';
import { Symbol } from '../Symbol';
import { Text } from '../Text';

type ComponentProps = {};

type PolymorphicProps<
  Element extends React.ElementType,
  ComponentProps,
> = ComponentProps &
  Omit<React.ComponentProps<Element>, 'as'> & {
    as?: Element;
    errorMessage?: string;
    inputClassName?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
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
    onChange = () => {},
    type = 'text',
    required = false,
    ...rest
  } = props;

  const [dirty, setDirty] = useState(false);
  const [showMissing, setShowMissing] = useState(false);

  const rootClassName = clsx('field', className);

  const rootInputClassName = clsx(
    'input',
    { textarea: Component === 'textarea' },
    inputClassName
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!dirty) {
      setDirty(true);
    }
    if (dirty && required) {
      const { value } = event.target;
      if (!value && !showMissing) {
        setShowMissing(true);
      } else if (value && showMissing) {
        setShowMissing(false);
      }
    }
    onChange(event);
  };

  return (
    <label className={rootClassName}>
      <span className='label'>{children}</span>
      <Component
        type={Component !== 'textarea' ? type : undefined}
        className={rootInputClassName}
        {...rest}
        onChange={handleChange}
      />
      {errorMessage && (
        <Text
          marginTop={'0-5'}
          weight={600}
          color={'danger'}
          size={'tn'}
        >
          <Symbol
            name={'alert-circle'}
            size={20}
            className={'mr-0-25'}
          />
          {errorMessage}
        </Text>
      )}
      {!errorMessage && showMissing && (
        <FormTextError error={'This field is required'} />
      )}
    </label>
  );
};

export default Input;
