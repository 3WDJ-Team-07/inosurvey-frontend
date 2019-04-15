const getters = {
<<<<<<< HEAD
  isAuth(state) { 
    return !!state.token
  },
  isSuccessFormData(state) { 
    return state.isSuccessFormData
  },
  formLength(state) {
    return typeof state.form.list !== 'undefined' && typeof state.form.list === 'object' &&Object.keys(state.form.list).length
=======
  isAuth(state){  // test
    return !!state.token
>>>>>>> 5cb614f28070daba654a5095bd4b1ba712ed83f1
  }
}

export default getters