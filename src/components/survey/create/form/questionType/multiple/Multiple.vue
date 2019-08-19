<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">質問 {{question.index-1}}.</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4 font-weight-bold">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
    <div>
      <v-layout row wrap class="pl-5">
        <item 
          v-for="(multipleValue, index) in question.items"
          :key="index"
          :itemIndex="index"
          :multipleValue="multipleValue"
          :inputQuestion="inputQuestion"
          :questionIndex="question.index"
        /></item>
      </v-layout>
      <v-divider class="pa-5"></v-divider>
    </div>
  </div>
</template>

<script>
  import item             from './item'
  import { mapMutations } from 'vuex';

  export default {
    props: [
      'question',
      'inputQuestion'
    ],
    components: { item },
    data() {
      return {
        MultipleValues: { value: '' || "タイトルをご記入ください。" }
      }
    },
    mounted() {
      this.INPUT_ITEMS({
        items: this.MultipleValues,
        questionIndex: this.question.index
      })
    },
    methods: {
      ...mapMutations(['INPUT_ITEMS'])
    },
  }
</script>

<style>

</style>
