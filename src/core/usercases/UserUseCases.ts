import { UserRepository } from '../entities/UserRepository';
import { CreateUserDTO, UpdateUserDTO } from '../../types/user';

export class UserUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  // =========================
  // Get all users
  // =========================
  async getUsers() {
    return await this.userRepository.getAll();
  }

  // =========================
  // Get single user
  // =========================
  async getUser(id: number) {
    if (!id || id <= 0) {
      throw new Error('Invalid user ID provided');
    }

    return await this.userRepository.getById(id);
  }

  // =========================
  // Create user
  // =========================
  async createUser(user: CreateUserDTO) {
    if (!user.name?.trim()) {
      throw new Error('User name is required');
    }

    if (!user.email?.trim()) {
      throw new Error('Email is required');
    }

    if (!user.email.includes('@')) {
      throw new Error('Please enter a valid email address');
    }

    return await this.userRepository.create(user);
  }

  // =========================
  // Update user
  // =========================
  async updateUser(user: UpdateUserDTO) {
    if (!user.id || user.id <= 0) {
      throw new Error('Invalid user ID');
    }

    if (user.email && !user.email.includes('@')) {
      throw new Error('Please enter a valid email address');
    }

    return await this.userRepository.update(user);
  }

  // =========================
  // Delete user
  // =========================
  async deleteUser(id: number) {
    if (!id || id <= 0) {
      throw new Error('Invalid user ID');
    }

    return await this.userRepository.delete(id);
  }
}