/*  설문등록 완료 페이지 
    
*/

<template>
  <v-container fluid grid-list-md class="pt-5 mt-5">
    <v-divider/>
    <v-toolbar color="#FAFAFA" flat>
      <v-btn flat color="grey" class="subheading font-weight-bold">설문 작성</v-btn>|
      <v-btn flat color="grey" class="subheading font-weight-bold">설문 요청</v-btn>|
      <v-btn flat color="info" class="subheading font-weight-bold">등록</v-btn>
      <v-spacer/>
      <v-btn color="info" class="pl-5 pr-5 subheading" disabled large>다음</v-btn>
    </v-toolbar>
    <v-divider/>
    <v-layout column wrap align-center style="margin-top:180px;"> 
      <div>
            <span class="display-3 font-weight-bold">" {{surveyTitle}} "</span>
            <span class="display-1 font-weight-bold"> 가 등록되었습니다 !</span>
      </div>
      <div>
          <v-btn large class="title pr-5 pl-5 font-weight-bold" @click="mySurvey" color="info">내가 만든 설문보기</v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
	import { mapState } from 'vuex'

  export default {
    name: 'surveyComplete',
    computed:{
      ...mapState([
        'surveyTitle'  // 설문제목을 받는다
      ])
    },
    methods: {
      mySurvey(){  // 설문등록페이지로 리다이렉트
        this.$router.replace("/mysurvey")
      }
    }
  }
</script>

