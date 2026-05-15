import apiClient from "@/services/api/UserApiService";

export interface getUsersResponse {
  email: string;
  name: string;
  password: string;
  id: number;
}

export function getUsersApi(): Promise<getUsersResponse[]> {
  return apiClient.get<getUsersResponse[]>(`/users`);
}
