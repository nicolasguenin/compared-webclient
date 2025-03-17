import { IRecipe } from 'libs/entities/src/recipe';
import { d } from '@cpd/helpers';
import { Box, Button, Text } from '@cpd/ui';
import Link from 'next/link';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Box> {
  recipe: IRecipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <Box
      className={'relative'}
      shadow
      padding={1}
    >
      <Box
        bgColor={'neutral-600'}
        height={200}
        width={'100%'}
        rounded
        marginBottom={1}
      />
      <Text
        as={'span'}
        weight={700}
        marginBottom={'0-5'}
        block
      >
        {recipe.name}
      </Text>
      <Text
        as={'span'}
        size={'xs'}
      >
        Posted on: {d(recipe.createdAt).format('L')}
      </Text>
      <Button
        as={Link}
        href={`/recipes/${recipe.uuid}`}
        className={'covered-absolute idx-1'}
        color={'transparent'}
      />
    </Box>
  );
}
