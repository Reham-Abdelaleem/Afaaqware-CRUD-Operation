import { User, CreateUserDTO, UpdateUserDTO } from '../../types/user';

export interface UserRepository {
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User>;
  create(user: CreateUserDTO): Promise<User>;
  update(user: UpdateUserDTO): Promise<User>;
  delete(id: number): Promise<void>;
}
