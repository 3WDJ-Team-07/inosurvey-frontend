import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Survey from '@/views/Survey'
import Market from '@/views/Market'
import Join from '@/views/Join'
import Logout from '@/views/Logout'
import SurveyForm from '@/views/SurveyForm'
import SurveyRequest from '@/views/SurveyRequest'

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
      name: 'home',
      component: Home
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
      meta:{
        requiresVisitor:true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/SurveyForm',
      name: 'surveyForm',
      component: SurveyForm
    },
    {
      path: '/SurveyRequest',
      name: 'surveyRequest',
      component: SurveyRequest
    },
    {
      path: '/*',
      name: 'notFound',
      redirect: {name : 'Home'}
    }
  ]
})
