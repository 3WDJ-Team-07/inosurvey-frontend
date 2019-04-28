import * as api from '../api'
import axios from 'axios'
import { router } from '../routes';

const actions = {
  // 회원가입 Action
  REGISTER(_, user) {
    return api.auth.register(user)
    .then(response => {
      // 프로미스로 받아서 성공하면 리다이렉트 로직
      this.$router.push({name:'home'})  
    })
    .catch(error => {
      console.log(error)
    })
  },

  // 로그인 Action
  LOGIN(context, {user_id, password}) {
    return api.auth.login(user_id, password)
    .then(response => {
      context.commit('LOGIN', response.access_token)
    })
  },

  // 유저 정보 
  USER_INFO(context, { access_token: token }) {
    return api.userInformation.userInformation({ access_token: token })
    .then(response => {
      context.commit('USER_INFO', response.user)
    })
  },

  // 전체폼 데이터
  INPUT_FORM_DATA(context) {
    return api.surveyForm.inputForm()
    .then(response => {
      context.commit('INPUT_FORM', response)
    })
  },
  
  // 질문데이터 넣기
  INPUT_QUESTION(context, {index,type,question_title,question_image,question_bank,items}) {
    return api.surveyForm.inputQuestion(index,type,question_title,question_image,question_bank,items)
    .then(response => {
      response.index = index
      response.type = type
      response.question_title = question_title
      response.question_image = question_image
      response.question_bank = question_bank
      response.items = items
      context.commit('INPUT_QUESTION', response)
    })
  },

  // 질문은행 Action
  FETCH_QUESTION_BANK(context) {
    context.state.loading = true
    return api.questionBank.fetch()
    .then(data => {
      context.commit('FETCH_QUESTION_BANK',data)
      context.state.loading = false
    })
  },

  // 완성된 설문폼 보내기
  REQUEST_SURVEY_FORM({state}) {
    return api.formRequest.requestFormData(state.form)
  },

  REQUEST_IMG_SELECT(_, fileData) {
    return api.surveyForm.imageSelect(fileData)
  },

  // 나의 설문조사 조회
  FETCH_MY_SURVEY_FORM_TEST(context) {
    context.state.loading = true
    return api.mySurvey.mySurveyFormTest()
    .then(response => {
      context.commit('FETCH_MY_SURVEY_FORM', response)
      context.state.loading = false
    })
  },

  FETCH_MY_SURVEY_FORM(context, {id: user_id}) {
    context.state.loading = true
    return api.mySurvey.mySurveyForm({ id: user_id })
    .then(response => {
      context.commit('FETCH_MY_SURVEY_FORM', response.serveies)
      context.state.loading = false
    })
  },

  // Amazon s3 image remove
  REQUEST_IMG_URL(_, {file: requestUrl}) {
    return api.formRequest.requestImgUrl({ file: requestUrl })
    .then(response => {
      console.log(response)
    })
  },

  ADDDONATION(_,box){
    axios.post('http://172.26.2.188:8000/api/donation/create',box,
    box,
    {
      headers:{ 'Content-Type': 'multipart/form-data' } // 이미지 보낼때
    })
  }, 

  FETCH_DONATION_TEST(context) {
    context.state.loading = true
    api.donation.donationFetch()
    .then(response => {
      context.commit('FETCH_DONATION', response)
      context.state.loading = false
    })
  },

  FETCH_DONATION(context) {
    context.state.loading = true
    api.donation.donationCard()
    .then(response => {
      context.commit('FETCH_DONATION',response.donation)
      context.state.loading = false
    })
  },

  FETCH_MARKET(context){
    context.state.loading = true
    api.market.marketCard()
    .then(response => {
      context.commit('FETCH_MARKET',response.surveies)
      context.state.loading = false
    })
  },
}

export default actions