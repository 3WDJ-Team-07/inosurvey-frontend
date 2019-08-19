/* 회원가입 페이지 */

<template lang="html">
  <v-fade-transition mode="out-in">
    <v-container fluid mt-5>
			<v-layout row wrap :key="$route.path">
        <v-flex xs12 sm12 md6 class="pa-5">
        	<v-card tile flat color="#FAFAFA" height="100vh">
          	<v-card-title>
            	<div class="display-2 font-weight-bold ml-4">会員登録</div>
          	</v-card-title>
          	<span class="ml-5 headline">INO-SURVEYと一緒に行きましょう！</span>
          	<v-card-text class="pa-5">
							<v-form @submit.prevent="register" id="check-register-form">
								<v-layout row wrap justify-center>
										<v-radio-group v-model="is_donator" class="pl-5" row prepend-icon="check">
											<v-radio label="一般会員" :value="0"></v-radio>
											<v-radio color="red" label="寄付団体" :value="1"></v-radio>
										</v-radio-group>
									<v-flex sm10 column>
										<v-text-field
											v-model="user_id"
											placeholder="Id"
											ref="input" required>
										</v-text-field>
										<v-text-field
											v-model="password"
											placeholder="Password"
											type="password"
											counter="20"
											:rules="passwordRules"
											required>
										</v-text-field>
										<v-text-field
											v-model="email"
											type="email"
											placeholder="E-mail"
											:rules="emailRules"
											required>
										</v-text-field>
										<v-text-field
											v-model="nickname"
											required
											placeholder="NickName">
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
											<span style="line-height:40px;">男</span>
										</v-btn>
										<v-btn
											depressed flat :value="2"
											class="pl-4 pb-5 pr-4 pt-2 
											font-weight-bold title" style="width:250px;">
											<span style="line-height:40px;">女</span>
										</v-btn>
									</v-btn-toggle>
								</v-layout >
								<v-layout class="mt-4 mb-4" justify-center>
									<v-flex xs5>
										<v-select
										 	class="mr-3"
											v-model="job_id"
											:items="job_item" 
											label="職種選択"
											item-text="name"
											item-value="value" 
											outline height=0
											hide-details
											append-icon="arrow_drop_down"
										></v-select>
									</v-flex>
										<v-flex xs5>
											<!-- <v-select
											class="mr-3"
											v-model="age" 
											:items="age_item" 
											label="출생연도"
											item-text="name"
											item-value="value"
											outline height=0
											hide-details
											append-icon="arrow_drop_down"
										></v-select> -->
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="200"
                  lazy
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator>
                    <v-text-field
                      v-model="age"
                      label="生年月日"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="age"
                    max="2019-05-15"
                    min="1960-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
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
												会員登録
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
                <h2 class="white--text">どんなことを調べたいですか。</h2>
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
	import swal             from 'sweetalert'

	export default {
		name: 'join',
		data() {
			return {
				user_id: '',    // 아이디
				password: '',   // 패스워드
				nickname: '',   // 이름
				email: '',      // 이메일
				gender: 0,      // 성별
				job_id: 0,      // 직업
				age: null,         // 연령대
				is_donator: 0,  // 기부단체 or 일반회원
				menu:false,
				job_item: [
					{ name: '教育', value: 1},
					{ name: '建設', value: 2},
					{ name: '金融 / 貿易', value: 3},
					{ name: '事務 / 経営', value: 4},
					{ name: '生産 / 製造', value: 5},
					{ name: 'サービス / 相談', value: 6},
					{ name: '研究 / 開発', value: 7},
					{ name: '芸術 / 放送', value: 8},
					{ name: 'IT / インターネット', value: 9},
				],
				// age_item: [
				// 	{ name: '1950년도생', value: 1950},
				// 	{ name: '1960년도생', value: 1960},
				// 	{ name: '1970년도생', value: 1970},
				// 	{ name: '1980년도생', value: 1980},
				// 	{ name: '1990년도생', value: 1990},
				// 	{ name: '2000년도생', value: 2000},
				// 	{ name: '2010년도생', value: 2010},
				// ],
				emailRules: [
          v => !!v || 'メールをご記入ください', 
          v => /.+@.+/.test(v) || 'メール形式でご記入ください' 
        ],
        passwordRules: [
          v => !!v || 'パスワードをご記入ください',
          v => v.length >= 6 || '6字以上でご記入ください'
        ],
			}
		},
		mounted(){
			this.$refs.input.focus()
		},
		watch:{
      menu(val){
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
		methods: {
			...mapMutations(['SET_IS_REGISTER_NULL']),
			save (age) {
			var ages= age.slice(0,4)
			this.$refs.menu.save(ages)

    },
			register(){
				if(!this.user_id || !this.password || !this.nickname || !this.email ||	
				!this.gender || !this.job_id || !this.age ){
					swal("全部ご記入しなかったです。","全部ご記入ください！","error",{button:"OK"});
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
						swal("会員登録 成功！","ログインしてください。","success",{
							button:"OK",
            });
            this.$router.push({name: 'home'})
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