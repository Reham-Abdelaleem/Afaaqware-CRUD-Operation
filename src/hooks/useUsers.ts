import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { userUseCases } from '../core/factory';
import { CreateUserDTO, UpdateUserDTO } from '../types/user';

// ===============================
// Query Keys (centralized)
// ===============================
const USER_KEYS = {
  all: ['users'] as const,
  detail: (id: number) => ['users', id] as const,
};

// ===============================
// Get all users
// ===============================
export const useUsers = () => {
  return useQuery({
    queryKey: USER_KEYS.all,
    queryFn: () => userUseCases.getUsers(),
    staleTime: 1000 * 60, // 1 minute cache
  });
};

// ===============================
// Create user
// ===============================
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserDTO) =>
      userUseCases.createUser(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: USER_KEYS.all,
      });
    },
  });
};

// ===============================
// Update user
// ===============================
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserDTO) =>
      userUseCases.updateUser(data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: USER_KEYS.all,
      });

      // optional: update cache instantly
      queryClient.invalidateQueries({
        queryKey: USER_KEYS.detail(variables.id),
      });
    },
  });
};

// ===============================
// Delete user
// ===============================
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      userUseCases.deleteUser(id),

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: USER_KEYS.all,
      });

      queryClient.invalidateQueries({
        queryKey: USER_KEYS.detail(id),
      });
    },
  });
};