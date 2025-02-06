import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const photography = createMenuGroup({
  name: 'Photography',
  icon: { name: 'camera-outline' },
  items: [
    createMenuItem({ name: 'Cameras', url: '/themes/photography/cameras' }),
    createMenuItem({ name: 'Lenses', url: '/themes/photography/lenses' }),
    createMenuItem({ name: 'Tripod', url: '/themes/photography/tripod' }),
    createMenuItem({
      name: 'Accessories',
      url: '/themes/photography/accessories',
    }),
  ],
});

export default photography;
