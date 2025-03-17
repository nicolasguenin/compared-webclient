import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../api';
import { ICategoriesPayload } from '../types';

export default function useCategories(
  params: ICategoriesPayload = {},
  queryKey = 'categories'
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchCategories(params),
  });
}
