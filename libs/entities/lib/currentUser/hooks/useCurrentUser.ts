import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '../api';

export default function useCurrentUser() {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => fetchCurrentUser(),
  });
}
