import { prepareParams } from '@cpd/helpers';
import { api } from '@cpd/shared';
import { FetchRecipes, IRecipes } from '../types';

export default async function fetchRecipes(options: FetchRecipes = {}) {
  const { data } = await api.get<IRecipes>('/recipes', {
    params: prepareParams(options),
  });
  return data;
}
