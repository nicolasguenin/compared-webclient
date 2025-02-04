import { Box, Skeleton, Text } from '@cpd/ui';

const CurrentUserBoardSkeleton = () => {
  return (
    <Box
      columns={2}
      gap={2}
      wrap
    >
      <Box row>
        <Text light>Username</Text>
        <Skeleton
          height={'1.8rem'}
          width={'30rem'}
        />
      </Box>

      <Box>
        <Text light>Email</Text>
        <Skeleton
          height={'1.8rem'}
          width={'100%'}
        />
      </Box>
      <Box>
        <Text light>Registration date</Text>
        <Skeleton
          height={'1.8rem'}
          width={'100%'}
        />
      </Box>
      <Box>
        <Text light>First name</Text>
        <Skeleton
          height={'1.8rem'}
          width={'100%'}
        />
      </Box>
      <Box>
        <Text light>Last name</Text>
        <Skeleton
          height={'1.8rem'}
          width={'100%'}
        />
      </Box>
    </Box>
  );
};

export default CurrentUserBoardSkeleton;
