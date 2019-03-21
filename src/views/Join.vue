/* 회원가입 페이지 */

<template>
  <v-fade-transition mode="out-in">
    <v-container fluid mt-5>
			<v-layout row wrap :key="$route.path">
        <v-flex xs12 sm12 md6 class="pa-5">
        	<v-card tile flat color="#FAFAFA" height="100vh">
          	<v-card-title>
            	<div class="display-2 font-weight-bold">회원가입</div>
          	</v-card-title>
          	<span class="ml-3 headline">INO-SURVEY와 함께해요!</span>
          	<v-card-text class="pa-5">
							<v-form @submit.prevent="register" id="check-register-form">
								<v-flex xs12 column>
									<v-text-field
										v-model="user_id"
										placeholder="아이디"
										required>
									</v-text-field>
									<v-text-field
										v-model="password"
										placeholder="비밀번호"
										type="password"
										counter="25"
										required>
									</v-text-field>
									<v-text-field
										v-model="email"
										type="email"
										placeholder="이메일"
										required>
									</v-text-field>
									<v-text-field
										v-model="name"
										required
										placeholder="이름">
									</v-text-field>
								</v-flex>
								<v-layout>
									<v-btn-toggle v-model="sex_toggle" mandatory>
										<v-btn 
											depressed flat value="male" 
											class="pl-5 pb-5 pr-5 pt-4 
											font-weight-bold title">
											<span>남성</span>
										</v-btn>
										<v-btn
											depressed flat value="female"
											class="pl-5 pb-5 pr-5 pt-4 
											font-weight-bold title">
											<span>여성</span>
										</v-btn>
									</v-btn-toggle>
									<v-flex xs6 class="ml-5">
										<v-text-field required
											placeholder="태어난 연도"
										></v-text-field>
									</v-flex>
								</v-layout >
								<v-layout class="mt-4 mb-4">
									<v-select
										v-model="locale"
										:items="locale_item" label="지역선택"
										outline height=0
										hide-details class="mr-3"
										append-icon="person"
									></v-select>
									<v-select
										v-model="job"
										:items="job_item" label="직업선택"
										outline height=0
										hide-details class="mr-3"
										append-icon="person"
									></v-select>
									<v-select
										v-model="edu"
										:items="edu_item" label="학력선택"
										outline height=0
										hide-details
										append-icon="person"
									></v-select>
								</v-layout>
								<v-card-actions>
									<v-btn 
										type="submit" 
										form="check-register-form" 
										color="info" large block 
										class="headline font-weight-bold mt-3">
										회원가입
									</v-btn>
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
	export default {
		name: 'join',
		data() {
			return {
				user_id: '',    // 아이디
				password: '',   // 패스워드
				name: '',       // 이름
				email: '',      // 이메일
				sex_toggle: '', // 성별
				locale: '',		// 지역
				job: '',		// 직업
				edu: '',		// 학력
				locale_item: [       // 지역
					'Foo',
					'Bar',
					'Fizz',
					'Buzz'
				], 
				job_item: [          // 직업 
					'Foo',
					'asdfa',
					'sdfaFizz',
					'asdfaBuzz'
				],
				edu_item: [          // 학력
					'Fo12312o',
					'B312312ar',
					'312312Fizz',
					'Buzz'
				],
			}
		},
		methods: {
			/* 회원가입 요청해 액션에 있는 REGISTER 실행 */
			register(){
				const user = new URLSearchParams()
				user.append('name', this.name)
				user.append('email', this.email)
				user.append('user_id', this.user_id)
				user.append('password', this.password)
				user.append('sex_toggle', this.sex_toggle)
				user.append('locale', this.locale)
				user.append('job', this.job)
				user.append('edu', this.edu)

				this.$store.dispatch('REGISTER', user)
			}
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