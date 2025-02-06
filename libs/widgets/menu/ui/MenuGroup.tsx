'use client';

import { Box, Button, List, Symbol } from '@cpd/ui';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { IMenuGroup } from '../types/Menu.interface';
import MenuItem from './MenuItem';

interface MenuGroupProps extends ComponentPropsWithoutRef<'div'> {
  data: IMenuGroup;
}

export default function MenuGroup({ data, ...rest }: MenuGroupProps) {
  const pathname = usePathname();
  const found = data.items.find((x) => x.url === pathname);

  const [display, setDisplay] = useState(!!found);
  const listClassName = clsx(
    { none: !display },
    'border-left border-neutral-300 ml-1-5'
  );

  useEffect(() => {
    const found = data.items.find((x) => x.url === pathname);

    if (!found) {
      setDisplay(false);
    }
  }, [data.items, pathname]);

  return (
    <Box {...rest}>
      <Button
        className={
          'flex flex-align-center flex-justify-center w-full text-left'
        }
        icon={data.icon?.name}
        color={'transparent'}
        onClick={() => setDisplay(!display)}
      >
        <span className={'mr-1'}>{data.name}</span>
        {display ? (
          <Symbol
            className={'ml-auto'}
            name={'arrow-up'}
          />
        ) : (
          <Symbol
            className={'ml-auto'}
            name={'arrow-down'}
          />
        )}
      </Button>
      <List.Root className={listClassName}>
        {data.items.map((x, index) => (
          <MenuItem
            data={x}
            key={index}
          />
        ))}
      </List.Root>
    </Box>
  );
}
