/* 메인페이지( 응답자, 요청자 ) */

<template>
  <v-fade-transition mode="out-in">
    <v-layout
      row wrap 
      text-md-center 
      text-xs-center>
      <v-flex xs12 sm12 md6>
        <v-card
          dark tile 
          flat color="#29B6F6" 
          height="75vh" class="pa-5" 
          data-aos="fade-right" 
          data-aos-delay="200" >
          <v-card-text class="display-1 mt-2 mb-3 font-weight-black">응답자용</v-card-text>
          <v-img src="/static/respond.png" width="35%" class="center"></v-img>
          <v-card-text class="pa-5">
            <span class="headline font-weight-bold">
              필요한정보를 가진 집단을 직접 선택해<br>
              확실한 정보를 제공받으세요.<br>
              원하는 양식으로 결과를 분석하세요.
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card
          dark tile 
          flat color="#616161" 
          height="75vh" class="pa-5" 
          data-aos="fade-left" 
          data-aos-delay="300" >
          <v-card-text class="display-1 mt-2 mb-3 font-weight-black">요청자용</v-card-text>
          <v-img src="/static/request.png" width="35%" class="center"></v-img>
          <v-card-text class="pa-5">
            <span class="headline font-weight-bold">
              모바일 환경에서 편리하게 설문조사에<br>
              참여하세요. 설문조사에 응답하며 데이터에<br>
              대한 정당한 보상을 받으세요.
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md12 text-md-center text-xs-center>
        <v-card
          tile flat 
          height="40vh" 
          class="pa-5 mt-5"
          color='#FAFAFA' 
          data-aos="flip-up" 
          data-aos-delay="200" >
          <v-card-text class="display-2">
            궁금하지않으세요?
          </v-card-text>
          <v-btn color="primary" large router :to="{name: 'join'}">시작하기</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-fade-transition>
</template>

<script>
 
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