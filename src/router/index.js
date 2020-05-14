import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Dashboard from '../views/admin/Dashboard.vue';

//* Products
import Product from '../views/products/Product.vue';
import ProductsIndex from '../views/admin/products/Index.vue';

//* Categories
import CategoryIndex from '../views/categories/CategoryIndex.vue';
//* Admin
import CategoriesIndex from '../views/admin/categories/Index.vue';
import CategoryCreate from '../views/admin/categories/Create.vue';
import CategoryEdit from '../views/admin/categories/Edit.vue';

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
    path: '/categorias/:id',
    name: 'CategoryIndex',
    component: CategoryIndex,
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
    name: 'CategoriesIndex',
    component: CategoriesIndex,
    meta: {
      layout: 'admin'
    }
  },
  {
    path: '/admin/categorias/crear',
    name: 'CategoryCreate',
    component: CategoryCreate,
    meta: {
      layout: 'admin'
    }
  },
  {
    path: '/admin/categorias/editar/:id',
    name: 'CategoryEdit',
    component: CategoryEdit,
    meta: {
      layout: 'admin'
    }
  },
  {
    path: '/admin/productos',
    name: 'ProductsIndex',
    component: ProductsIndex,
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