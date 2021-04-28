import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery')
  }
/* {
    path: '/about',
    name: 'About',
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
