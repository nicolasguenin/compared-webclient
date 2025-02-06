'use client';

import { useCategories } from '@cpd/entities/src/category';
import { createMenuSection } from '@cpd/widgets/menu/helpers';
import { MenuRoot } from '@cpd/widgets/menu/ui';
import { useMemo } from 'react';
import resources from './resources';

export default function MainMenu() {
  const { data: categories } = useCategories(
    { orderBy: 'popularity', order: 'asc' },
    'menu-popular-categories'
  );

  const menu = useMemo(() => {
    const res = [];

    if (categories?.length) {
      res.push(
        createMenuSection({
          name: 'Themes',
          items: categories.map((category) => {
            if (!resources[category]) {
              throw new Error('Unrecognized category name');
            }
            return resources[category];
          }),
        })
      );
    }

    return res;
  }, [categories]);

  return <MenuRoot data={menu} />;
}
