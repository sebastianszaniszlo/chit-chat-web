import { RouteConfig } from 'vue-router';
import Home from '@/components/chat/chat.vue';
import Login from '@/components/login/login.vue';

const home: RouteConfig = {
  path: '/',
  name: 'home',
  component: Home,
};

const login: RouteConfig = {
  path: '/login',
  name: 'login',
  component: Login,
};

export default [ home, login ];
