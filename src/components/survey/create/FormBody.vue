/* 상품작성 폼(바디) */

<template>
  <v-container fluid grid-list-md class="scroll_style">
    <v-layout row wrap>
      <questionTitle/>
      <questionIntro/>
      <!-- <test/> -->
      <question/>
      <AddQuestion/>
      <v-spacer/>
    </v-layout>
  </v-container>
</template>

<script>
  import questionTitle from '@/components/survey/create/form/questionTitle'
  import questionIntro from '@/components/survey/create/form/questionIntro'
  import question from '@/components/survey/create/form/question'
  import AddQuestion from '@/components/survey/create/form/AddQuestion'
  // import test from '@/components/survey/create/form/test'

  export default {
    name: 'formbody',
    components:{
      questionTitle,
      questionIntro,
      question,
      AddQuestion,
      // test
    }
  }
</script>

<style scoped>
  .scroll_style{
    overflow-y: auto;
    height: 700px;
  }
</style>
