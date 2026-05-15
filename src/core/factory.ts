import { UserApiService } from '../services/api/UserApiService';
import { UserUseCases } from './usercases/UserUseCases';

const userApiService = new UserApiService();
export const userUseCases = new UserUseCases(userApiService);
