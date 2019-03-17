<template>
  <v-layout row justify-center>
    <v-dialog v-model="isLoginDialog" persistent max-width="400px">
      <v-card class="pa-4 rounded-card" >
        <span class="headline right grey--text" @click="SET_IS_LOGIN(false)"><i class="far fa-times-circle"></i></span>
        <img src="/static/logo.png" id="center" class="center pa-4">
        <v-card-text>
          <v-container grid-list-md>
              <v-form @submit.prevent="login">
                <v-layout wrap>
                    <v-flex xs12>
                      <v-text-field
                      prepend-inner-icon="person" 
                      name="email"  label="Email" 
                      type="email" v-model="email" 
                      :rules="emailRules" required>
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12> 
                      <v-text-field
                      prepend-inner-icon="lock"  
                      name="password" label="Password" 
                      id="password" type="password" 
                      required v-model="password" 
                      :rules="passwordRules">
                      </v-text-field>
                    </v-flex>
                </v-layout>
              </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
           block flat 
           class="info">로그인</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
           class="blue--text"  
           block outline >회원가입</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'login',
    data() {
      return {
            email: '',
            password: '',
            emailRules: [
                v => !!v || '이메일을 입력하세요',
                v => /.+@.+/.test(v) || '이메일 형식으로 입력하세요' // 전자 메일 주소의 유효성을 검사하기 위해 내용이 기본 RegExp와 일치하는지 확인
            ],
            passwordRules: [
                v => !!v || '비밀번호를 입력하세요',
                v =>
                    v.length >= 6 ||
                    '6자 이상으로 입력해주세요'
            ]
      }
    },
    computed: {
      ...mapState([
        'isLoginDialog',
      ])
    },
    methods: {
      ...mapMutations([
        'SET_IS_LOGIN',
        ]),
        login(){
          this.$store.dispatch('RETRIEVE_TOKEN', {
            email: this.email,
            password: this.password
          })
          //  .then(response => {
          //    this.$router.push({name:'home'})
          //  })  // 프로미스로 받아서 성공하면 리다이렉트 로직 
        }
    },
  }
</script>

<style scoped>
  .center {
    display: block;
    margin: 0 auto;
    width: 80%;
    transition: .5s ease;
  }
  .rounded-card{
    border-radius:10px;
  }
    .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
