const getters = {
  isAuth(state){ 
    console.log(!!state.token)
    return !!state.token
  },
}

export default getters