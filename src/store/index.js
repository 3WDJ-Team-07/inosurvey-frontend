import Vue       from 'vue'
import Vuex      from 'vuex'
import state     from './state'
import getters   from './getters'
import mutations from './mutations'
import actions   from './actions'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// 웹이 구동될때 토큰이 있는지 없는지 체크 
const {token} = localStorage 
store.commit('LOGIN', token)

export default store