/* 확인란문제 */

<template>
  <div>
    <v-layout row wrap class="pl-5">
      <v-flex xs6 class="pb-4">
        <input class="mr-4" type="checkbox">
        <input v-if="!inputQuestion" 
        v-model="FirstMultipleValue"
        type="text" label="질문을 입력하세요."
        class="form-control subheading"
        >
        <label v-else class="title">{{FirstMultipleValue}}</label>
        <v-icon 
        v-if="!inputQuestion"
        color="red" class="ml-2" 
        @click="addNewMultipleChoice" 
        style="line-height:20px;"
        >add_box</v-icon>
        <v-icon 
        v-if="!inputQuestion"
        color="grey"
        style="line-height:20px;"
        >indeterminate_check_box
        </v-icon>
      </v-flex>

      <v-flex xs6 v-for="(MultipleValue, index) in MultipleValues" class="pb-4">
        <input class="mr-4" type="checkbox">
        <input v-if="!inputQuestion" 
        v-model="MultipleValue.value" 
        type="text" label="질문을 입력하세요."
        class="form-control subheading"
        >
        <label v-else class="title">{{MultipleValue.value}}</label>
        <v-icon 
        v-if="!inputQuestion"
        color="red" 
        class="ml-2" 
        @click="addNewMultipleChoice" 
        style="line-height:20px;"
        >add_box</v-icon>
        <v-icon 
        v-if="!inputQuestion"
        color="green" 
        @click="removeMultipleChoice(index)" 
        style="line-height:20px;"
        >indeterminate_check_box</v-icon>
      </v-flex>
    </v-layout>
    <v-divider class="pa-5"></v-divider>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    props:['inputQuestion'],
    data(){
      return{
        FirstMultipleValue:'' || "질문을 지정해주세요.",  // 첫번째 보여주기 다수선택
        MultipleValue: {  // 다수선택
          value: '' || "질문을 지정해주세요."
        },
        MultipleValues: [],
      }
    },
    methods: {
      addNewMultipleChoice() {
          this.MultipleValues.push(Vue.util.extend({}, this.MultipleValue))
      },
      removeMultipleChoice(index) {
        Vue.delete(this.MultipleValues, index)
      },
    },
  }
</script>

<style>

</style>
