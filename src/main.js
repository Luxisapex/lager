import Vue from 'vue'
import App from './App.vue'

import Saldo from './Saldo.vue'

Vue.component('saldo', Saldo);

new Vue({
  el: '#app',
  render: h => h(App)
})
