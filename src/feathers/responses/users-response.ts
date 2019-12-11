import { User } from '@/shared/user';

export interface UsersResponse {
  total: number;
  limit: number;
  skip: number;
  data: Array<User>;
}
