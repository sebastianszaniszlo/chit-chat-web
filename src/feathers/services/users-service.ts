import { FeathersClient } from '@/feathers/feathers-client';
import handleUserCreated from '@/feathers/event-handlers/user-created';
import { UsersResponse } from '@/feathers/responses/users-response';

export class UsersService extends FeathersClient {

  public constructor() {
    super();
    this.setupSocketNotifications();
  }

  public async fetchUsersAsync(): Promise<UsersResponse> {
    return await this.getAsync<UsersResponse>('users');
  }
  protected setupSocketNotifications(): void {
    const service = this.client.service('users');

    service.on('created', handleUserCreated);
  }

}
