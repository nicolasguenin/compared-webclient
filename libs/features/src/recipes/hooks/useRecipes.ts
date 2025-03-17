import { fetchRecipes, FetchRecipes } from '@cpd/features/recipes';
import { useQuery } from '@tanstack/react-query';

export default function useRecipes(options: FetchRecipes = {}) {
  return useQuery({
    queryKey: ['recipes'],
    queryFn: () => fetchRecipes(options),
  });
}
