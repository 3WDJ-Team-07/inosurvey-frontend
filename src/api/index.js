import axios    from 'axios'
import router   from '../routes/index'

const DOMAIN = 'http://172.26.2.186:8000'
const UNAUTHORIZED = 401

// 토큰 없을경우 리다이렉트 
const onUnauthrorized = () => { router.push('/') }

const serverRequest = (method, url, data) => {
  return axios({ method, url: DOMAIN+url, data })
	.then(result => result.data)
  .catch(result => {
    const {status} = result.response
    if(status===UNAUTHORIZED) onUnauthrorized()
  })
}

const localRequest = (method, url, data) => {
  return axios({ method, url, data })
  .then(result => result.data)
}

// 토큰정보를 헤더에 담아 넘겨주기위해 선언
export const setAuthInHeader = token => {  
  axios.defaults.headers.common['Authorization'] = token ? token : null;
}

// 유저 가입에 필요한 Api
export const auth = {
  register(user) {
    return serverRequest('post','/api/user/register', user)
  },
  login(user_id, password) {
    return serverRequest('post', '/api/user/login', {user_id, password})
  }
}

// 유저 정보를 받는 Api
export const userInformation = {
  userInformation({ access_token: token }) {
    return serverRequest('post','/api/user/check', { access_token: token })
  }
}

// 설문양식을 받아오는 Api
export const surveyForm = {
  inputForm() {
    return localRequest('get', '/static/form.json')
  },
  inputQuestion(index,type,question_title,question_image,question_bank,items) {
    return localRequest('get', '/static/question.json', {
      index,type,question_title,question_image,question_bank,items
    })
  },
  inputItem(payload) {
    return localRequest('get','/static/question.json',payload)
  },
  imageSelect(fileData) {
    return serverRequest('post','/api/survey/image-data',fileData)
  }
}

// 질문은행 Api
export const questionBank = {
  fetch() {
    return serverRequest('get','/api/survey/question-bank')
  }
}

// 설문폼 백엔드 등록 
export const formRequest = {
  requestFormData(form, user_id) {
    return serverRequest('post','/api/survey/create', {form, user_id})
  },
  requestImgUrl(img) {
    return serverRequest('post','/api/survey/image-delete', img)
  }
}

// 유저아이디 값을 보내서 해당유저가 만든 설문조사 조회
export const mySurvey = {
  mySurveyFormTest() {
    return localRequest('get','/static/allform.json')
  },
  mySurveyForm(id) {
    return serverRequest('post', '/api/user/user-surveies', id)
  }
}


export const donation = {
  // 기부 - 모금함 정보 불러오기
  donationCard() {
    return serverRequest('get','/api/donation/index')
  },
  // 기부 - 모금함 등록
  addDonation(data, config){
    return axios({
      method: 'post',
      url: `${DOMAIN}/api/donation/create`,
      data: data,
      config: config
    }).then(response => response.data)
    .catch(error => {
      console.log(error)
    })
  }
}

export const market = {
  // 설문마켓 - 판매중인 설문 정보 불러오기
  marketCard(){
    return serverRequest('get','/api/market/index')
  },
  // 설문마켓 - 판매할 설문 정보 불러오기
  marketSell(id){
    return serverRequest('post','/api/market/sellable-forms',id)
  },
  //설문마켓 - 설문 판매
  updateMarketCard(id){
    return serverRequest('post','/api/market/create',id)
  }
}