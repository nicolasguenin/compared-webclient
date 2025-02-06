import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const gaming = createMenuGroup({
  name: 'Gaming',
  icon: { name: 'gamepad-variant-outline' },
  items: [
    createMenuItem({ name: 'Action', url: '/themes/gaming/action' }),
    createMenuItem({ name: 'Adventure', url: '/themes/gaming/adventure' }),
    createMenuItem({ name: 'Mobile', url: '/themes/gaming/mobile' }),
    createMenuItem({
      name: 'Role playing games',
      url: '/themes/gaming/role-playing-games',
    }),
    createMenuItem({ name: 'E-sports', url: '/themes/gaming/e-sports' }),
    createMenuItem({ name: 'Strategy', url: '/themes/gaming/strategy' }),
    createMenuItem({ name: 'Sports', url: '/themes/gaming/sports' }),
    createMenuItem({ name: 'Racing', url: '/themes/gaming/racing' }),
  ],
});

export default gaming;
