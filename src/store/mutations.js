import { set, toggle } from '@/utils/vuex'
import { setAuthInHeader } from '../api'

const mutations = {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),

  SET_IS_LOGIN(state, toggle){
    state.isLoginDialog = toggle
  },
  SET_IS_ADD_SURVEY(state, toggle) {
    state.isSurveyDialog = toggle
  },
  SET_IS_REGISTER_NULL(state, toggle) {
    state.isRegisterNullDialog = toggle
  },
  SET_IS_PAYMENT_SURVEY(state, toggle) {
    state.isPaymentDialog = toggle
  },
  UPDATE_TITLE(state, title) {
    state.surveyTitle = title
  },
  LOGIN(state, token) {
    if(!token) return  // token정보가 없으면 바로 리턴 
    state.token = token
    localStorage.setItem('token', token)
    setAuthInHeader(token)  // 리퀘스트 헤더 세팅
  },
  LOGOUT(state) {
    state.token = null 
    delete localStorage.token
    setAuthInHeader(null)
  }
}

export default mutations
