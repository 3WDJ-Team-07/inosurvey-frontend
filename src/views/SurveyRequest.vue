<template>
     <v-container fluid grid-list-md class="pt-5 mt-5">
      <v-toolbar class="boxStyle" flat>
      <v-btn flat  class="font-weight-thin">설문 작성</v-btn>|
      <v-btn flat color="info" class=" font-weight-bold">설문 요청</v-btn>|
      <v-btn flat  class=" font-weight-thin">설문 등록</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info" large @click="input">다음
          <v-icon class="ml-3">arrow_forward</v-icon>
      </v-btn>
      </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card  color="white" height="10vh" flat>
            <FormNav></FormNav>
        </v-card>
      </v-flex>
      <v-flex xs7>
        <v-card  color="white" height="80vh">
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card  color="white" height="80vh">
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormNav from '@/components/survey/create/FormNav'

  export default {
    components: {
      FormNav
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
