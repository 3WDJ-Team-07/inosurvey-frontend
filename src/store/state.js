
const state = {
  drawer : null,                // 사이드 네비게이션
  isLoginDialog : false,        // 로그인 모달 
  isSurveyDialog: false,        // 서베이 타이틀 모달
  isQuestionBank: false,        // 설문은행 모달
  isPaymentDialog: false,       // 결제 모달 
  formTitle: "" || "무제",      // 서베이타이틀
  formIntro: "" || "소개글을 입력하세요",    // 서베이인트로
  token: null,                  // 유저 토큰
  loading: false,               // 로딩
  isSuccessFormData: true,      // 저장하면버튼활성화
  banks: [],                    // 설문은행
  form: [],                     // 폼
  isSaleDialog:false,
  isPurchaseDialog:false,
}

export default state
