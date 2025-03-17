import fetchRecipe from '@cpd/entities/recipe/api/fetch-recipe';
import RecipeDetail from '@cpd/entities/recipe/ui/content/RecipeDetail';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['recipe'],
    queryFn: () => fetchRecipe(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipeDetail recipeId={id} />
    </HydrationBoundary>
  );
}
