import Vue from 'vue'
import axios from 'axios'
import { set, toggle } from '@/utils/vuex'
// import { setAuthInHeader } from '../api/index'

const mutations = {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),

  /* auth */
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

  /* userInfomation */
  USER_INFO(state, response) {
    state.userinfo = response
    console.log(state.userinfo)
  },

  /* Modal */
  SET_IS_LOGIN(state, toggle) {
    state.isLoginDialog = toggle
  },
  SET_IS_ADD_SURVEY(state, toggle) {
    state.isSurveyDialog = toggle
  },
  SET_IS_PAYMENT_SURVEY(state, toggle) {
    state.isPaymentDialog = toggle
  },
  SET_IS_QUESTION_BANK(state, toggle ) {
    state.isQuestionBank = toggle
  },
  SET_IS_SURVEY_SALE(state, toggle) {
    state.isSaleDialog = toggle
  },
  SET_IS_SURVEY_PURCHASE(state, toggle) {
    state.isPurchaseDialog = toggle
  },
  SET_IS_DONATE(state, toggle) {
    state.isDonateDialog = toggle
  },
  SET_IS_DONATOR(state, toggle) {
    state.isDonatorDialog = toggle
  },
  SET_IS_TARGET(state, toggle) {
    state.isTargetDialog = toggle
  },

  /* Form input */
  FORM_DATE_REQUEST(state) {
    state.isSuccessFormData = true
  },
  UPDATE_TITLE(state, title) {
    state.formTitle = title
  },
  UPDATE_TESTNUMBER(state, testNumber) {
    state.testNumber = testNumber
  },
  UPDATE_INTRO(state, intro) {
    state.formIntro = intro
  },
  INPUT_FORM(state, form) {
    state.form = form
  },
  INPUT_QUESTION(state, question) {
    state.form.list.push(question)
  },
  INPUT_ITEMS(state, payload) {
    state.form.list[payload.questionIndex-1].items.push(payload.items)
  },
  INPUT_FORM_HEAD(state, {formTitle,formIntro,bgcolor,answer}) {
    state.form.survey_title = formTitle
    state.form.survey_description = formIntro
    state.form.bgcolor = bgcolor
    state.form.list[0].answer = answer
  },
  INPUT_TESTNUMBER(state, testNumber) {
    state.form.list.testOk = testNumber
  },
  INPUT_FORM_TARGET(state, {gender,age,job,responseNumber}) {
    state.form.target.gender = gender
    state.form.target.age = age
    state.form.target.job = job
    state.form.target.responseNumber = responseNumber
  },
  INPUT_FORM_S3IMG(state, {imgUrl,questionIndex,itemIndex}) {
    state.form.list[questionIndex-1].items[itemIndex].image = imgUrl
  },
  INPUT_SURVEY_DEADLINE(state, {closed_at}){
    state.form.closed_at = closed_at
  },
  INPUT_SURVEY_SALE_BOOLEAN(state, {is_sale}){
    state.form.is_sale = is_sale
  },
  INPUT_SURVEY_USER_ID(state, {user_id}){
    state.form.user_id = user_id
  },
  SET_QUESTION(state, QuestionList){
    state.form.push(QuestionList)
  },

  /* Item remove */
  REMOVE_ITEM(state, {questionIndex, itemIndex}) {
    Vue.delete(state.form.list[questionIndex-1].items, itemIndex)
  },
  REMOVE_QUESTION(state, index) {
    state.form.list.splice(index,1)
  },

  /* surveybank fetch */
  FETCH_QUESTION_BANK(state, banks) {
    state.banks = banks
  },

  /* mysurvey fetch */
  FETCH_MY_SURVEY_FORM(state, myform) {
    state.mySurveyForm = myform
  },

  /* donation fetch */
  FETCH_DONATION(state, data){
    state.donationBox = data
  },

  /* market fetch */
  FETCH_MARKET(state, data){
    state.saleSurvey = data
  },

  FETCH_SELL(state, data){
    state.sellSurvey = data
  }
}

export default mutations
