import { IRecipe } from '@cpd/entities/recipe';
import { api } from '@cpd/shared';

export default async function fetchRecipe(uuid: string) {
  const { data } = await api.get<IRecipe>(`/recipes/${uuid}`);
  return data;
}
