
const state = {
  userinfo: {},                 // 유저객체
  drawer: null,                 // 사이드 네비게이션
  isLoginDialog : false,        // 로그인 모달 
  isSurveyDialog: false,        // 설문제목 모달
  isQuestionBank: false,        // 설문은행 모달
  isPaymentDialog: false,       // 결제 모달 
  formTitle: "" || "무제",      // 설문제목
  formIntro: "" || "소개글을 입력하세요", // 설명글
  token: null,                  // 유저 토큰
  loading: false,               // 로딩
  isSuccessFormData: false,     // 저장하면버튼활성화
  banks: [],                    // 설문은행
  form: [],                     // 설문폼
  donationBox: [],              // 모금함 정보
  mySurveyForm: [],             // 내작성한 모든설문조사 
  isSaleDialog: false,
  isPurchaseDialog: false
}

export default state
