import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const vegetarian = createMenuGroup({
  name: 'Vegetarian',
  icon: { name: 'alpha-v-circle-outline' },
  items: [
    createMenuItem({
      name: 'Recipes',
      url: '/themes/vegetarian/recipes',
    }),
    createMenuItem({
      name: 'Weekly menu',
      url: '/themes/vegetarian/weekly-menu',
    }),
    createMenuItem({
      name: 'Food',
      url: '/themes/vegetarian/food',
    }),
    createMenuItem({
      name: 'Aperitif',
      url: '/themes/vegetarian/aperitif',
    }),
    createMenuItem({
      name: 'Breakfast',
      url: '/themes/vegetarian/breakfast',
    }),
  ],
});

export default vegetarian;
