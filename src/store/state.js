
const user = localStorage.getItem("user")

const state = {
  drawer : null,
  isLoginDialog : false,
  isRequestDialog: false,
  isResponseDialog: false,
  isSurveyDialog: false,
  surveyTitle: "",
  currentUser: user || null,
  isLoggedIn: !!user,
  loading: false,
  auth_error: null,
  customers: []
}

export default state