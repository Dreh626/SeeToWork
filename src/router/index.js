import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstScreen from '../views/FirstScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: FirstScreen
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
