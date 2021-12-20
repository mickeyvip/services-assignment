import HomeView from './views/Home.vue';
import DetailsView from './views/Details.vue';

/**
 * Define the application routes
 */
export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:serviceId/:instanceId',
    name: 'details',
    component: DetailsView,
    props: true
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
];