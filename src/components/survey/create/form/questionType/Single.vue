/* 객관식 */

<template>
  <div>
		<div>
			<ul>
        <li>
          <div class="ma-3">
            <input class="ml-5 mr-4" type="radio">
            <input v-if="!inputQuestion" 
              v-model="FirstSingleValue"
              type="text" 
              class="form-control subheading" 
              label="질문을 입력하세요."
            >
            <label v-else class="title">{{FirstSingleValue}}</label>
            <v-icon 
              v-if="!inputQuestion"
              color="red" large 
              class="ml-4" @click="addNewSingleChoice" 
              style="line-height:20px;"
            >add_box</v-icon>
            <v-icon 
              v-if="!inputQuestion"
              color="grey" large
              style="line-height:20px;"
            >indeterminate_check_box</v-icon>
          </div>
        </li>
        <li>
          <div class="ma-3" v-for="(SingleValue, index) in SingleValues">
            <input class="ml-5 mr-4" type="radio">
            <input v-if="!inputQuestion" 
              v-model="SingleValue.value" 
              type="text" 
              class="form-control subheading" 
              label="질문을 입력하세요."
            >
            <label v-else class="title">{{SingleValue.value}}</label>
            <v-icon 
              v-if="!inputQuestion"
              color="red" large
              class="ml-4" 
              @click="addNewSingleChoice" 
              style="line-height:20px;"
            >add_box</v-icon>
            <v-icon 
              v-if="!inputQuestion"
              color="green" large
              style="line-height:20px;"
              @click="removeSingleChoice(index)"
            >indeterminate_check_box</v-icon>
          </div>
        </li>
      </ul>
    </div>
    <v-divider class="pa-4 mt-5"></v-divider>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    props:['inputQuestion'],
    data(){
      return{
        FirstSingleValue:'' || "질문을 지정해주세요.",  // 첫번째 보여주기 객관식
        SingleValue: {  // 객관식
          value: '' || "질문을 지정해주세요."
        },
        SingleValues: [],
      }
    },
    methods: {
      addNewSingleChoice() {
          this.SingleValues.push(Vue.util.extend({}, this.SingleValue))
      },
      removeSingleChoice(index) {
        Vue.delete(this.SingleValues, index)
      },
    },
  }
</script>

<style>

</style>
