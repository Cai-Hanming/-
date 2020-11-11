import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index'

Vue.config.productionTip = false
import api from'@/until/api'
Vue.prototype.$axios=api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
