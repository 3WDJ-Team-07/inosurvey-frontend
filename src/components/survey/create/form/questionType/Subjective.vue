<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">질문 {{question.index}}.</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4 font-weight-bold">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
    <div>
      <v-layout row wrap justify-center>
        <v-flex xs10>
          <v-text-field
          solo flat
          name="name" box
          label="답을 입력하세요."
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-divider class="pa-5"></v-divider>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      question: {type:Object},
      inputQuestion: {type:Boolean},
    },
  }
</script>