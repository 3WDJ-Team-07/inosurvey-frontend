
const state = {
  drawer : null,                // 사이드 네비게이션
  isLoginDialog : false,        // 로그인 모달 
  isSurveyDialog: false,        // 서베이 타이틀 모달
  isQuestionBank: false,        // 설문은행 모달
  isPaymentDialog: false,       // 결제 모달 
  surveyTitle: "" || "무제",              // 서베이 타이틀
  token: null,                  // 유저 토큰
  loading: false,               // 로딩
  boards: [],                   // 보드목록
  banks: []                     // 설문은행
}

export default state