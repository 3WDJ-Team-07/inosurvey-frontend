import Vue                  from 'vue'
import Router               from 'vue-router'
import store                from '../store'
import swal                 from 'sweetalert'
import Join                 from '@/views/auth/Join'
import Home                 from '@/views/Home'
import Survey               from '@/views/surveyView/Survey'
import SurveyMarket         from '@/views/marketView/SurveyMarket'
import SurveyForm           from '@/views/surveyView/SurveyForm'
import SurveyRequest        from '@/views/surveyView/SurveyRequest'
import SurveyComplete       from '@/views/surveyView/SurveyComplete'
import MySurvey             from '@/views/surveyView/MySurvey'
import SurveyAnalysis       from '@/components/survey/analysis/SurveyAnalysis'
import MyPage               from '@/views/myPageView/MyPage'
import surveyHistory        from '@/components/mypage/surveyHistory'
import surveyHistoryDetail  from '@/components/mypage/surveyHistoryDetail'
import marketHistory        from '@/components/mypage/marketHistory'
import marketHistoryDetail  from '@/components/mypage/marketHistoryDetail'
import foundationHistory    from '@/components/mypage/foundationHistory'
import donateHistory        from '@/components/mypage/donateHistory'
import walletHistory        from '@/components/mypage/walletHistory'
import MarketDetail         from '@/views/marketView/MarketDetail'
import MarketSale           from '@/views/marketView/MarketSale'
import Donation             from '@/views/donationView/Donation'
import DonationDetail       from '@/views/donationView/DonationDetail'
import AddDonationBox       from '@/views/donationView/AddDonationBox'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  store.getters.isAuth ? 
  next() : 
  swal(
    "접근불가!",
    "로그인후 이용 가능합니다.",
    "error",
    {button: "확인"}
  );
}

const router = new Router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
      children: [
        {
          path: 'surveyhistory',
          name: 'surveyhistory',
          component: surveyHistory,
          children: [
            {
              path: 'detail/:form_id',
              name: 'surveyhistorydetail',
              component : surveyHistoryDetail
            }
          ]
        },
        {
          path: 'markethistory',
          name: 'markethistory',
          component: marketHistory,
          children: [
            {
              path: 'detail/:form_id',
              name: 'markethistorydetail',
              component : marketHistoryDetail
            }
          ]
        },
        {
          path: 'foundationhistory',
          name: 'foundationhistory',
          component: foundationHistory
        },
        {
          path: 'donatehistory',
          name: 'donatehistory',
          component: donateHistory
        },
        {
          path: 'wallethistory',
          name: 'wallethistory',
          component: walletHistory
        },
      ]
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'surveyform',
          name: 'surveyform',
          component: SurveyForm
        },
        {
          path: 'surveyrequest',
          name: 'surveyrequest',
          component: SurveyRequest
        },
        {
          path: 'surveycomplete',
          name: 'surveycomplete',
          component: SurveyComplete
        },
        {
          path: 'mysurvey',
          name: 'mysurvey',
          component: MySurvey,
          children: [
            {
              path: 'analysis/:form_id',
              name: 'analysis',
              props: true,
              component: SurveyAnalysis
            }
          ]
        }
      ]
    },
    {
      path: '/surveymarket',
      name: 'surveymarket',
      component: SurveyMarket,
      beforeEnter: requireAuth,
      children:[
        {
          path:'detail/:market_id',
          name:'surveymarketdetail',
          props: true,
          component: MarketDetail
        },
        {
          path: 'sell/:sell_id',
          name: 'marketsale',
          props: true,
          component: MarketSale
        }
      ]
    },
    {
      path: '/donation',
      name: 'donation',
      component: Donation,
    
      children:[
        {
          path: 'detail/:donation_id',
          name: 'donationdetail',
          props: true,
          component: DonationDetail
        },
        {
          path: 'adddonationbox',
          name: 'adddonationbox',
          component: AddDonationBox
        },
      ]
    },
    {
      path: '/*',
      name: 'notfound',
      redirect: {name : 'Home'}
    }
  ],
  scrollBehavior : () =>({y:0})
})

export default router