'use client';

import fetchRecipe from '@cpd/entities/recipe/api/fetch-recipe';
import withError from '@cpd/shared/src/error/withError';
import { Box, Loader, Text } from '@cpd/ui';
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
    </Box>
  );
}

export default withError(RecipeDetail);
