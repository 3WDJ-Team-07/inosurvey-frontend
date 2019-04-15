<template>
  <v-container>
    <MySurveyList/>
  </v-container>
</template>

<script>
  import MySurveyList from '@/components/survey/list/MySurveyList'

  export default {
    name: 'mySurvey',
    components: { MySurveyList }
  }
</script>

