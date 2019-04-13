/* 확인란문제 */

<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">질문 {{question.index}}.</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
    <div>
      <v-layout row wrap class="pl-5">
        <item 
          v-if="question.type=='multiple'
          && question.question_bank==false"
          v-for="(multipleValue, index) in question.items"
          :key="index"
          :inputQuestion="inputQuestion"
          :multipleValue="multipleValue"
          :questionIndex="question.index"
          :itemIndex="index"
        />
      </v-layout>
      <v-divider class="pa-5"></v-divider>
    </div>
  </div>
</template>

<script>
  import item from './item'

  export default {
    props:{
      question: {type:Object},
      inputQuestion: {type:Boolean},
    },
    components:{
      item
    }
  }
</script>

<style>

</style>
