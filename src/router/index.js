import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
      path: '/about',
      name: 'about',
      component: About
   },
   {
      path: '/product',
      name: 'product.list',
      component: () => import('../views/products/List.vue')
   },
   {
      path: '/product/create',
      name: 'product.create',
      component: () => import('../views/products/Form.vue')
   },
   {
      path: '/product/edit/:id',
      name: 'product.edit',
      component: () => import('../views/products/Form.vue')
   },
    {
      path: '/user',
      name: 'user.list',
      component: () => import('../views/user/User')

   },
   {
     path: '/user/create',
     name: 'user.create',
     component: () => import('../views/user/Form')

  }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
