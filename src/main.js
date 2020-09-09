import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import plugins from './plugins'
Vue.use(plugins);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

/* API CONFIGURATION
auth token is added in auth and init vuex-modules */
import api from '@/api';
// Vue.prototype.$api = api;
api.interceptors.response.use(res=>res,err=>{
  // console.log('catched inside interceptor',err)
  if(err.response && err.response.status == 401){
    store.dispatch('auth/sessionExpired');
  }
  Promise.reject(err);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')