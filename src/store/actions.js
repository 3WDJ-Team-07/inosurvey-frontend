import * as api from '../api'
const ACCEPTED =202
const actions = {
  // 회원가입 Action
  REGISTER(_, user) {
    return api.auth.register(user)
    .then(response => {
      // 프로미스로 받아서 성공하면 리다이렉트 로직
      this.$router.push({name:'home'})  
    })
    .catch(error => {
      console.log(error)
    })
  },

  // 로그인 Action
  LOGIN(context, {user_id, password}) {
    return api.auth.login(user_id, password)
    .then(response => {
      context.commit('LOGIN', response.access_token)
    })
  },

  // 유저 정보 
  USER_INFO(context, { access_token: token }) {
    return api.userInformation.userInformation({ access_token: token })
    .then(response => {
      context.commit('USER_INFO', response.user)
    })
  },

  // 전체폼 데이터
  INPUT_FORM_DATA(context) {
    return api.surveyForm.inputForm()
    .then(response => {
      context.commit('INPUT_FORM', response)
    })
  },
  
  // 질문데이터 넣기
  INPUT_QUESTION(context, {index,type,question_title,question_image,question_bank,items}) {
    return api.surveyForm.inputQuestion(index,type,question_title,question_image,question_bank,items)
    .then(response => {
      response.index = index
      response.type = type
      response.question_title = question_title
      response.question_image = question_image
      response.question_bank = question_bank
      response.items = items
      context.commit('INPUT_QUESTION', response)
    })
  },

  // 질문은행 Action
  FETCH_QUESTION_BANK(context) {
    context.state.loading = true
    return api.questionBank.fetch()
    .then(data => {
      context.commit('FETCH_QUESTION_BANK',data)
      context.state.loading = false
    })
  },

  // 완성된 설문폼 보내기
  REQUEST_SURVEY_FORM({state}) {
    return api.formRequest.requestFormData(state.form)
  },

  REQUEST_IMG_SELECT(_, fileData) {
    return api.surveyForm.imageSelect(fileData)
  },

  // 나의 설문조사 조회
  FETCH_MY_SURVEY_FORM_TEST(context) {
    context.state.loading = true
    return api.mySurvey.mySurveyFormTest()
    .then(response => {
      context.commit('FETCH_MY_SURVEY_FORM', response)
      context.state.loading = false
    })
  },

  FETCH_MY_SURVEY_FORM(context, {id: user_id}) {
    context.state.loading = true
    return api.mySurvey.mySurveyForm({ id: user_id })
    .then(response => {
      console.log(response)
      for (let index = 0; index < response.serveies.length; index++) {
        response.serveies[index].created_at = response.serveies[index].created_at.substring(10,0)
        if(response.serveies[index].closed_at){
          response.serveies[index].closed_at = response.serveies[index].closed_at.substring(10,0)
        }
      }
      context.commit('FETCH_MY_SURVEY_FORM', response.serveies)
      context.state.loading = false
    })
  },

  // Amazon s3 image remove
  REQUEST_IMG_URL(_, {file: requestUrl}) {
    return api.formRequest.requestImgUrl({ file: requestUrl })
    .then(response => {
      console.log(response)
    })
  },

  ADDDONATION(context, data, config){
    return api.donation.addDonation(data, config)
    .then(() => {
      context.dispatch('FETCH_DONATION')
    })
  }, 

  FETCH_DONATION_TEST(context) {
    context.state.loading = true
    api.donation.donationFetch()
    .then(response => {
      context.commit('FETCH_DONATION', response)
      context.state.loading = false
    })
  },

  FETCH_DONATION(context) {
    context.state.loading = true
    api.donation.donationCard()
    .then(response => {
      context.commit('FETCH_DONATION',response.donation)
      context.state.loading = false
    })
  },

  // REQUEST_DONATE(_, { user_id, donation_id, ino }) {
  //   api.donation.requestDonate(user_id, donation_id, ino)
  //   .then(response => {
  //     console.log(response)
  //   })
  // },

  REQUEST_DONATE(_, { user_id, donation_id, ino }) {
    return api.donation.requestDonate(user_id, donation_id, ino)
  },

  FETCH_MARKET(context, {id: user_id}){
    context.state.loading = true
    api.market.marketCard({id: user_id})
    .then(response => {
      context.commit('FETCH_MARKET', response.list)
      context.state.loading = false
    })
  },

  // 판매할 설문 리스트
  FETCH_SELL(context, {id: user_id}){
    context.state.loading = true
    api.market.marketSell({id: user_id})
    .then(response => {
      context.commit('FETCH_SELL',response.list)
      context.state.loading = false
    })
  },

  // 설문 업뎃
  UPDATE_MARKET(context, {id, user_id, price}) {
    api.market.updateMarketCard(id,user_id,price)
    .then(() => {
      context.dispatch('FETCH_MARKET', {id: user_id})
      context.dispatch('FETCH_SELL', {id: user_id})
    })
  },

  // 설문 구매하기
  MARKET_PURCHASE(_, {id, user_id}) {
    return api.market.marketPurchase(id, user_id)
  },
}

export default actions