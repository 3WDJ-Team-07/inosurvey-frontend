import Vue                from 'vue'
import App                from './App.vue'
import router             from '@/routes/index'
import store              from '@/store/index'
import i18n               from './i18n'
import AOS                from 'aos'
import VueScrollTo        from 'vue-scrollto'
import swal               from 'sweetalert';
import                         'vuetify/dist/vuetify.min.css'
import                         './plugins/vuetify'
import                         'aos/dist/aos.css'

Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  created(){AOS.init()}, // scroll
  swal, // alert
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
