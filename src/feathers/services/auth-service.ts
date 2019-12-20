import { FeathersClient } from '@/feathers/feathers-client';
import { LoginRequest } from '../requests/login-request';
import { AuthenticationResult } from '@feathersjs/authentication/lib';

export class AuthService extends FeathersClient {

  public constructor() {
    super();
  }

  public async loginAsync(request: LoginRequest): Promise<AuthenticationResult> {
    return await this.client.authenticate({
      strategy: 'local',
      email: request.email,
      password: request.password,
    });

  }
  public async logoutAsync(): Promise<AuthenticationResult | null> {
    return await this.client.logout();
  }
  public async isLoggedIn(): Promise<string | null> {
    return await this.client.authentication.getAccessToken();
  }

  protected setupSocketNotifications(): void {
    return;
  }

}
