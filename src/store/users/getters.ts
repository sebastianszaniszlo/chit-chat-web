import { GetterTree } from 'vuex';
import { State } from '@/store/users/state';
export class Getters implements GetterTree<State, any> {
    [key: string]: (state: State, getters: any, rootState: any, rootGetters: any) => any;

    public users = (state: State) => {
        return state.users;
    }
}
