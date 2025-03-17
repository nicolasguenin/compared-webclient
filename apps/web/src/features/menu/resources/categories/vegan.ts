import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const vegan = createMenuGroup({
  name: 'Vegan',
  icon: { name: 'leaf-circle-outline' },
  items: [
    createMenuItem({
      name: 'Recipes',
      url: '/themes/vegan/recipes',
    }),
    createMenuItem({
      name: 'Weekly menu',
      icon: {
        name: 'home',
      },
      url: '/themes/vegan/weekly-menu',
    }),
    createMenuItem({
      name: 'Food',
      url: '/themes/vegan/food',
    }),
    createMenuItem({
      name: 'Aperitif',
      url: '/themes/vegan/aperitif',
    }),
    createMenuItem({
      name: 'Breakfast',
      url: '/themes/vegan/breakfast',
    }),
  ],
});

export default vegan;
