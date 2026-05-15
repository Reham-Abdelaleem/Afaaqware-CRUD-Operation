import apiClient from "@/services/api/UserApiService";

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}
export interface CreateUserResponse {
  accessToken: string;
  user: {
    email: string;
    name: string;
    id: number;
  };
}

export function createUser(
  data: CreateUserPayload,
): Promise<CreateUserResponse> {
  return apiClient.post<CreateUserResponse>(`/users`, data);
}
