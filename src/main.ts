import Vue from 'vue';
import app from '@/app.vue';
import router from '@/router';
import store from '@/store';
import Buefy from 'buefy';
// import 'buefy/dist/buefy.css';
import '@/scss/app.scss';

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount('#app');
