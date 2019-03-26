import axios from 'axios'
import {router} from '../routes'

const DOMAIN = 'http://172.26.2.38:8000' // 백엔드에서 받아야 할 URL

const UNAUTHORIZED = 401
const onUnauthrorized = () => {
  router.push('/') // 토큰 없을경우 리다이렉트 
}

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
	})
		.then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if(status === UNAUTHORIZED) onUnauthrorized()
      throw result.response
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}


/* Auth API */
export const auth = {
  register(user) {  // 회원가입
    return request('post','/register', user)
  },
  login(user_id, password) {  // 로그인
    return request('post', '/login', {user_id, password})
  }
}

export const testApi = {
  testApi(){
    return request('get','/test')
  }
}