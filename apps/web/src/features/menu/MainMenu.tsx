'use client';

import { useCategories } from '@cpd/entities/src/category';
import { createMenuItem, createMenuSection } from '@cpd/widgets/menu/helpers';
import { MenuRoot } from '@cpd/widgets/menu/ui';
import { useMemo } from 'react';
import resources from './resources';

export default function MainMenu() {
  const { data: categories } = useCategories(
    { orderBy: 'popularity', order: 'asc' },
    'menu-popular-categories'
  );

  const menu = useMemo(() => {
    const res = [
      createMenuSection({
        items: [
          createMenuItem({
            name: 'Recipe generator',
            icon: {
              name: 'electron-framework',
            },
            url: '/recipe-generator',
          }),
        ],
      }),
    ];

    if (categories?.length) {
      res.push(
        createMenuSection({
          name: 'Themes',
          items: categories.map((category) => {
            if (!resources[category]) {
              throw new Error(`Unrecognized category name: ${category}`);
            }
            return resources[category];
          }),
        })
      );
    }

    res.push(
      createMenuSection({
        name: 'Profile',
        items: [
          createMenuItem({
            name: 'Favorites',
            icon: { name: 'heart-outline' },
            url: '/user/favorites',
          }),
          createMenuItem({
            name: 'Your recipes',
            icon: {
              name: 'book-open-page-variant-outline',
            },
            url: '/user/recipes',
          }),
        ],
      })
    );

    return res;
  }, [categories]);

  return <MenuRoot data={menu} />;
}
