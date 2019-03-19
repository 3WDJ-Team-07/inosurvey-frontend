/*  설문폼 제작 페이지 
    1. 툴바 공통화 작업 필요 ( 컴포넌트로 분리해서 공통사용 ( 라우터 ) )
    2. 설문 커스터 마이징
*/

<template>
  <v-container fluid grid-list-md class="pt-5 mt-5">
    <v-toolbar class="box_round_color" flat>
      <v-btn flat color="info" class="font-weight-bold">설문 작성</v-btn>|
      <v-btn flat  class=" font-weight-thin">설문 요청</v-btn>|
      <v-btn flat  class=" font-weight-thin">설문 등록</v-btn>
      <v-spacer/>
      <v-btn color="info" large @click="next_stage">다음
        <v-icon class="ml-3">arrow_forward</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="#FAFAFA" height="10vh" flat >
          <FormNav/>
        </v-card>
      </v-flex>
      <v-flex xs3 md3>
        <v-card color="#FAFAFA" height="80vh" max-width="400">
          <FormSide/>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-card color="#FAFAFA" height="80vh">
          <FormBody/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import FormNav from '@/components/survey/create/FormNav'
  import FormSide from '@/components/survey/create/FormSide'
  import FormBody from '@/components/survey/create/FormBody'

  export default {
    name: 'surveyForm',
    components: {
      FormNav,
      FormSide,
      FormBody
    },
    methods: {
      next_stage(){  // 요청페이지로 이동
        this.$router.replace("/SurveyRequest")
      }
    },
  }
</script>

<style scoped>
  .box_round_color{
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
</style>
