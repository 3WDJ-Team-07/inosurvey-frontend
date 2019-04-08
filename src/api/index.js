import axios    from 'axios'
import router   from '../routes/index'

const DOMAIN = 'http://172.26.3.28:8000' // 백엔드에서 받아야 할 URL
const UNAUTHORIZED = 401

// 토큰 없을경우 리다이렉트 
const onUnauthrorized = () => {
  router.push('/') 
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

// 토큰정보를 헤더에 담아 넘겨주기위해 선언
export const setAuthInHeader = token => {  
  axios.defaults.headers.common['Authorization'] = token ? token : null;
}

// 유저 가입에 필요한 Api
export const auth = {
  register(user) {  // 회원가입
    return request('post','/api/user/register', user)
  },
  login(user_id, password) {  // 로그인
    return request('post', '/api/user/login', {user_id, password})
  }
}

// 나중에 설문양식을 받아오는 Api
export const board = {
  fetch(){
    return request('get', '/boards')
  },
  create(type) {
    return request('post', '/boards',{type})
  }
}

// 질문은행 Api
export const questionBank = {
  fetch(){
    return request('get','/api/survey/questionBank')
  }
}

// 백엔드 테스트 Api
export const testApi = {
  testApi(){
    return request('get','/test')
  }
}