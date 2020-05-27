import Vue from 'vue';
import Vuex from 'vuex';

import categories from './modules/categories';
import products from './modules/products';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
    products,
    user,
  }
});