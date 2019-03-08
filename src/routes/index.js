import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Survey from '@/views/Survey'
import Market from '@/views/Market'
import Join from '@/views/Join'
import SurveyForm from '@/views/SurveyForm'
import SurveySend from '@/views/SurveySend'

import apitest from '@/components/apitest'

Vue.use(Router)

// const requireLoginSession = (to, from, next) => {
//   const isSession = 0
//   const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
//   isSession ? next() : next(loginPath)
// } // 로그인 체크 ( beforeEnter로 검사하기 )

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
      path: '/SurveyForm',
      name: 'surveyForm',
      component: SurveyForm
    },
    {
      path: '/SurveySend',
      name: 'surveySend',
      component: SurveySend
    },
    {
      path: '/apitest',
      name: 'apitest',
      component: apitest
    }
  ]
})