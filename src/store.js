import Vue from 'vue'
import Vuex from 'vuex'
import { set, toggle } from '@/utils/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer : null,
    dialog : false
  },
  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer')
  },
  actions: {

  }
})
