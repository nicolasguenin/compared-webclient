import { FetchRecipes } from '@cpd/entities/recipes';
import { useQuery } from '@tanstack/react-query';
import fetchRecipes from '../api/get-recipes';

export default function useRecipes(options: FetchRecipes = {}) {
  return useQuery({
    queryKey: ['recipes'],
    queryFn: () => fetchRecipes(options),
  });
}
