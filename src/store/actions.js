import * as api from '../api'
import axios from 'axios'
import { router } from '../routes';

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
  ADDDONATION(_,box){
    axios.post('http://172.26.3.29:8000/api/donation/create',box,
    box,
    {
      headers:{
        'Content-Type': 'multipart/form-data'
        // 이미지 보낼때
      }
    })
    .then((response) =>{ 
      console.log(response);
      
    })
  },
  FETCH_DONATION(context){
    api.donation.donationCard()
      .then(response => {
        context.commit('FETCH_DONATION',response)
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default actions