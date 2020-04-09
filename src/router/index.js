import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rooms from '../views/Rooms.vue'
import Room from '../views/Room.vue'
import Parameter from '../views/Parameter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms,
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: Room,
  },
  {
    path: '/parameter',
    name: 'Parameter',
    component: Parameter,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
