import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import './scss/variables.scss';

import AdminLayout from "./layouts/Admin.vue";
import PublicLayout from "./layouts/Public.vue";

Vue.component('admin-layout', AdminLayout);
Vue.component('public-layout', PublicLayout);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    this.$store.dispatch('user/tryAutoLogin');
    this.$store.dispatch('categories/fetch');
    this.$store.dispatch('products/fetch');
  }
}).$mount('#app')