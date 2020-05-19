import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from './store'

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));
Vue.use(VueAxios, axios);

window.app = new Vue({
  router,
  store,
  render: h =>  h(App)
}).$mount('#app');
