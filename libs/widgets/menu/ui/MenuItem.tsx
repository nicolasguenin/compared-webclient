import { Button, List, Symbol } from '@cpd/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef } from 'react';
import { IMenuItem } from '../types/Menu.interface';

interface MenuItemProps extends ComponentPropsWithoutRef<'li'> {
  data: IMenuItem;
}

export default function MenuItem({ data, ...rest }: MenuItemProps) {
  const pathname = usePathname();

  return (
    <List.Item {...rest}>
      <Button
        as={Link}
        href={data.url}
        block
        lineHeight={'md'}
        text
        bold={pathname === data.url}
      >
        {data.icon?.name && <Symbol name={data.icon.name} />}
        {data.name}
      </Button>
    </List.Item>
  );
}
