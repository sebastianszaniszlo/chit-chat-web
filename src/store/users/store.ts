import { Module } from 'vuex';
import { State } from '@/store/users/state';
import { Actions } from '@/store/users/actions';
import { Getters } from '@/store/users/getters';
import { Mutations } from '@/store/users/mutations';

export class UsersStore implements Module<State, any> {
    public namespaced: boolean = true;
    public state: State = new State();
    public actions = new Actions();
    public getters: Getters = new Getters();
    public mutations = new Mutations();
}
