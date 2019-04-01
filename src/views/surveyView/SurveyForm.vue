/*  설문폼 제작 페이지 
    1. 툴바 공통화 작업 필요 ( 컴포넌트로 분리해서 공통사용 ( 라우터 ) )
    2. 설문 커스터 마이징
*/

<template>
  <v-container fluid grid-list-md class="pt-5 mt-5">
    <v-divider/>
    <v-toolbar color="#FAFAFA" flat>
      <v-btn flat color="info" class="subheading font-weight-bold">설문 작성</v-btn>|
      <v-btn flat color="grey" class="subheading font-weight-bold">설문 요청</v-btn>|
      <v-btn flat color="grey" class="subheading font-weight-bold">등록</v-btn>
      <v-spacer/>
      <v-btn color="info" class="pl-5 pr-5 subheading" large @click="next_stage">저장</v-btn>
      <v-btn color="info" class="pl-5 pr-5 subheading" large @click="next_stage">다음</v-btn>
    </v-toolbar>
    <v-divider/>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="#FAFAFA" height="10vh" flat >
          <FormNav/>
        </v-card>
      </v-flex>
      <v-layout row wrap>
      <v-flex xs3>
        <v-card color="#FAFAFA" height="700px" max-width="400">
          <FormSide/>
        </v-card>
      </v-flex>
        <v-flex sm8 class="ml-5 pl-5">
          <v-card color="#FAFAFA" height="700px">
            <FormBody/>
          </v-card>
        </v-flex>
      </v-layout>
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
        this.$router.replace("/surveyrequest")
      }
    },
  }
</script>

