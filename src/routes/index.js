import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Survey from '@/views/surveyView/Survey'
import SurveyMarket from '@/views/marketView/SurveyMarket'
import Join from '@/views/auth/Join'
import SurveyForm from '@/views/surveyView/SurveyForm'
import SurveyRequest from '@/views/surveyView/SurveyRequest'
import SurveyComplete from '@/views/surveyView/SurveyComplete'
import MySurvey from '@/views/surveyView/MySurvey'
import MyPage from '@/views/myPageView/MyPage'
import DetailsRecord from '@/views/myPageView/DetailsRecord'
import {store} from '../store'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  // const loginPath = `/?rPath=${encodeURIComponent(to.path)}`  // home으로 가게하면 될듯 ( 이부분 필요없을듯 )
  store.getters.isAuth ? next() : next('/')
}

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
    },
    {
      path: '/surveyMarket',
      name: 'surveyMarket',
      component: SurveyMarket,
      beforeEnter: requireAuth
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
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
      path: '/SurveyComplete',
      name: 'surveyComplete',
      component: SurveyComplete
    },
    {
      path: '/mysurvey',
      name: 'mysurvey',
      component: MySurvey
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: MyPage
    },
    {
      path: '/detailsRecord',
      name: 'detailsRecord',
      component: DetailsRecord
    },
    {
      path: '/*',
      name: 'notFound',
      redirect: {name : 'Home'}
    }
  ]
})
