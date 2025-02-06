import { createMenuGroup, createMenuItem } from '@cpd/widgets/menu/helpers';

const movie = createMenuGroup({
  name: 'Movie',
  icon: { name: 'movie-open-outline' },
  items: [
    createMenuItem({ name: 'Action', url: '/themes/movie/action' }),
    createMenuItem({ name: 'Documentary', url: '/themes/movie/documentary' }),
    createMenuItem({ name: 'Reality TV', url: '/themes/movie/reality-tv' }),
    createMenuItem({ name: 'Horror', url: '/themes/movie/horror' }),
    createMenuItem({ name: 'Romantic', url: '/themes/movie/romantic' }),
    createMenuItem({
      name: 'Science fiction',
      url: '/themes/movie/science-fiction',
    }),
    createMenuItem({ name: 'Thriller', url: '/themes/movie/thriller' }),
  ],
});

export default movie;
