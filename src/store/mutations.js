import { set, toggle } from '@/utils/vuex'

const mutations = {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),
  SET_IS_LOGIN(state, toggle){
    state.isLoginDialog = toggle
  },
  SET_IS_REQUEST_DIALOG(state, toggle) {
    state.isRequestDialog = toggle
  },
  SET_IS_RESPONSE_DIALOG(state, toggle) {
    state.isResponseDialog = toggle
  },
  SET_IS_ADD_SURVEY(state, toggle) {
    state.isSurveyDialog = toggle
  },
  UPDATE_TITLE(state, title) {
    state.surveyTitle = title
  },
  RETRIEVE_TOKEN(state, token) {
    state.token = token
  },
  DESTROY_TOKEN(state){
    state.token = null
  }
}

export default mutations
