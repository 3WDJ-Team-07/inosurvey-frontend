import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Survey from '@/views/surveyView/Survey'
import SurveyMarket from '@/views/marketView/SurveyMarket'
import Donation from '@/views/donationView/Donation'
import Join from '@/views/auth/Join'
import SurveyForm from '@/views/surveyView/SurveyForm'
import SurveyRequest from '@/views/surveyView/SurveyRequest'
import SurveyComplete from '@/views/surveyView/SurveyComplete'
import MySurvey from '@/views/surveyView/MySurvey'
import MarketDetail from '@/views/marketView/MarketDetail'
import MarketSell from '@/views/marketView/MarketSell'
import DonationDetail from '@/views/donationView/DonationDetail'
import AddDonationBox from '@/views/donationView/AddDonationBox'
import MyPage from '@/views/myPageView/MyPage'
import DetailsRecord from '@/views/myPageView/DetailsRecord'
import {
  store
} from '../store'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  // const loginPath = `/?rPath=${encodeURIComponent(to.path)}`  // home으로 가게하면 될듯 ( 이부분 필요없을듯 )
  store.getters.isAuth ? next() : next('/')
}

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
      path: '/surveymarket',
      name: 'surveymarket',
      component: SurveyMarket,

      //beforeEnter: requireAuth
    },
    {
      path: '/donation',
      name: 'donation',
      component: Donation
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
    },
    {
      path: '/Surveyform',
      name: 'surveyform',
      component: SurveyForm
    },
    {
      path: '/Surveyrequest',
      name: 'surveyrequest',
      component: SurveyRequest
    },
    {
      path: '/surveycomplete',
      name: 'surveycomplete',
      component: SurveyComplete
    },
    {
      path: '/mysurvey',
      name: 'mysurvey',
      component: MySurvey
    },
    {
      path: '/detail',
      name: 'surveymarketdetail',
      component: MarketDetail
    },
    {
      path: '/sell',
      name: 'surveymarketsell',
      component: MarketSell
    },
    {
      path: '/donationdetail',
      name: 'donationdetail',
      component: DonationDetail
    },
    {
      path: '/adddonationbox',
      name: 'adddonationbox',
      component: AddDonationBox
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage
    },
    {
      path: '/detailsrecord',
      name: 'detailsrecord',
      component: DetailsRecord
    },
    {
      path: '/*',
      name: 'notFound',
      redirect: {
        name: 'Home'
      }
    }
  ]
})
