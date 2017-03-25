import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  localStorage: {
    products: {
      type: Array,
      default: []
    },
  },
  components: {App},
})
