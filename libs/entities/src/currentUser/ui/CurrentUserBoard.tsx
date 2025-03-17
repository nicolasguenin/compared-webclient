'use client';

import { d } from '@cpd/helpers';
import { Box, Text } from '@cpd/ui';
import { useCurrentUser } from '../hooks';

const CurrentUserBoard = () => {
  const { data: currentUser } = useCurrentUser();

  return (
    currentUser && (
      <Box
        columns={2}
        gap={2}
        wrap
      >
        <Box row>
          <Text light>Username</Text>
          <Text bold>{currentUser.username}</Text>
        </Box>
        <Box>
          <Text light>Email</Text>
          <Text bold>{currentUser.email}</Text>
        </Box>
        <Box>
          <Text light>Registration date</Text>
          <Text bold>{d(currentUser.created_at).format('LL [at] LT')}</Text>
        </Box>
      </Box>
    )
  );
};

export default CurrentUserBoard;
