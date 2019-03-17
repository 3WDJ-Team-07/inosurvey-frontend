<template>
     <v-container fluid grid-list-md class="pt-5 mt-5">
      <v-toolbar class="boxStyle" flat>
      <v-btn flat color="info" class="font-weight-bold">설문 작성</v-btn>|
      <v-btn flat  class=" font-weight-thin">설문 요청</v-btn>|
      <v-btn flat  class=" font-weight-thin">설문 등록</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info" large @click="input">다음
          <v-icon class="ml-3">arrow_forward</v-icon>
      </v-btn>
      </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card  color="#FAFAFA" height="10vh" flat >
            <FormNav></FormNav>
        </v-card>
      </v-flex>
      <v-flex xs3 md3 >
        <v-card  color="#FAFAFA" height="80vh" max-width="400">
            <FormSide></FormSide>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-card  color="#FAFAFA" height="80vh">
          <FormBody></FormBody>
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
    components: {
      FormNav,
      FormSide,
      FormBody
    },
    methods: {
      input(){
        this.$router.replace("/SurveyRequest")
      }
    },
  }
</script>

<style scoped>
  .boxStyle{
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
</style>
