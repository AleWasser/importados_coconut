import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

import AdminLayout from "./layouts/Admin.vue";
import PublicLayout from "./layouts/Public.vue";

Vue.component('admin-layout', AdminLayout);
Vue.component('public-layout', PublicLayout);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')