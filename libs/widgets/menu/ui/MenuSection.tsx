'use client';

import { Box, Button, Symbol, Text } from '@cpd/ui';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, useState } from 'react';
import { IMenuSection } from '../types/Menu.interface';
import MenuGroup from './MenuGroup';

interface MenuSectionProps extends ComponentPropsWithoutRef<'div'> {
  data: IMenuSection;
}

export default function MenuSection({ data, ...rest }: MenuSectionProps) {
  const [display, setDisplay] = useState(true);
  const innerClassName = clsx({ none: !display });

  return (
    <Box
      className={'menu-section'}
      marginTop={1}
      marginBottom={1}
      marginLeft={1}
      marginRight={1}
      {...rest}
    >
      {data.name && (
        <Box
          align={'center'}
          flex
          justify={'space-between'}
          gap={1}
        >
          <Button
            className={'flex flex-justify-space-between gap-1 w-full text-left'}
            color={'transparent'}
            onClick={() => setDisplay(!display)}
          >
            <span className={'text-neutral-600 text-400 text-uppercase'}>
              {data.name}
            </span>
            {display ? (
              <Symbol name={'arrow-up'} />
            ) : (
              <Symbol name={'arrow-down'} />
            )}
          </Button>
        </Box>
      )}
      <Box className={innerClassName}>
        {data.items.map((x, index) => (
          <MenuGroup
            key={index}
            data={x}
          />
        ))}
      </Box>
    </Box>
  );
}
