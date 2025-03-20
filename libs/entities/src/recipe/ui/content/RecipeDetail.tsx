'use client';

import fetchRecipe from '@cpd/entities/recipe/api/fetch-recipe';
import { RecipeTags } from '@cpd/features/recipe';
import withError from '@cpd/shared/src/error/withError';
import { Box, Loader, Text } from '@cpd/ui';
import { d } from '@cpd/helpers';
import { useQuery } from '@tanstack/react-query';

function RecipeDetail({ recipeId }: { recipeId: string }) {
  const { data: recipe, isLoading } = useQuery({
    queryKey: ['recipe'],
    queryFn: () => fetchRecipe(recipeId),
    throwOnError: true,
    meta: {
      errorMsg: 'An error occurred while fetching recipe',
    },
  });

  if (isLoading) {
    return (
      <Box padding={1}>
        <Loader className={'text-xl'} />
      </Box>
    );
  }

  if (!recipe) {
    return null;
  }

  return (
    <Box>
      <Text
        as={'h1'}
        marginTop={0}
      >
        {recipe.name}
      </Text>
      <Text
        size={'sm'}
        marginBottom={'0-5'}
      >
        Posted on {d(recipe.createdAt).format('LL')}
      </Text>
      {recipe.tags?.length && <RecipeTags tags={recipe.tags} />}
    </Box>
  );
}

export default withError(RecipeDetail);
