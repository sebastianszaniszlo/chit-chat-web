import { MutationTree } from 'vuex';
import { State } from '@/store/users/state';
import { User } from '@/shared/user';

export class Mutations implements MutationTree<State> {
    [key: string]: (state: State, payload: any) => any;

    public setUsers = (state: State, users: Array<User>) => {
        state.users = users;
    }
}
