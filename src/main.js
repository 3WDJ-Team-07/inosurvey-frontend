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
import {initialize} from './helpers/general'

Vue.use(VueScrollTo)
Vue.config.productionTip = false

initialize(store, router)

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
