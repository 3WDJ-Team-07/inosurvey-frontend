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
										<v-radio-group v-model="is_donator" class="pl-5" row prepend-icon="check">
											<v-radio label="일반회원" :value="0"></v-radio>
											<v-radio color="red" label="기부단체" :value="1"></v-radio>
										</v-radio-group>
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
											counter="20"
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
											v-model="nickname"
											required
											placeholder="닉네임">
										</v-text-field>
									</v-flex>
								</v-layout>
								<v-layout justify-center>
									<v-btn-toggle v-model="gender" style="background:#FAFAFA">
										<v-btn 
											depressed flat :value="1" 
											class="pl-4 pb-5 pr-4 pt-2 
											font-weight-bold title"
											style="width:250px;">
											<span style="line-height:40px;">남성</span>
										</v-btn>
										<v-btn
											depressed flat :value="2"
											class="pl-4 pb-5 pr-4 pt-2 
											font-weight-bold title" style="width:250px;">
											<span style="line-height:40px;">여성</span>
										</v-btn>
									</v-btn-toggle>
								</v-layout >
								<v-layout class="mt-4 mb-4" justify-center>
									<v-flex xs5>
										<v-select
										 	class="mr-3"
											v-model="job_id"
											:items="job_item" 
											label="직종선택"
											item-text="name"
											item-value="value" 
											outline height=0
											hide-details
											append-icon="arrow_drop_down"
										></v-select>
									</v-flex>
										<v-flex xs5>
											<v-select
											class="mr-3"
											v-model="age" 
											:items="age_item" 
											label="연령대"
											item-text="name"
											item-value="value"
											outline height=0
											hide-details
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
		</v-container>
  </v-fade-transition>
</template>

<script>
	import { mapMutations } from 'vuex'
	import swal from 'sweetalert'

	export default {
		name: 'join',
		data() {
			return {
				user_id: '',  // 아이디
				password: '',  // 패스워드
				nickname: '',  // 이름
				email: '',  // 이메일
				gender: 0,  // 성별
				job_id: 0,  // 직업
				age: 0,  // 연령대
				is_donator: 0,  // 기부단체 or 일반회원
				job_item: [
					{ name: '서비스/상담', value: 1},
					{ name: '금융/무역', value: 2},
					{ name: '연구/개발', value: 3},
					{ name: 'IT/인터넷', value: 4},
					{ name: '건설', value: 5},
					{ name: '사무/경영', value: 6},
					{ name: '의료', value: 7},
					{ name: '교육', value: 8},
					{ name: '생산/제조', value: 9},
				],
				age_item: [
					{ name: '1950년도생', value: 1950},
					{ name: '1960년도생', value: 1960},
					{ name: '1970년도생', value: 1970},
					{ name: '1980년도생', value: 1980},
					{ name: '1990년도생', value: 1990},
					{ name: '2000년도생', value: 2000},
					{ name: '2010년도생', value: 2010},
				],
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
				if(!this.user_id || !this.password || !this.nickname || !this.email ||	
				!this.gender || !this.job_id || !this.age || !this.is_donator){
					swal("모두 입력하지 않았습니다!","모든입력란을 채워주세요","error",{button:"확인"});
				}
				else{
					const user = new URLSearchParams()
					user.append('nickname', this.nickname)
					user.append('email', this.email)
					user.append('user_id', this.user_id)
					user.append('password', this.password)
					user.append('gender', this.gender)
					user.append('job_id', this.job_id)
					user.append('age', this.age)
					user.append('is_donator', this.is_donator)
					this.$store.dispatch('REGISTER', user)
						.then( () => {
							swal("회원가입이 완료되었습니다!","로그인 해주세요","success",{
								button:"확인",
							});
						})
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