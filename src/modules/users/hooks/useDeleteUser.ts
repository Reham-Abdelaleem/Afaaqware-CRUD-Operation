import { deleteUser } from "../api/deleteUserApi";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useQueryClient } from "@tanstack/react-query";
export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useApiMutation({
    mutationFn: deleteUser,
    options: {
      retry: 1,
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey: ["users"]});
        
      }
    },
  });
}
