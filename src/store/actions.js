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
  
  // 설문양식 Action
  FETCH_BOARDS({commit}){
    return api.board.fetch()
    .then(data => {
      commit('SET_BOARDS', data.list)
    })
  },
  // 설문양식 추가 Action
  ADD_BOARD (_, {title}) {
    return api.board.create(title)
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