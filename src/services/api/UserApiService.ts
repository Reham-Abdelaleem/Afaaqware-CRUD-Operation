import { UserRepository } from '../../core/entities/UserRepository';
import { User, CreateUserDTO, UpdateUserDTO } from '../../types/user';
import Cookies from 'js-cookie';

export class UserApiService implements UserRepository {
  private baseUrl = 'http://localhost:3007';

  private getHeaders() {
    const token = Cookies.get('accessToken');

    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    };
  }

  async getAll(): Promise<User[]> {
    const response = await fetch(`${this.baseUrl}/users`, {
      headers: this.getHeaders()
    });

    if (!response.ok) {
      throw new Error('Unable to load users. Please try again later.');
    }

    return response.json();
  }

  async getById(id: number): Promise<User> {
    const response = await fetch(`${this.baseUrl}/users/${id}`, {
      headers: this.getHeaders()
    });

    if (!response.ok) {
      throw new Error('User not found or may have been deleted.');
    }

    return response.json();
  }

  async create(user: CreateUserDTO): Promise<User> {
    const response = await fetch(`${this.baseUrl}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);

      throw new Error(
        'Unable to create user. Please check your input and try again.'
      );
    }

    const data = await response.json();
    return data.user;
  }

  async update(user: UpdateUserDTO): Promise<User> {
    const { id, ...payload } = user;

    const response = await fetch(`${this.baseUrl}/users/${id}`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Unable to update user. Please try again.');
    }

    return response.json();
  }

  async delete(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/users/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    });

    if (!response.ok) {
      throw new Error('Unable to delete user. Please try again later.');
    }
  }
}