import Vue                  from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'
import { Scroll }           from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  components: {
    VLayout
  },
  directives: {
    Scroll
  },
  iconfont: 'mdi'
})