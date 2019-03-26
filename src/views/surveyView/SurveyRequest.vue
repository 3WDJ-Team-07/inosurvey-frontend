/*  설문요청 페이지 
    1. 툴바 공통화 작업
*/

<template>
  <v-container fluid grid-list-md class="pt-5 mt-5">
    <v-divider/>
    <v-toolbar color="#FAFAFA" flat>
      <v-btn flat color="grey" class="subheading font-weight-bold">설문 작성</v-btn>|
      <v-btn flat color="info" class="subheading font-weight-bold">설문 요청</v-btn>|
      <v-btn flat color="grey" class="subheading font-weight-bold">등록</v-btn>
      <v-spacer/>
      <v-btn color="info" class="pl-5 pr-5 subheading" large disabled>다음</v-btn>
    </v-toolbar>
    <v-divider/>
    <v-layout row wrap>
      <v-flex xs12>
        <RequestNav/>
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
  import RequestNav from '@/components/survey/request/RequestNav'
  import RequestTarget from '@/components/survey/request/RequestTarget'
  import RequestPay from '@/components/survey/request/RequestPay'

  export default {
    name: 'surveyRequest',
    components: {
      RequestNav,
      RequestTarget,
      RequestPay
    },
  }
</script>

