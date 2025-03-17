import { Box, Button } from '@cpd/ui';
import Link from 'next/link';

export default function ProfileMenu() {
  return (
    <Box>
      <Button
        as={Link}
        icon={'account-circle'}
        color={'transparent'}
        href={'/settings/profile'}
        bold={false}
      >
        Profile
      </Button>
    </Box>
  );
}
