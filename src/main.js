import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Saldo from './Saldo.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/lagersaldo', component: Saldo },
  // { path: '/prissättning', component: Pricing },
  // { path: '/in-ut-leverans', component: Transactions },
  // { path: '/', component: Saldo}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
