'use client';

import { useRecipes } from '@cpd/entities/recipes';
import { Box, Text } from '@cpd/ui';
import { lazy } from 'react';

const RecipeCard = lazy(
  () => import('@cpd/features/recipes/ui/components/RecipeCard')
);

export default function Recipes() {
  const { data: recipes, isLoading, isError } = useRecipes({ embed: ['tags'] });

  if (isLoading) {
    return <Text>Loading&hellip;</Text>;
  }

  if (isError) {
    return null;
  }

  return recipes?.length ? (
    <Box
      columns={3}
      gap={'1-5'}
    >
      {recipes.map((recipe) => (
        <RecipeCard
          recipe={recipe}
          key={recipe.uuid}
        />
      ))}
    </Box>
  ) : (
    <Text>No result found</Text>
  );
}
