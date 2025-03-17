'use client';

import { Box, Button, Input, Text } from '@cpd/ui';
import { ComponentPropsWithoutRef, FormEvent, useState } from 'react';
import { d } from '@cpd/helpers';
import { useCurrentUser, useUpdateCurrentUser } from '../hooks';

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
  } = useUpdateCurrentUser();

  const [dirty, setDirty] = useState(false);
  const changeDirty = () => {
    if (!dirty) {
      setDirty(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const { username, email } = Object.fromEntries(formData);

    return mutateUser({ username, email })
      .then(() => {
        success();
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  return (
    currentUser && (
      <form onSubmit={handleSubmit}>
        <Box
          columns={2}
          gap={2}
          wrap
        >
          <Box row>
            <Text light>Username</Text>
            <Input
              defaultValue={currentUser.username}
              name={'username'}
              onChange={() => changeDirty()}
            />
          </Box>
          <Box>
            <Text light>Email</Text>
            <Input
              defaultValue={currentUser.email}
              name={'email'}
              type={'email'}
              required
              onChange={() => changeDirty()}
            />
          </Box>
          <Box>
            <Text light>Registration date</Text>
            <Text bold>{d(currentUser.created_at).format('LLL')}</Text>
          </Box>
        </Box>
        <Box
          borderTop
          borderColor={'neutral-300'}
          flex
          gap={2}
          marginTop={1}
          paddingTop={1}
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
          ></Text>
        )}
      </form>
    )
  );
};

export default CurrentUserBoard;
