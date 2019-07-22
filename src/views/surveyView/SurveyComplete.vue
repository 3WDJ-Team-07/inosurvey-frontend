<template>
  <v-container fluid grid-list-md class="pt-5 mt-5">
    <v-divider/>
    <v-toolbar color="#FAFAFA" flat>
      <v-btn flat color="grey" class="subheading font-weight-bold">作成</v-btn><i class="grey--text fas fa-chevron-right"></i>
      <v-btn flat color="grey" class="subheading font-weight-bold">要請</v-btn><i class="grety--text fas fa-chevron-right"></i>
      <v-btn flat color="info" class="subheading font-weight-bold">登録</v-btn>
      <v-spacer/>
      <v-btn color="info" class="pl-5 pr-5 subheading" disabled large>Next</v-btn>
    </v-toolbar>
    <v-divider/>
    <v-layout column wrap align-center style="margin-top:220px;"> 
      <div>
        <span class="display-3 font-weight-bold">「 {{formTitle}} 」</span>
        <span class="display-1 font-weight-bold"> が登録しました !</span>
      </div>
      <div>
        <v-btn 
        large @click="mySurvey" color="info"
        class="title pr-5 pl-5 font-weight-bold" 
        >自分のアンケート
        </v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
	import { mapState } from 'vuex'

  export default {
    name: 'surveycomplete',
    computed: {
      ...mapState(['formTitle'])
    },
    methods: {
      mySurvey() {  
        this.$router.push({ name: 'mysurvey' })
      }
    }
  }
</script>

