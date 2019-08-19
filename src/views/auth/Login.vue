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
                    name="email"  label="id" 
                    type="text" v-model="form.user_id"
                    required>
                  </v-text-field>
                </v-flex>
                <v-flex xs12> 
                  <v-text-field
                    prepend-inner-icon="lock"  
                    name="password" label="password" 
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
            ログイン
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
           class="blue--text"  
           block outline
           @click="registerPage">
           会員登録
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
          v => !!v || 'メールをご記入ください', 
          v => /.+@.+/.test(v) || 'メール形式でご記入ください' 
          
        ],
        passwordRules: [  // 패스워드 규칙
          v => !!v || 'パスワードをご記入ください',
          v => v.length >= 6 || '6字以上でご記入ください'
        ],
        error: null,	 // 에러메시지
      }
    },
    computed: {
      ...mapState(['isLoginDialog']),
    },
    methods: {
      ...mapMutations(['SET_IS_LOGIN']),
      ...mapActions(['LOGIN']),
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
          swal("ようこそ。InoSurveyへ!", "ログイン成功！", "success",{ button: "OK" });
          this.$router.push({name: 'home'})
          let token = localStorage.getItem('token')
          this.$store.dispatch('USER_INFO', { access_token: token })
        })
        .catch(_ => {
          this.error = "IDやパスワードが間違います。"
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
