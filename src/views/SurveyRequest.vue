/*  설문요청 페이지 
    1. 툴바 공통화 작업
*/

<template>
  <v-container fluid grid-list-md class="pt-5 mt-5">
    <v-toolbar class="box_round_color" flat>
      <v-btn flat class="font-weight-thin">설문 작성</v-btn>|
      <v-btn flat color="info" class="font-weight-bold">설문 요청</v-btn>|
      <v-btn flat class=" font-weight-thin">설문 등록</v-btn>
      <v-spacer/>
      <v-btn color="info" large @click="next_stage">다음
        <v-icon class="ml-3">arrow_forward</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12>
        <FormNav/>
        <v-divider/>
      </v-flex>
      <v-flex xs7>
        <RequestTarget/>
      </v-flex>
      <v-flex xs5>
        <RequestPay/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import FormNav from '@/components/survey/create/FormNav'
  import RequestTarget from '@/components/survey/request/RequestTarget'
  import RequestPay from '@/components/survey/request/RequestPay'

  export default {
    name: 'surveyRequest',
    components: {
      FormNav,
      RequestTarget,
      RequestPay
    },
    methods: {
      next_stage(){  // 설문등록페이지로 리다이렉트
        this.$router.replace("/SurveyRequest")
      }
    }
  }
</script>

<style scoped>
  .box_round_color{
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
</style>
