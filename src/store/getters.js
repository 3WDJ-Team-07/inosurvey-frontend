const getters = {
  isAuth(state){ 
    console.log(!!state.token)
    return !!state.token
  },
  isSuccessFormData(state){ 
    return state.isSuccessFormData
  },
}

export default getters