import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import ProductIndex from '../views/products/ProductIndex.vue'
import Product from '../views/products/Product.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import CategoriasIndex from '../views/admin/categories/Index.vue'
import ProductosIndex from '../views/admin/products/Index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos/:categoria/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/productos/:categoria',
    name: 'ProductIndex',
    component: ProductIndex,
  },
  {
    path: '/admin/dashboard',
    name: 'Admin',
    component: Dashboard,
    meta: {
      layout: 'admin'
    }
  },
  {
    path: '/admin/categorias',
    name: 'CategoriasIndex',
    component: CategoriasIndex,
    meta: {
      layout: 'admin'
    }
  },
  {
    path: '/admin/productos',
    name: 'ProductosIndex',
    component: ProductosIndex,
    meta: {
      layout: 'admin'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router