<template>
  <v-layout row justify-center>
    <v-dialog v-model="isLoginDialog" persistent max-width="400px">
      <v-card class="pa-4 rounded-card" >
        <span class="headline right grey--text" @click="SET_IS_LOGIN(false)"><i class="far fa-times-circle"></i></span>
        <img src="/static/logo.png" id="center" class="center pa-4">
        <v-card-text>
          <v-container grid-list-md>
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
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
           :loading="loading" 
           :disabled="loading" 
           block flat 
           @click="loader ='loading'" 
           class="info">로그인</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
           :loading="loading" 
           :disabled="loading" 
           class="blue--text"  
           block outline 
           @click="loader ='loading'" >회원가입</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'Login',
    data() {
      return {
        loader: null,
        loading: false,
        valid: false,
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
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 2000)
        this.loader = null
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
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userJoin', {
                    email: this.email,
                    password: this.password
                });
            }
        },
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
