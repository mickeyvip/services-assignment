import Vue from 'vue';
import VueRouter from 'vue-router';
import { createPinia, PiniaVuePlugin } from 'pinia';
import vSelect from 'vue-select'
import { routes } from './routes'
import './styles/tailwind.css'
import './styles/style.scss';
import App from './App.vue';

Vue.use(VueRouter)
Vue.use(PiniaVuePlugin);
Vue.component('VSelect', vSelect);

const pinia = createPinia();

const router = new VueRouter({
  routes
})

new Vue({
  pinia,
  router,
  render: (h) => h(App)
}).$mount('#app');
