import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const house = createMenuGroup({
  name: 'House',
  icon: { name: 'home' },
  items: [
    createMenuItem({ name: 'Sofa', url: '/themes/house/sofa' }),
    createMenuItem({ name: 'Fridge', url: '/themes/house/fridge' }),
    createMenuItem({ name: 'Microwave', url: '/themes/house/microwave' }),
    createMenuItem({ name: 'Hotplate', url: '/themes/house/hotplate' }),
    createMenuItem({ name: 'Stove', url: '/themes/house/stove' }),
    createMenuItem({ name: 'Pan', url: '/themes/house/pan' }),
    createMenuItem({ name: 'Knives', url: '/themes/house/knives' }),
  ],
});

export default house;
