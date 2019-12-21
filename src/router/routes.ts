import { RouteConfig } from 'vue-router';
import Login from '@/components/login/login.vue';
import Register from '@/components/register/register.vue';
import Chat from '@/components/chat/chat.vue';

const login: RouteConfig = {
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    title: 'Login',
    requiresAuthentication: false,
  },
};

const register: RouteConfig = {
  path: '/register',
  name: 'register',
  component: Register,
  meta: {
    title: 'Register',
    requiresAuthentication: false,
  },
};

const chat: RouteConfig = {
  path: '/',
  name: 'chat',
  component: Chat,
  meta: {
    title: 'Messages',
    requiresAuthentication: true,
  },
};

export default [ login, register, chat ];
