import Vue                from 'vue'
import App                from './App.vue'
import router             from '@/routes/index'
import store              from '@/store/index'
import i18n               from './i18n'
import AOS                from 'aos'
import VueScrollTo        from 'vue-scrollto'
import swal               from 'sweetalert';
import Carousel3d         from 'vue-carousel-3d'
import                         'vuetify/dist/vuetify.min.css'
import                         './plugins/vuetify'
import                         'aos/dist/aos.css'


Vue.use(VueScrollTo,Carousel3d)
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    let token = localStorage.getItem('token')
    this.$store.dispatch('USER_INFO', { access_token: token })
  },
  created(){AOS.init()}, // scroll
  swal, // alert
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
