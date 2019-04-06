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
                    name="email"  label="아이디" 
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
            <span>{{ error }}</span>
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
        // 로딩 모달창 boolean값을 바인딩하여 계속 체크
        'isLoginDialog', 	
      ]),
    },
    methods: {
      ...mapMutations([
        // 로딩 모달창 (true / false)
        'SET_IS_LOGIN', 	
      ]),
      ...mapActions([
        // 로그인 요청
        'LOGIN'  
      ]),
      registerPage(){
        this.$router.push({name: 'join'})
        this.$store.state.isLoginDialog = false
      },
      onSubmit() {  
        this.LOGIN({
          user_id: this.form.user_id,
          password: this.form.password
        })
          .then(response => {
            this.$store.state.isLoginDialog = false
            swal("환영합니다!", "로그인이 완료되었습니다.", "success",{ button: "확인" });
            this.$router.push({name: 'home'})
          })
          .catch(_ => {
            this.error = "아이디 또는 비밀번호가 틀렸습니다."
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
