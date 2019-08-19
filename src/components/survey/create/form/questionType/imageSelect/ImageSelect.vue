<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">質問 {{question.index-1}}.</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4 font-weight-bold">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
    <div class="ma-3">
      <v-layout row wrap>
        <item 
          v-for="(ImageValue, index) in question.items"
          :key="index"
          :itemIndex = "index"
          :ImageValue = "ImageValue"
          :inputQuestion = "inputQuestion"
          :questionIndex="question.index"
        ></item>
        </v-layout>
      </div>
      <v-divider class="pa-5"></v-divider>
    </div>
</template>

<script>
  import item           from './item'
  import {mapMutations} from 'vuex'

  export default {
    props: [
      'question',
      'inputQuestion'
    ],
    components: { item },
    data() {
      return{
        ImageValues: { value: '' || "内容を指定してください。", image:'' }
      }
    },
    created() {
      this.INPUT_ITEMS({
        items: this.ImageValues,
        questionIndex: this.question.index
      })
    },
    methods: {
      ...mapMutations(['INPUT_ITEMS']),
    },  
  }
</script>

<style scoped>
  .hober_style{
    transition: background-color 0.5s ease;
  }
  .hover_style:hover{
    background-color: skyblue;
  }
</style>
