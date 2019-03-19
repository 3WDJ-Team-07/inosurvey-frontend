<template>
   <v-fade-transition mode="out-in">
    <v-container fluid mt-5><v-layout row wrap :key="$route.path">

      <v-flex xs12 sm12 md6 class="pa-5">
        <v-card tile flat color="#FAFAFA" height="100vh">
          <v-card-title primary-title>
            <div class="display-2 font-weight-bold">회원가입</div>
          </v-card-title>
          <span class="ml-3 headline">INO-SURVEY와 함께해요!</span>
          <v-card-text class="pa-5">
            <v-form @submit.prevent="register" id="check-register-form">
              <v-flex xs12 column>
                <v-text-field
                  v-model="user_id"
                  placeholder="아이디"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  placeholder="비밀번호"
                  counter="25"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  placeholder="이메일"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="name"
                  required
                  placeholder="이름"
                ></v-text-field>
              </v-flex>
              <v-layout>
                <v-btn-toggle v-model="sex_toggle" mandatory>
                <v-btn depressed flat value="male" class="pl-5 pb-5 pr-5 pt-4 font-weight-bold title">
                  <span>남성</span>
                </v-btn>
                <v-btn depressed flat value="female" class="pl-5 pb-5 pr-5 pt-4 font-weight-bold title">
                  <span>여성</span>
                </v-btn>
              </v-btn-toggle>
                <v-flex xs6 class="ml-5">
                <v-text-field
                  required
                  placeholder="태어난 연도"
                ></v-text-field>
                </v-flex>
              </v-layout >
              <v-layout class="mt-4 mb-4">
                <v-select
                          :items="locale"
                          label="지역선택"
                          outline
                          hide-details
                          height=0
                          append-icon="person"
                          class="mr-3"
                        ></v-select>
                  <v-select
                          :items="job"
                          label="직업선택"
                          outline
                          height=0
                          hide-details
                          append-icon="person"
                          class="mr-3"
                        ></v-select>
                  <v-select
                          :items="edu"
                          label="학력선택"
                          outline
                          height=0
                          append-icon="person"
                          hide-details
                        ></v-select>
                </v-layout>
          <v-card-actions >
            <v-btn type="submit" 
            form="check-register-form" 
            color="info" large block 
            class="headline font-weight-bold mt-3">회원가입</v-btn>
          </v-card-actions>
        </v-form>
       </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card tile flat height="100vh" color="#FAFAFA">
          <v-card-text class="home-hero">
              <v-card-title primary-title >
                  <h2 class="white--text">어떤 것을 알아보고 싶으세요?</h2>
              </v-card-title>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout></v-container>
    
  </v-fade-transition>
</template>

<script>

export default {
    name: 'Join',
    data() {
        return {
          user_id: '',
          password: '',
          name: '',
          email: '',
          sex_toggle: '',
          locale: ['Foo', 'Bar', 'Fizz', 'Buzz'],
          job: ['Foo', 'asdfa', 'sdfaFizz', 'asdfaBuzz'],
          edu: ['Fo12312o', 'B312312ar', '312312Fizz', 'Buzz'],
        };
    },
    methods: {
      register(){
          this.$store.dispatch('REGISTER', {
            name: this.name,
            email: this.email,
            user_id: this.user_id,
            password: this.password,
            sex_toggle: this.sex_toggle,
            locale: this.locale,
            job: this.job,
            edu: this.edu
          })
          //  .then(response => {
          //    this.$router.push({name:'home'})
          //  })  // 프로미스로 받아서 성공하면 리다이렉트 로직 
      }
    },
    
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/bG3M_acL-Ao');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>