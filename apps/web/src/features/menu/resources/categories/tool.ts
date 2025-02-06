import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const tool = createMenuGroup({
  name: 'Tool',
  icon: { name: 'hammer-screwdriver' },
  items: [
    createMenuItem({
      name: 'Cabinetmakers',
      url: '/themes/tool/cabinetmakers',
    }),
    createMenuItem({ name: 'Wood', url: '/themes/tool/wood' }),
    createMenuItem({ name: 'Saws', url: '/themes/tool/saws' }),
    createMenuItem({ name: 'Drills', url: '/themes/tool/drills' }),
    createMenuItem({ name: 'Routers', url: '/themes/tool/routers' }),
  ],
});

export default tool;
