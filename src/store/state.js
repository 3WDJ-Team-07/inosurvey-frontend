const state = {
  drawer : null,
  token : localStorage.getItem('access_token') || null,
  isLoginDialog : false,
  isRequestDialog: false,
  isResponseDialog: false,
  isSurveyDialog: false,
  surveyTitle: "" 
}

export default state