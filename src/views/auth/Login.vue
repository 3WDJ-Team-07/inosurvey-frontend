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
            <v-form @submit.prevent="onSubmit" id="check-login-form">
              <v-layout wrap>
                <v-flex xs12> 
                  <v-text-field
                    prepend-inner-icon="person" 
                    name="user_id"  label="아이디" 
                    type="text" v-model="form.user_id"
                    required>
                  </v-text-field>
                </v-flex>
                <v-flex xs12> 
                  <v-text-field
                    prepend-inner-icon="lock"  
                    name="password" label="비밀번호" 
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
          <v-btn color="error" v-if="error" block flat >
            <span class="caption">{{ error }}</span>
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
  import { mapMutations, mapState, mapActions } from 'vuex';
  import { auth, setAuthInHeader } from '@/api'

  export default {
    name: 'login',
    data() {
      return {
        form: {
          user_id: '',	 // 이메일
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
        error: null,	 // 에러메시지
      }
    },
    computed: {
      ...mapState([ 
        'isLoginDialog', 	// 로딩 모달창 boolean값을 바인딩하여 계속 체크
      ]),
    },
    methods: {
      ...mapMutations([
        'SET_IS_LOGIN', 	// 로딩 모달창 (true / false)
      ]),
      ...mapActions([
        'LOGIN'  // 로그인 요청
      ]),
      registerPage(){
        this.$router.push({name:'join'})
        this.$store.state.isLoginDialog = false
      },
      onSubmit() {  
        this.LOGIN({
          user_id: this.form.user_id,
          password: this.form.password
        })
          .then(response => {
            this.$router.push('/')
          })
          .catch(response => {
            this.error = response.error  // 백엔드에서 에러메세지 받자 
          })
      }
    },
  }
</script>

<style scoped>
  .logo_center { 
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .login_modal_border_round {
    border-radius:10px;
  }
</style>
