import { RouteConfig } from 'vue-router';
import Login from '@/components/login/login.vue';
import Chat from '@/components/chat/chat.vue';

const login: RouteConfig = {
  path: '/login',
  name: 'login',
  component: Login,
};

const chat: RouteConfig = {
  path: '/',
  name: 'chat',
  component: Chat,
};

export default [ login, chat ];
