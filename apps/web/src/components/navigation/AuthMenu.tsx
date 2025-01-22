'use client';

import { useAuth } from '@cpd/features/lib/auth/contexts/AuthProvider';
import { Button } from '@cpd/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuthMenu() {
  const { isLoggedIn } = useAuth();
  const pathname = usePathname();
  const isSignInRoute = pathname === '/signin';

  if (isLoggedIn) {
    // Logout button
  }
  return (
    !isSignInRoute && (
      <div>
        <Button
          as={Link}
          href={'/signin'}
          text
          color={'neutral'}
        >
          Sign in
        </Button>
      </div>
    )
  );
}
