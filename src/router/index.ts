import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
import { AuthService } from '@/feathers/services/auth-service';

Vue.use(VueRouter);

const authService = new AuthService();

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes],
});

router.afterEach((to, from) => {
  document.title = `${to.meta.title} - Chit Chat`;
});

router.beforeEach(async (to, from, next) => {
  const accessToken = await authService.isLoggedIn();
  const isLoggedIn = accessToken != null;

  if (!isLoggedIn && to.meta.requiresAuthentication) {
    next({name: 'login'});
    return;
  }

  next();
});

export default router;
