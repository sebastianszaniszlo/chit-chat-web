import { User } from '@/shared/user';
import store from '@/store';

export default async function handleUserCreated(user: User): Promise<void> {
  await store.dispatch('users/fetchUsersAsync');
}
