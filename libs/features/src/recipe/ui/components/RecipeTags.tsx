import { IRecipeTags } from '@cpd/features/recipe/types';
import RecipeTag from '@cpd/features/recipe/ui/components/RecipeTag';
import { Box } from '@cpd/ui';

export default function RecipeTags({ tags }: { tags: IRecipeTags }) {
  return (
    <Box
      flex
      gap={'0-5'}
      wrap
    >
      {tags.map((tag) => (
        <RecipeTag
          key={tag.id}
          name={tag.name}
          icon={tag.icon}
        />
      ))}
    </Box>
  );
}
