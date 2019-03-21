/* 로그인 페이지 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isLoginDialog" persistent max-width="400px">
      <v-card class="pa-4 login_modal_border_round" >
        <span 
          class="headline right grey--text" 
          @click="SET_IS_LOGIN(false)">
          <i class="far fa-times-circle"></i>
        </span>
        <img src="/static/logo.png" id="center" class="logo_center pa-4">
        <v-card-text>
          <v-container grid-list-md>
            <v-form @submit.prevent="authenticate" id="check-login-form">
              <v-layout wrap>
                <v-flex xs12> 
                  <v-text-field
                    prepend-inner-icon="person" 
                    name="email"  label="Email" 
                    type="email" v-model="form.email" 
                    :rules="emailRules" required>
                  </v-text-field>
                </v-flex>
                <v-flex xs12> 
                  <v-text-field
                    prepend-inner-icon="lock"  
                    name="password" label="Password" 
                    id="password" type="password" 
                    required v-model="form.password" 
                    :rules="passwordRules">
                  </v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" v-if="authError" block flat >
            <span class="caption">{{ authError }}</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            type="submit" block flat 
            class="info" form="check-login-form">
            로그인
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
           class="blue--text"  
           block outline
           @click="registerPage">
           회원가입
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  import { login } from '@/helpers/auth'

  export default {
    name: 'login',
    data() {
      return {
        form: {
          email: '',	 // 이메일
          password: ''	 // 패스워드
        },
        emailRules: [	 // 이메일 규칙
          v => !!v || '이메일을 입력하세요',
          v => /.+@.+/.test(v) || '이메일 형식으로 입력하세요' 
          // 전자 메일 주소의 유효성을 검사하기 위해 내용이 기본 RegExp와 일치하는지 확인
        ],
        passwordRules: [  // 패스워드 규칙
          v => !!v || '비밀번호를 입력하세요',
          v => v.length >= 6 || '6자 이상으로 입력해주세요'
        ],
        error: null	 // 에러메시지
      }
    },
    computed: {
      ...mapState([ 
        'isLoginDialog', 	// 로딩 모달창 boolean값을 바인딩하여 계속 체크
      ]),
      authError() {  // 로그인 에러 
        return this.$store.getters.authError
      }
    },
    methods: {
      ...mapMutations([
        'SET_IS_LOGIN', 	// 로딩 모달창 (true / false)
			]),
      authenticate() {
        this.$store.dispatch('LOGIN')

        login(this.$data.form)
          .then(response => {
            this.$store.commit("LOGIN_SUCCESS", response)
            this.$router.push({name:'home'})
          })
          .catch(error => {
            this.$store.commit("LOGIN_FAILED", {error})  
          })
      },
      registerPage(){
        this.$router.push({name:'join'})
        this.$store.state.isLoginDialog = false
      }
    },
  }
</script>

<style scoped>
  .logo_center { 
    display: block;
    margin: 0 auto;
    width: 80%;
  }
  .login_modal_border_round {
    border-radius:10px;
  }
</style>
