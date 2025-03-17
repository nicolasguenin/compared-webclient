import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const recipes = createMenuGroup({
  name: 'Recipes',
  icon: { name: 'chef-hat' },
  items: [
    createMenuItem({ name: 'Breakfast', url: '/themes/recipes/breakfast' }),
    createMenuItem({ name: 'Appetizer', url: '/themes/recipes/appetizer' }),
    createMenuItem({ name: 'Meal', url: '/themes/recipes/meal' }),
    createMenuItem({
      name: 'Dessert',
      url: '/themes/recipes/dessert',
    }),
  ],
});

export default recipes;
