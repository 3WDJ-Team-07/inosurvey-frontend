import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Services from '@/views/Services'
import Market from '@/views/Market'
import Join from '@/views/Join'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    }
  ]
})

export default router