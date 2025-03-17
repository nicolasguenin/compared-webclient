import { Recipes } from '@cpd/features/recipes';
import { Text } from '@cpd/ui';

export default function Page() {
  return (
    <>
      <Text
        as={'h1'}
        marginTop={0}
      >
        Recipes
      </Text>
      <Recipes />
    </>
  );
}
