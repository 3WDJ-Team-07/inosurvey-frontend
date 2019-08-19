
const state = {
  userinfo: {},                 // 유저객체
  drawer: null,                 // 사이드 네비게이션
  mypageDrawer: null,           // 마이페이지 네비게이션
  isLoginDialog : false,        // 로그인 모달 
  isSurveyDialog: false,        // 설문제목 모달
  isQuestionBank: false,        // 설문은행 모달
  isPaymentDialog: false,       // 결제 모달 
  isDonateDialog: false,        // 기부 모달 
  isDonatorDialog: false,       // 기부자 모달
  isTargetDialog: false,        // 타겟분석 모달
  formTitle: "" || "無題",      // 설문제목
  formIntro: "" || "紹介文をご記入ください。", // 설명글
  token: null,                  // 유저 토큰
  loading: false,               // 로딩
  isSuccessFormData: false,     // 저장하면버튼활성화
  banks: [],                    // 설문은행
  form: [],                     // 설문폼
  donationBox: [],              // 모금함 정보
  mySurveyForm: [],             // 내작성한 모든설문조사 
  saleSurvey:[],                // 마켓카드정보
  testNumber: null,
  sellSurvey:[],
  isSaleDialog: false,
  isPurchaseDialog: false
}

export default state
