'use client';

import { useAuth } from '@cpd/shared';
import { Box, Button } from '@cpd/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileMenu from './ProfileMenu';

export default function AuthMenu() {
  const { isLoggedIn } = useAuth();
  const pathname = usePathname();
  const isSignInRoute = pathname === '/signin';

  if (isLoggedIn) {
    return (
      <Box>
        <ProfileMenu />
      </Box>
    );
  }
  return (
    !isSignInRoute && (
      <Box>
        <Button
          as={Link}
          href={'/signin'}
          text
          color={'neutral'}
        >
          Sign in
        </Button>
      </Box>
    )
  );
}
