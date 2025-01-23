'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../api';

export default function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser(),
  });
}
