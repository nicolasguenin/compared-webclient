'use client';

import { buildViolations, d, getViolationMsg } from '@cpd/helpers';
import { Box, Button, Input, Text } from '@cpd/ui';
import { ComponentPropsWithoutRef, useActionState, useState } from 'react';
import { useCurrentUser, useUpdateCurrentUser } from '../hooks';
import { ICurrentUser } from '../types';

type IUpdateViolations = {
  email?: string;
  username?: string;
};

interface CurrentUserBoardProps extends ComponentPropsWithoutRef<'div'> {
  cancel: () => void;
  success: () => void;
}

const CurrentUserBoard = ({ cancel, success }: CurrentUserBoardProps) => {
  const { data: currentUser } = useCurrentUser();
  const {
    mutateAsync: mutateUser,
    isPending,
    isError,
    error,
  } = useUpdateCurrentUser();

  const [dirty, setDirty] = useState(false);
  const changeDirty = () => {
    if (!dirty) {
      setDirty(true);
    }
  };

  const onSubmit = (previousState: ICurrentUser, formData: FormData): any => {
    const email = formData.get('email') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const username = formData.get('username') as string;

    const violations: IUpdateViolations = {};
    if (!email) {
      violations.email = 'Your email is required';
    }
    if (!username) {
      violations.username = 'Your username is required';
    }

    const payload = { email, firstName, lastName, username };

    if (!email || !username) {
      return buildViolations(
        violations,
        'Some required data are missing',
        payload
      );
    }

    return mutateUser(payload)
      .then(() => {
        success();
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  const [data, action] = useActionState(onSubmit, currentUser);

  return (
    currentUser && (
      <form action={action}>
        <Box
          columns={2}
          gap={2}
          wrap
        >
          <Box row>
            <Text light>Username</Text>
            <Input
              defaultValue={data?.payload?.username ?? currentUser.username}
              name={'username'}
              errorMessage={getViolationMsg(data, 'username')}
              onChange={() => changeDirty()}
            />
          </Box>
          <Box>
            <Text light>Email</Text>
            <Input
              defaultValue={data?.payload?.email ?? currentUser.email}
              name={'email'}
              type={'email'}
              errorMessage={getViolationMsg(data, 'email')}
              onChange={() => changeDirty()}
            />
          </Box>
          <Box>
            <Text light>Registration date</Text>
            <Text bold>{d(currentUser.createdAt).format('LLL')}</Text>
          </Box>
          <Box>
            <Text light>First name</Text>
            <Input
              defaultValue={
                (data?.payload?.firstName ?? currentUser.firstName) || ''
              }
              name={'firstName'}
              onChange={() => changeDirty()}
            />
          </Box>
          <Box>
            <Text light>Last name</Text>
            <Input
              defaultValue={
                (data?.payload?.lastName ?? currentUser.lastName) || ''
              }
              name={'lastName'}
              onChange={() => changeDirty()}
            />
          </Box>
        </Box>
        <Box
          borderTop
          borderColor={'neutral-300'}
          flex
          gap={2}
          marginTop={2}
          paddingTop={2}
        >
          <Button
            className={'pl-0'}
            link
            disabled={isPending}
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button
            disabled={isPending || !dirty}
            loading={isPending}
          >
            Confirm
          </Button>
        </Box>
        {isError && (
          <Text
            bold
            marginTop={1}
            color={'danger'}
          >
            {data?.error?.message || error.message}
          </Text>
        )}
      </form>
    )
  );
};

export default CurrentUserBoard;
