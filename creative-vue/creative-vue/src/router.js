import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Unilin from './pages/Unilin.vue'
import Storied from './pages/Storied.vue'
import Appartments from './pages/Appartments.vue'
import Pizza from './pages/Pizza.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      // window.scroll({ top: 0 })
      const element = document.getElementById(to.hash.replace('#', ''))
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      document.querySelector('html').style.scrollBehavior = 'smooth'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = 'smooth'
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/unilin',
      component: Unilin,
    },
    {
      path: '/storied',
      component: Storied,
    },
    {
      path: '/appartments',
      component: Appartments,
    },
    {
      path: '/pizza',
      component: Pizza,
    },
  ],
})

export default router
