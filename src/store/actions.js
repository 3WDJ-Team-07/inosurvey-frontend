import axios from "axios";

const actions = {
  LOGIN(context) {
    context.commit("LOGIN")
  },
  REGISTER(context, user) {
    axios.post('/register', user)
      .then(response => {
        console.log(response)
        this.$router.push({name:'home'})  // 프로미스로 받아서 성공하면 리다이렉트 로직
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default actions