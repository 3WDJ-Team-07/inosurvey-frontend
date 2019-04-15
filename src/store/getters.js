const getters = {
  isAuth(state) { 
    return !!state.token
  },
  isSuccessFormData(state) { 
    return state.isSuccessFormData
  },
  formLength(state) {
    return typeof state.form.list !== 'undefined' && typeof state.form.list === 'object' &&Object.keys(state.form.list).length
  }
}

export default getters