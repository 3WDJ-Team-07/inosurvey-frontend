<template>
  <v-layout row justify-center>
    <v-dialog v-model="this.$store.state.dialog" persistent max-width="500px">
      <v-card>
        <v-toolbar dark color="primary">        
            <v-toolbar-title >LOGIN</v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="headline" @click="LoginDialogChange"><i class="far fa-times-circle"></i></span>
        </v-toolbar>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field prepend-icon="person" name="email" label="Email" type="email" v-model="email" :rules="emailRules" required></v-text-field>
              </v-flex>
              <v-flex xs12> 
                <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" required v-model="password" :rules="passwordRules"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn :loading="loading" :disabled="loading" color="grey" block outline @click="loader ='loading'" >LOGIN</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex';

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
    methods: {
      ...mapMutations(['LoginDialogChange']),
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
