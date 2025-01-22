'use client';

import { Button, Input, Symbol, Text } from '@cpd/ui';
import { Box } from '@cpd/ui';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, useActionState } from 'react';
import { signIn } from '../api/signIn';
import { useAuth } from '../contexts/AuthProvider';
import type { SignInError } from '../types/SignIn.interface';

const SignInFormInner = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const onSubmit = async (previousState: unknown, formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    const violations: SignInError = {};

    if (!email) {
      violations.email = 'Your email is required';
    }
    if (!password) {
      violations.password = 'Your password is required';
    }
    if (!email || !password) {
      return {
        error: {
          violations,
          message: 'Some data are missing',
        },
        payload: {
          email: email as string,
          password: password as string,
        },
      };
    }

    return signIn({ email: email, password: password as string })
      .then(({ data }) => {
        setIsLoggedIn(true);
        return data;
      })
      .catch((err) => {
        return err;
      });
  };
  const [data, action] = useActionState(onSubmit, undefined);
  const errorEmailMsg = data?.error?.violations?.email || '';
  const errorPasswordMsg = data?.error?.violations?.password || '';

  const defaultEmailValue = data?.payload?.email as string;
  const defaultPasswordValue = data?.payload?.password as string;

  if (!data?.succeeded && isLoggedIn) {
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

  if (data?.succeeded) {
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

  return (
    <>
      <form
        action={action}
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
            defaultValue={defaultEmailValue}
            type='email'
            name='email'
            errorMessage={errorEmailMsg}
          >
            Email
          </Input>
          <Input
            defaultValue={defaultPasswordValue}
            type='password'
            name='password'
            errorMessage={errorPasswordMsg}
          >
            Password
          </Input>
        </div>
        <Button block>Sign in</Button>
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
