<template>
     <v-container fluid grid-list-md text-md-right class="pt-5 mt-5">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card  color="white" height="10vh" >
            <FormNav></FormNav>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card  color="white" height="80vh">
            <FormSide></FormSide>
        </v-card>
      </v-flex>
      <v-flex xs9>
        <v-card  color="white" height="80vh">
          <FormBody></FormBody>
        </v-card>
      </v-flex>
    </v-layout>
    <div >
      <v-btn color="info" large @click="input">다음
        <v-icon class="ml-2">arrow_forward</v-icon>
      </v-btn>
    </div>
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
        this.$router.replace("/SurveyAnalysis")
      }
    },
  }
</script>

<style scoped>
</style>
