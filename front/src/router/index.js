import Vue from 'vue'
import VueRouter from 'vue-router'
import Gang from '../views/Gang.vue'
import Inventory from '../views/Inventory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/gangue/:id',
    name: 'Gangue',
    component: Gang
  },
  {
    path: '/inventory/:id',
    name: 'Inventory',
    component: Inventory
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
