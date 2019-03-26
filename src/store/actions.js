import * as api from '../api'

const actions = {
  REGISTER(context, user) {
    api.auth.register(user)
      .then(response => {
        console.log(response)
        this.$router.push({name:'home'})  // 프로미스로 받아서 성공하면 리다이렉트 로직
        context.commit('SET_IS_ADD_SURVEY', true)  // 회원가입 할시 로그인창 호출
      })
      .catch(error => {
        console.log(error)
      })
  },
  LOGIN(context, {user_id, password}) {
    return api.auth.login(user_id, password)
      .then(({access_token}) => {
        context.commit('LOGIN', access_token)
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
  }
}

export default actions