'use client';

import { Box, Symbol, Button, FormTextError, Input, Text } from '@cpd/ui';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, FormEvent, useState } from 'react';
import { signIn, useAuth } from '@cpd/shared';

const SignInFormInner = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [error, setError] = useState<null | string>(null);
  const [succeeded, setSucceeded] = useState(false);

  if (!succeeded && isLoggedIn) {
    return (
      <div className='text-center text-danger text-md'>
        <Symbol
          name={'alert'}
          size={24}
        />
        <Text
          marginBottom={0}
          marginTop={'0-75'}
        >
          You are already logged in
        </Text>
      </div>
    );
  }

  if (succeeded) {
    return (
      <div className='text-center text-success text-md'>
        <Symbol
          name='check-circle-outline'
          size={24}
        />
        <Text
          marginBottom={0}
          marginTop={'0-75'}
        >
          Successful login
        </Text>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error) {
      setError(null);
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const { username, password } = Object.fromEntries(formData);
    return signIn({ username, password })
      .then(() => {
        setIsLoggedIn(true);
        setSucceeded(true);
      })
      .catch((err) => {
        setError(err.response?.data?.message || err.message);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={'w-full'}
      >
        <Text
          as={'h3'}
          marginTop={0}
          marginBottom={'0-25'}
        >
          Sign in
        </Text>
        <Text>
          <small>Complete the fields below to continue.</small>
        </Text>
        <div className={'mt-2'}>
          <Input
            name='username'
            required
          >
            Username
          </Input>
          <Input
            type='password'
            name='password'
            required
          >
            Password
          </Input>
        </div>
        <Button block>Sign in</Button>
        {error && <FormTextError error={error} />}
      </form>
    </>
  );
};

const SignInForm = ({
  className,
  children,
}: ComponentPropsWithoutRef<'div'>) => {
  const rootClasses = clsx(
    'flex',
    'flex-dir-column',
    'flex-align-center',
    'flex-justify-center',
    className
  );

  return (
    <Box
      borderColor={'primary'}
      className={rootClasses}
      highlighted
      padding={2}
      rounded
      size={450}
      wrapper
    >
      <SignInFormInner />

      {children && (
        <Box
          borderTop
          borderColor={'neutral-300'}
          marginTop={1}
          paddingTop={1}
          textAlign={'left'}
          wFull
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default SignInForm;
