import { Button, List, Symbol } from '@cpd/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef } from 'react';
import { IMenuItem } from '../types/Menu.interface';

interface MenuItemProps extends ComponentPropsWithoutRef<'button'> {
  data: IMenuItem;
}

export default function MenuItem({ data, children }: MenuItemProps) {
  const pathname = usePathname();

  return (
    <Button
      as={Link}
      href={data.url}
      block
      lineHeight={'md'}
      text
      bold={pathname === data.url}
      icon={data.icon?.name}
    >
      {data.name}
      {children}
    </Button>
  );
}
