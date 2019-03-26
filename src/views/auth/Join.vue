/* 회원가입 페이지 */

<template>
  <v-fade-transition mode="out-in">
    <v-container fluid mt-5>
			<v-layout row wrap :key="$route.path">
        <v-flex xs12 sm12 md6 class="pa-5">
        	<v-card tile flat color="#FAFAFA" height="100vh">
          	<v-card-title>
            	<div class="display-2 font-weight-bold ml-4">회원가입</div>
          	</v-card-title>
          	<span class="ml-5 headline">INO-SURVEY와 함께해요!</span>
          	<v-card-text class="pa-5">
							<v-form @submit.prevent="register" id="check-register-form">
								<v-layout row wrap justify-center>
									<v-flex sm10 column>
										<v-text-field
											v-model="user_id"
											placeholder="아이디"
											ref="input" required>
										</v-text-field>
										<v-text-field
											v-model="password"
											placeholder="비밀번호"
											type="password"
											counter="25"
											:rules="passwordRules"
											required>
										</v-text-field>
										<v-text-field
											v-model="email"
											type="email"
											placeholder="이메일"
											:rules="emailRules"
											required>
										</v-text-field>
										<v-text-field
											v-model="name"
											required
											placeholder="이름">
										</v-text-field>
									</v-flex>
								</v-layout>
								<v-layout justify-center>
									<v-flex xs5>
										<v-btn-toggle v-model="sex_toggle">
											<v-btn 
												depressed flat value="male" 
												class="pl-4 pb-5 pr-4 pt-4 
												font-weight-bold title">
												<span>남성</span>
											</v-btn>
											<v-btn
												depressed flat value="female"
												class="pl-4 pb-5 pr-4 pt-4 
												font-weight-bold title">
												<span>여성</span>
											</v-btn>
										</v-btn-toggle>
									</v-flex>
									<v-flex xs5>
										<v-select
										v-model="age" class="mr-3"
										:items="age_item" label="연령대"
										outline height=0
										hide-details
										append-icon="arrow_drop_down"
									></v-select>
									</v-flex>
								</v-layout >
								<v-layout class="mt-4 mb-4" justify-center>
									<v-flex xs5>
										<v-select
										v-model="locale"
										:items="locale_item" label="지역선택"
										outline height=0
										hide-details class="mr-3"
										append-icon="arrow_drop_down"
										></v-select>
									</v-flex>
									<v-flex xs5>
										<v-select
											v-model="job"
											:items="job_item" label="직종선택"
											outline height=0
											hide-details class="mr-3"
											append-icon="arrow_drop_down"
										></v-select>
									</v-flex>
								</v-layout>
								<v-card-actions>
									<v-layout row wrap justify-center>
										<v-flex xs11>
											<v-btn 
												type="submit"
												form="check-register-form" 
												color="info" large block 
												class="headline font-weight-bold mt-3">
												회원가입
											</v-btn>
										</v-flex>
									</v-layout>
								</v-card-actions>
							</v-form>
       			</v-card-text>
        	</v-card>
      	</v-flex>
      	<v-flex xs12 sm12 md6>
        	<v-card tile flat height="100vh" color="#FAFAFA">
          	<v-card-text class="register_photo">
              <v-card-title>
                <h2 class="white--text">어떤 것을 알아보고 싶으세요?</h2>
              </v-card-title>
          	</v-card-text>
        	</v-card>
      	</v-flex>
    	</v-layout>
			<registerNull/>
		</v-container>
  </v-fade-transition>
</template>

<script>
	import registerNull from '@/components/dialog/registerNull'
  import { mapMutations } from 'vuex'

	export default {
		name: 'join',
		components: {
			registerNull
		},
		data() {
			return {
				user_id: '',    // 아이디
				password: '',   // 패스워드
				name: '',       // 이름
				email: '',      // 이메일
				sex_toggle: '', // 성별
				locale: '',		// 지역
				job: '',		// 직업
				age: '',		// 연령대
				locale_item: ['서울','부산','대구','원주'], 
				job_item: ['의사','학생','선생님','무직'],
				age_item: ['10','20','30','40','50','60','70','80'],
				emailRules: [	 // 이메일 규칙
          v => !!v || '이메일을 입력하세요', 
          v => /.+@.+/.test(v) || '이메일 형식으로 입력하세요' 
          // 전자 메일 주소의 유효성을 검사하기 위해 내용이 기본 RegExp와 일치하는지 확인
        ],
        passwordRules: [  // 패스워드 규칙
          v => !!v || '비밀번호를 입력하세요',
          v => v.length >= 6 || '6자 이상으로 입력해주세요'
        ],
			}
		},
		mounted(){
			this.$refs.input.focus()
		},
		methods: {
			...mapMutations([
      'SET_IS_REGISTER_NULL'
   	  ]),
			register(){  // 회원가입 요청해 액션에 있는 REGISTER 실행
				if(!this.user_id || !this.password || !this.name || !this.email ||	
				!this.sex_toggle || !this.locale || !this.job || !this.age){
					this.SET_IS_REGISTER_NULL(true)
				}
				else{
					const user = new URLSearchParams()
					user.append('name', this.name)
					user.append('email', this.email)
					user.append('user_id', this.user_id)
					user.append('password', this.password)
					user.append('sex_toggle', this.sex_toggle)
					user.append('locale', this.locale)
					user.append('job', this.job)
					user.append('age', this.age)

					this.$store.dispatch('REGISTER', user)
				}
			},
		},  
	};
</script>

<style scoped>
	.register_photo {
		background-image: url("/static/register_photo.png");
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>