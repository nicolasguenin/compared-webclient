import { fetchCategories } from '@cpd/entities/src/category/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import MainMenu from './MainMenu';

export default async function MainMenuContainer() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['menu-popular-categories'],
    queryFn: () => fetchCategories({ orderBy: 'popularity', order: 'asc' }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainMenu />
    </HydrationBoundary>
  );
}
