import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const worldCooking = createMenuGroup({
  name: 'World Cooking',
  icon: { name: 'earth' },
  items: [
    createMenuItem({
      name: 'Asian',
      url: '/themes/world-cooking/asian',
    }),
    createMenuItem({ name: 'Indian', url: '/themes/world-cooking/asian' }),
    createMenuItem({ name: 'American', url: '/themes/world-cooking/american' }),
    createMenuItem({ name: 'Spanish', url: '/themes/world-cooking/spanish' }),
    createMenuItem({ name: 'Oriental', url: '/themes/world-cooking/oriental' }),
  ],
});

export default worldCooking;
