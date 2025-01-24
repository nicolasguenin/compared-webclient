import { Box, Button } from '@cpd/ui';
import List from '@cpd/ui/lib/atoms/List';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import styles from './ProfileMenu.module.scss';

function ProfileMenuInner() {
  const rootClasses = clsx('absolute', 'bg-white', styles.profileMenuInner);

  return (
    <Box className={rootClasses}>
      <List.Root>
        <List.Item>
          <Button
            as={Link}
            block
            href={'/profile'}
            outline
            border={false}
            rounded={false}
          >
            Profile
          </Button>
        </List.Item>
      </List.Root>
    </Box>
  );
}

export default function ProfileMenu() {
  const [displayProfileMenu, setDisplayProfileMenu] = useState(false);

  return (
    <Box>
      <Button
        icon={'account-circle'}
        color={'transparent'}
        size={'lg'}
        onClick={() => setDisplayProfileMenu(!displayProfileMenu)}
      />

      {displayProfileMenu && <ProfileMenuInner />}
    </Box>
  );
}
