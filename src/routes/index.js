import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Survey from '@/views/Survey'
import Market from '@/views/Market'
import Join from '@/views/Join'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path:'*',
      component: NotFound
    }
  ]
})