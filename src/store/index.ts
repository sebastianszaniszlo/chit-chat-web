import Vue from 'vue';
import Vuex from 'vuex';
import { UsersStore } from '@/store/users/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: new UsersStore(),
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
});
