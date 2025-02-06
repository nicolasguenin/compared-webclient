import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const electronic = createMenuGroup({
  name: 'Electronic',
  icon: { name: 'electron-framework' },
  items: [
    createMenuItem({
      name: 'Computers and hardware',
      url: '/themes/electronic/computers-and-hardware',
    }),
    createMenuItem({
      name: 'Television',
      url: '/themes/electronic/television',
    }),
    createMenuItem({
      name: 'Impression 3D',
      url: '/themes/electronic/impression-3d',
    }),
    createMenuItem({
      name: 'Security cameras',
      url: '/themes/electronic/security-cameras',
    }),
    createMenuItem({
      name: 'Connected devices',
      url: '/themes/electronic/connected-devices',
    }),
  ],
});

export default electronic;
