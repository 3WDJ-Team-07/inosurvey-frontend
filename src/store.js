import Vue from 'vue'
import Vuex from 'vuex'
import { set, toggle } from '@/utils/vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  state: {
    drawer : null,
    dialog : false,
    RequestDialog: false,
    ResponseDialog: false
  },
  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer'),
    LoginDialogChange(state){
      state.dialog = !state.dialog
      return state.dialog
    },
    ReqeustDialogChange(state){
      state.RequestDialog = !state.RequestDialog
      return state.RequestDialog
    },
    ResponseDialogChange(state){
      state.ResponseDialog = !state.ResponseDialog
      return state.ResponseDialog
    }
  },
  actions: {

  }
})
