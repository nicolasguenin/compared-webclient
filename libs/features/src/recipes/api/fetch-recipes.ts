import { FetchRecipes, IRecipes } from '@cpd/features/recipes';
import { prepareParams } from '@cpd/helpers';
import { api } from '@cpd/shared';

export default async function fetchRecipes(options: FetchRecipes = {}) {
  const { data } = await api.get<IRecipes>('/recipes', {
    params: prepareParams(options),
  });
  return data;
}
