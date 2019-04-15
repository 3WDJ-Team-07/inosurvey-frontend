import { set, toggle } from '@/utils/vuex'
// import { setAuthInHeader } from '../api/index'
import axios from 'axios'
import Vue from 'vue'

const mutations = {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),

  LOGIN(state, token) {
    // token정보가 없으면 바로 리턴 
    if(!token) return  
    state.token = token
    localStorage.setItem('token', token)
    if(token){ axios.defaults.headers.common['Authorization'] = `Bearer ${token}` }
    //setAuthInHeader(token)
  },
  LOGOUT(state) {
    state.token = null 
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null
    //setAuthInHeader(null)
  },

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
  SET_IS_SURVEY_SALE(state, toggle){
    state.isSaleDialog = toggle
  },
  SET_IS_SURVEY_PURCHASE(state, toggle){
    state.isPurchaseDialog = toggle
  },
  FORM_DATE_REQUEST(state){
    state.isSuccessFormData = false
  },
  UPDATE_TITLE(state, title) {
    state.formTitle = title
  },
  UPDATE_INTRO(state, intro) {
    state.formIntro = intro
  },
  INPUT_FORM(state, form){
    state.form = form
  },
  INPUT_QUESTION(state, question){
    state.form.list.push(question)
  },
  INPUT_ITEMS(state, payload){
    state.form.list[payload.questionIndex-1].items.push(payload.items)
  },
  INPUT_FORM_HEAD(state, {formTitle,formIntro,bgcolor}){
    state.form.survey_title = formTitle
    state.form.survey_description = formIntro
    state.form.bgcolor = bgcolor
  },
  INPUT_FORM_TARGET(state, {gender,age,job,responseNumber}){
    state.form.target.gender = gender
    state.form.target.age = age
    state.form.target.job = job
    state.form.target.responseNumber = responseNumber
  },
  INPUT_FORM_S3IMG(state, {imgUrl,questionIndex,itemIndex}){
    state.form.list[questionIndex-1].items[itemIndex].image = imgUrl
  },
  REMOVE_ITEM(state, {questionIndex, itemIndex}){
    state.form.list[questionIndex-1].items.splice(itemIndex-1,1)
  },
  REMOVE_ITEM(state, {questionIndex, itemIndex}){
    Vue.delete(state.form.list[questionIndex-1].items, itemIndex)
  },
  // 새로운값으로 설정
  SET_QUESTION(state, QuestionList){
    state.form.push(QuestionList)
  },
  REMOVE_QUESTION(state, index){
    state.form.list.splice(index,1)
  },
  FETCH_QUESTION_BANK(state, banks) {
    state.banks = banks
  },
}

export default mutations
