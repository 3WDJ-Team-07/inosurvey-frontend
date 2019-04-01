const getters = {
  isAuth(state){  // test
    console.log(!!state.token)
    return !!state.token
  },
}

export default getters