import { FeathersClient } from '@/feathers/feathers-client';
import handleUserCreated from '@/feathers/event-handlers/user-created';
import { UsersResponse } from '@/feathers/responses/users-response';
import { User } from '@/shared/user';
import { RegisterRequest } from '@/feathers/requests/register-request';

export class UsersService extends FeathersClient {

  public constructor() {
    super();
    this.setupSocketNotifications();
  }

  public async fetchUsersAsync(): Promise<UsersResponse> {
    return await this.getAsync<UsersResponse>('users');
  }
  public async registerUserAsync(request: RegisterRequest): Promise<User> {
    return await this.postAsync<User>('users', request);
  }

  protected setupSocketNotifications(): void {
    const service = this.client.service('users');

    service.on('created', handleUserCreated);
  }

}
