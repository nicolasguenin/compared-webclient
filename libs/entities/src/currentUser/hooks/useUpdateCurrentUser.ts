import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateCurrentUser from '../api/update-current-user';

export default function useUpdateCurrentUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => queryClient.setQueryData(['currentUser'], data),
  });
}
