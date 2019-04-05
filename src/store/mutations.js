import { set, toggle } from '@/utils/vuex'
// import { setAuthInHeader } from '../api/index'
import axios from 'axios'

const mutations = {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),

  SET_IS_LOGIN(state, toggle){
    state.isLoginDialog = toggle
  },
  SET_IS_ADD_SURVEY(state, toggle) {
    state.isSurveyDialog = toggle
  },
  SET_IS_PAYMENT_SURVEY(state, toggle) {
    state.isPaymentDialog = toggle
  },
  SET_IS_QUESTION_BANK(state, toggle ){
    state.isQuestionBank = toggle
  },
  UPDATE_TITLE(state, title) {
    state.surveyTitle = title
  },
  SET_BOARDS(state, boards) {
    state.boards = boards
  },
  FETCH_QUESTION_BANK(state, banks) {
    state.banks = banks
  },
  LOGIN(state, token) {
    // token정보가 없으면 바로 리턴 
    if(!token) return  
    state.token = token
    localStorage.setItem('token', token)
    //setAuthInHeader(token)
    if(token){
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  },
  LOGOUT(state) {
    state.token = null 
    localStorage.removeItem('token')
    //setAuthInHeader(null)
    axios.defaults.headers.common['Authorization'] = null
  }
}

export default mutations
