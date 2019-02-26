import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {store} from './store'
import i18n from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
