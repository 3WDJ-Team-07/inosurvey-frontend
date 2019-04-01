import axios    from 'axios'
import router   from '../routes/index'

const DOMAIN = 'http://localhost:3000' // 백엔드에서 받아야 할 URL

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
    })
}

export const setAuthInHeader = token => {  // 토큰정보를 헤더에 담아 넘겨주기위해 선언
  axios.defaults.headers.common['Authorization'] = token ? token : null;
}

/* Auth API */
export const auth = {
  register(user) {  // 회원가입
    return request('post','/register', user)
  },
  login(email, password) {  // 로그인
    return request('post', '/login', {email, password})
  }
}

export const board = {
  fetch(){
    return request('get', '/boards')
  },
  create(title) {
    return request('post', '/boards', {title})
  }
}

export const testApi = {
  testApi(){
    return request('get','/test')
  }
}