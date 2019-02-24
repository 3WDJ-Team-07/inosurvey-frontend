<template>
  <v-fade-transition mode="out-in">
    <v-layout row wrap text-md-center>
      <v-flex xs12 sm12 md6>
        <v-card dark tile flat color="#29B6F6" height="75vh" class="pa-5">
          <v-card-text class="display-1 mt-2 mb-3 font-weight-black">응답자용</v-card-text>
          <v-img src="/static/respond.png" width="35%" class="center"></v-img>
          <v-btn color="white" class="blue--text mt-5" large>모든 서비스 보기</v-btn>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card dark tile flat color="#616161" height="75vh" class="pa-5">
          <v-card-text class="display-1 mt-2 mb-3 font-weight-black">요청자용</v-card-text>
          <v-img src="/static/request.png" width="35%" class="center"></v-img>
          <v-btn color="white" class="grey--text mt-5" large>모든 서비스 보기</v-btn>
        </v-card>
      </v-flex>
      <v-flex md12 text-md-center>
            <v-card tile flat height="40vh" class="pa-5 mt-5" color='#FAFAFA'>
                <v-card-text class="display-2">
                  궁금하지않으세요?
                </v-card-text>
                <v-btn color="primary" large to="/join">시작하기</v-btn>
            </v-card>
        </v-flex>
    </v-layout>
  </v-fade-transition>
</template>

<script>
  export default {
  }
</script>
 <style scoped>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  transition: .5s ease;
}
 </style>