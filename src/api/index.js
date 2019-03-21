import axios from 'axios'
import router from '../routes'

const DOMAIN = 'http://172.26.3.14:8000' // 백엔드에서 받아야 할 URL
const UNAUTHORIZED = 401
const onUnauthrorized = () => {
  router.push('/login') // 토큰 없을경우 리다이렉트 
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
      if(status === UNAUTHORIZED){
        return onUnauthrorized()
      }
      throw Error(result)
    })
}

export const board = {
  fetch(){
    return request('get','/boards')
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}