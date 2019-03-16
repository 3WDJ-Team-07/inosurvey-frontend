<template>
   <v-fade-transition mode="out-in">
    <v-container fluid mt-5><v-layout row wrap :key="$route.path">

      <v-flex xs12 sm12 md7 class="pa-5">
        <v-card tile flat color="#FAFAFA" height="100vh">
          <v-card-title primary-title>
            <span class="display-1">회원가입</span>
          </v-card-title>
          <v-card-title>이미 회원이신가요? <router-link to="">로그인</router-link></v-card-title >
          <v-card-text>
             <v-card-text>
          <v-text-field
            placeholder="아이디"
            required
          ></v-text-field>
          <v-text-field
            placeholder="비밀번호"
            counter="25"
            required
          ></v-text-field>
          <v-text-field
            placeholder="이메일"
            required
          ></v-text-field>
          <v-text-field
            required
            placeholder="이름"
          ></v-text-field>
          <v-text-field
            required
            placeholder="79938"
          ></v-text-field>
          <v-autocomplete
            placeholder="Select..."
            required
          ></v-autocomplete>
        <v-card-actions>
          <v-btn color="primary" large block text>Submit</v-btn>
        </v-card-actions>
        </v-card-text>
            
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md5>
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
        
        };
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