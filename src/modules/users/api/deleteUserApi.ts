import apiClient from "@/services/api/UserApiService";

export function deleteUser(id: number): Promise<void> {
  return apiClient.delete<void>(`/users/${id}`);
}
