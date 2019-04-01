import * as api from '../api'

const actions = {
  REGISTER(context, user) {
    return api.auth.register(user)
      .then(response => {
        console.log(response)
        this.$router.push({name:'home'})  // 프로미스로 받아서 성공하면 리다이렉트 로직
        //context.commit('SET_IS_ADD_SURVEY', true)  // 회원가입 할시 로그인창 호출
      })
      .catch(error => {
        console.log(error)
      })
  },
  LOGIN(context, {email, password}) {
    return api.auth.login(email, password)
      .then(response => {
        context.commit('LOGIN', response.accessToken)
      })
  },
  TEST(){
    api.testApi.testApi()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_BOARDS({commit}){
    return api.board.fetch()
    .then(data => {
      commit('SET_BOARDS', data.list)
    })
  },
  ADD_BOARD (_, {title}) {
    return api.board.create(title)
  },
}

export default actions