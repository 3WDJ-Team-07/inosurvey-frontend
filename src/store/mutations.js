import { set, toggle } from '@/utils/vuex'

const mutations = {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),
  SET_IS_LOGIN(state, toggle){
    state.isLoginDialog = toggle
  },
  SET_IS_REQUEST_DIALOG(state, toggle){
    state.isRequestDialog = toggle
  },
  SET_IS_RESPONSE_DIALOG(state, toggle){
    state.isResponseDialog = toggle
  },
  SET_IS_ADD_SURVEY(state, toggle){
    state.isSurveyDialog = toggle
  }
}

export default mutations
