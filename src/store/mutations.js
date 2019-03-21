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
  LOGIN(state) {
    state.loading = true
    state.auth_error = null
  },
  LOGIN_SUCCESS(state, payload) {
    state.auth_error = null
    state.isLoggedIn = true
    state.loading = false
    state.currentUser = Object.assign({}, payload.user, {token: payload.access_token})
    localStorage.setItem("user", JSON.stringify(state.currentUser))
  },
  LOGIN_FAILED(state, payload) {
    state.loading = false
    state.auth_error = payload.error
  },
  LOGOUT(state){
    localStorage.removeItem("user")
    state.isLoggedIn = false
    state.currentUser = null
  }

}

export default mutations
