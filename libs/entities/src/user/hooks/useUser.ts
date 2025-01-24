'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../api';

export default function useUser(id: string) {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser(id),
  });
}
