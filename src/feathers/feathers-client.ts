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
  }

  protected async getAsync<T>(serviceName: string, data?: any): Promise<T> {
    return this.client.service(serviceName).find();
  }

  protected async postAsync<T>(serviceName: string, data: any): Promise<T> {
    return this.client.service(serviceName).create(data);
  }

  protected abstract setupSocketNotifications(): void;
}
