const getters = {
  loggedIn(state){
    return state.token !== null
  }
}

export default getters