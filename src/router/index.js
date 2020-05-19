import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../views/OtherMenu.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/order-list/',
    name: 'orderList',
    component: () => import('../views/OrderList.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
