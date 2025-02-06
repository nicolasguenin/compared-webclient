import { api } from '@cpd/shared';
import { ICategoriesPayload } from '../types';

export default async function fetchCategories(params: ICategoriesPayload = {}) {
  const { data } = await api.get<string[]>('/categories', {
    params,
  });
  return data;
}
