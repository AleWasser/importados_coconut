import Vue from 'vue';
import VueRouter from 'vue-router';

import AuthGuard from './auth-guard';

import Home from '../views/Home.vue';

//* Products
import Product from '../views/products/Product.vue';

//* Categories
import CategoryIndex from '../views/categories/CategoryIndex.vue';

//* Admin
import Login from '../views/authentication/Login.vue';
import Dashboard from '../views/admin/Dashboard.vue';
import CategoriesIndex from '../views/admin/categories/Index.vue';
import CategoryCreate from '../views/admin/categories/Create.vue';
import CategoryEdit from '../views/admin/categories/Edit.vue';
import ProductsIndex from '../views/admin/products/Index.vue';
import ProductCreate from '../views/admin/products/Create.vue';
import ProductEdit from '../views/admin/products/Edit.vue';

Vue.use(VueRouter)

const routes = [
  //* Public
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/categorias/:id',
    name: 'CategoryIndex',
    component: CategoryIndex,
  },
  //* Admin
  {
    path: '/admin/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Dashboard,
    meta: {
      layout: 'admin'
    },
    beforeEnter: AuthGuard,
  },
  {
    path: '/admin/categorias',
    name: 'CategoriesIndex',
    component: CategoriesIndex,
    meta: {
      layout: 'admin'
    },
    beforeEnter: AuthGuard,
  },
  {
    path: '/admin/categorias/crear',
    name: 'CategoryCreate',
    component: CategoryCreate,
    meta: {
      layout: 'admin'
    },
    beforeEnter: AuthGuard,
  },
  {
    path: '/admin/categorias/editar/:id',
    name: 'CategoryEdit',
    component: CategoryEdit,
    meta: {
      layout: 'admin'
    },
    beforeEnter: AuthGuard,
  },
  {
    path: '/admin/productos',
    name: 'ProductsIndex',
    component: ProductsIndex,
    meta: {
      layout: 'admin'
    },
    beforeEnter: AuthGuard,
  },
  {
    path: '/admin/productos/crear',
    name: 'ProductsCreate',
    component: ProductCreate,
    meta: {
      layout: 'admin'
    },
    beforeEnter: AuthGuard,
  },
  {
    path: '/admin/productos/editar/:id',
    name: 'ProductsEdit',
    component: ProductEdit,
    meta: {
      layout: 'admin'
    },
    beforeEnter: AuthGuard,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router