import { ActionTree, ActionContext } from 'vuex';
import { State } from '@/store/users/state';
import { UsersService } from '@/feathers/services/users-service';
import { RegisterRequest } from '@/feathers/requests/register-request';
import { FeathersError } from '@feathersjs/errors';

const usersService = new UsersService();

export class Actions implements ActionTree<State, any> {
    [key: string]: ((injectee: ActionContext<State, any>, payload: any) => any);

    public fetchUsersAsync = async (context: ActionContext<State, any>) => {
        try {
            const response = await usersService.fetchUsersAsync();
            context.commit('setUsers', response.data);
        } catch (e) {
            throw new Error('Could not load users');
        }
    }

    public registerUserAsync = async (context: ActionContext<State, any>, request: RegisterRequest) => {
        try {
            await usersService.registerUserAsync(request);
        } catch (e) {
            if (e instanceof FeathersError) {
                throw e;
            } else {
                throw new Error('Could not register user');
            }
        }
    }
}
