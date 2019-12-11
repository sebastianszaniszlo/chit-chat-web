import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import auth, { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import socketio from '@feathersjs/socketio-client';

export abstract class FeathersClient {

  protected client: feathers.Application<any>;

  constructor() {
    const baseUrl = `${process.env.VUE_APP_API_URL}`;
    const socket = io(baseUrl);
    this.client = feathers()
      .configure(socketio(socket))
      .configure(auth());

    this.client.authenticate({
      strategy: 'local',
      email: 'seb@seb.com',
      password: '123456',
    });
  }

  protected async getAsync<T>(serviceName: string, data?: any): Promise<T> {
    return this.client.service(serviceName).find();
  }

  protected abstract setupSocketNotifications(): void;
}
