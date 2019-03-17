import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import {router} from '@/routes/index'
import {store} from '@/store/index'
import i18n from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueScrollTo)
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // 이 라우트는 인증이 필요하며 로그인 한 경우 확인.
//     // 그렇지 않은 경우 로그인 페이지로 리디렉션.
//     if (!store.getters.loggedIn) {
//       next({
//         name: 'login',
//       })
//     } else {
//       next()
//     }
//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     if (!store.getters.loggedIn) {
//       next({
//         name: 'survey',
//       })
//     } else {
//       next()
//     }
//   }else {
//     next() 
//   }
// })

new Vue({
  created(){
    AOS.init();
  },
  VueFriendlyIframe,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
