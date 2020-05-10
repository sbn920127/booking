import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import ('../views/Home.vue'),
      header: () => import ('../components/MainHeader.vue'),
      footer: () => import ('../components/Footer.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
