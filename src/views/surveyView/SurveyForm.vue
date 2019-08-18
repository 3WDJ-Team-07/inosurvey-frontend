<template>
  <v-container fluid grid-list-md class="pt-5 mt-5">
    <v-divider style="margin:0 auto; width:95%;"/>
    <v-toolbar color="#FAFAFA" flat>
      <v-btn flat color="info" class="subheading font-weight-bold">作成</v-btn><i class="info--text fas fa-chevron-right"></i>
      <v-btn flat color="grey" class="subheading font-weight-bold">要請</v-btn><i class="grey--text fas fa-chevron-right"></i>
      <v-btn flat color="grey" class="subheading font-weight-bold">登録</v-btn>
      <v-spacer/>
      <v-btn 
        color="info" id="element"
        class="pl-5 pr-5 subheading" 
        :disabled="!isSuccessFormData" 
        large @click="next_stage"
      >Next</v-btn>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card 
          color="#FAFAFA"
          height="10vh" 
          flat
        >
          <FormNav/>
        </v-card>
      </v-flex>
      <v-layout row wrap>
      <v-flex xs3 class="ml-5">
        <v-card 
          color="#FAFAFA" 
          height="800px" 
          max-width="400" 
        >
          <FormSide/>
        </v-card>
      </v-flex>
        <v-flex sm8 class="ml-5">
          <v-card 
            color="#FAFAFA"
            height="800px"
          >
            <FormBody/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import FormNav  from '@/components/survey/create/FormNav'
  import FormSide from '@/components/survey/create/FormSide'
  import FormBody from '@/components/survey/create/FormBody'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'surveyForm',
    components: {
      FormNav,
      FormSide,
      FormBody
    },
    created() {
      this.INPUT_FORM_DATA()
    },
    computed: {
      ...mapGetters(['isSuccessFormData'])
    },
    methods: {
      ...mapActions(['INPUT_FORM_DATA']),
      next_stage() {
        this.$router.push({name: 'surveyrequest'})
      }
    },
  }
</script>

