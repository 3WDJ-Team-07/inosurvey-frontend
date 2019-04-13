import * as api from '../api'

const actions = {
  // 회원가입 Action
  REGISTER(_, user) {
    return api.auth.register(user)
      .then(response => {
        console.log(response)
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
  
  // // 설문리스트를 추가 ACTION
  // ADD_QUESTIONS(context,{type,title,item}){
  //   return api.questions.addQuestion()
  //   .then(response => {
  //     var QuestionList = response
  //     QuestionList.type = type
  //     QuestionList.title = title
  //     QuestionList.item = item
  //     context.commit('SET_QUESTION', QuestionList)
  //   })
  // },

  // INPUT_FORM_DATA(context,{type,title,item}){
  //   return api.questions.addQuestion(type,title,item)
  //   .then(response => {
  //     context.commit('INPUT_FORM', response)
  //   })
  // },

  // 전체폼데이터
  INPUT_FORM_DATA(context){
    return api.surveyForm.inputForm()
    .then(response => {
      context.commit('INPUT_FORM', response)
    })
  },
  
  // 질문데이터 넣기
  INPUT_QUESTION(context, {index,type,question_title,question_image,question_bank,items}){
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

  // INPUT_ITEMS(context, payload){
  //   return api.surveyForm.inputItem(payload)
  //   .then(response => {
  //     response.items = payload.items
  //     context.commit('INPUT_ITEMS', payload)
  //   })
  // },

  INPUT_ITEMS(context, payload){
    return api.surveyForm.inputItem(payload)
    .then(response => {
      console.log(payload)
      console.log(response)
      response.items = payload.items
      context.commit('INPUT_ITEMS', payload)
    })
  },

  // 질문은행 Action
  FETCH_QUESTION_BANK({commit}){
    return api.questionBank.fetch()
    .then(data => {
      commit('FETCH_QUESTION_BANK',data)
    })
  },

  // 테스트 Action
  TEST(){
    api.testApi.testApi()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
}

export default actions