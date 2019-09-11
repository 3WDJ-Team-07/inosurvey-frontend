import axios    from 'axios'
import router   from '../routes/index'

//54.180.29.63
const DOMAIN = 'http://54.180.29.63'
const UNAUTHORIZED = 401


// 토큰 없을경우 리다이렉트 
// const onUnauthrorized = () => { router.push('/') }

const serverRequest = (method, url, data) => {
  return axios({ method, url: DOMAIN+url, data })
	.then(result => result.data)
  .catch(result => {
    const {status} = result.response
    if(status===UNAUTHORIZED) {
      console.log('401 Error')
    } 
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
    return serverRequest('post','/api/user/login', {user_id, password})
  }
}

// 유저 정보를 받는 Api
export const userInformation = {
  userInformation({ access_token: token }) {
    return serverRequest('post','/api/user/check', { access_token: token })
  },
  userCoin(id) {
    return serverRequest('post','/api/user/wallet', id)
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
  requestFormData(form) {
    return serverRequest('post','/api/survey/create', form)
  },
  requestImgUrl(img) {
    return serverRequest('post','/api/survey/image-delete', {img})
  }
}

// 유저아이디 값을 보내서 해당유저가 만든 설문조사 조회
export const mySurvey = {
  mySurveyFormTest() {
    return localRequest('get','/static/allform.json')
  },
  mySurveyForm(id) {
    return serverRequest('post', '/api/user/surveys', id)
  },
  mySurveyComplete(id) {
    return serverRequest('post', '/api/survey/abort',id)
  },
  mySurveyIsSale(id) {
    return serverRequest('post','/api/user/issale',id)
  }
}

export const donation = {
  // 기부 - 모금함 정보 불러오기
  donationCard() {
    return serverRequest('get','/api/donation/index')
  },
  fetchListItem(id) {
    return serverRequest('post','/api/donation/show', id)
  },
  requestDonate(user_id, donation_id, ino) {
    return serverRequest('post','/api/donation/donate',{
      user_id, donation_id, ino 
    })
  },
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
  marketCard(id){
    return serverRequest('post','/api/market/index', id)
  },
  // 설문마켓 - 판매중인 설문 각각의 정보
  FetchListDetail(id) {
    return serverRequest('post','/api/market/show',id)
  },
  // 설문마켓 - 설문 구매
  marketPurchase(id, user_id){
    return serverRequest('post','/api/market/purchase',{ id, user_id })
  },
  // 설문마켓 - 판매할 설문 리스트
  marketSell(id){
    return serverRequest('post','/api/market/sellable-forms',id)
  },
  // 설문마켓 - 설문 판매
  updateMarketCard(id,user_id,price){
    return serverRequest('post','/api/market/sale',{id,user_id,price})
  },
  // 설문 마켓 - 판매할 설문 각각의 정보
  FetchListSell(id) {
    return serverRequest('post','/api/market/sellable-show', id)
  }
}

export const analysis = {
  Fetchanalysis(form_id) {
    return serverRequest('post','/api/analysis/index',form_id)
  },
  FetchTargetAnalyis(target) {
    return serverRequest('post','/api/analysis/target-result',target)
  }
}

export const mypage = {
  FetchSurveyResponse(user_id) {
    return serverRequest('post', '/api/user/wallet/receipt/survey/response', user_id)
  },
  FetchSurveyRequest(user_id) {
    return serverRequest('post', '/api/user/wallet/receipt/survey/request', user_id)
  },
  FetchSurveyBuy(user_id) {
    return serverRequest('post', '/api/user/wallet/receipt/survey/buy', user_id)
  },
  FetchSurveySell(user_id) {
    return serverRequest('post', '/api/user/wallet/receipt/survey/sell', user_id)
  },
  FetchDonationDonate(user_id) {
    return serverRequest('post', '/api/user/wallet/receipt/donation/donate', user_id)
  },
  FetchDonationRequest(user_id) {
    return serverRequest('post', '/api/user/wallet/receipt/donation/request', user_id)
  },
  FetchAllHistory(user_id) {
    return serverRequest('post', '/api/user/wallet/receipt/all', user_id)
  },
  FetchSurveyForm(form_id) {
    return serverRequest('post', '/api/user/survey', form_id)
  }
}