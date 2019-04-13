/* 질문은행 질문 
   아이템을 받으면 아이템을가지고
   첫번째 보여주는 문제를 for문으로 
   반복해서 보여준다 
*/

<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">질문 {{ question.index }} .</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
		<div>
			<ul>
        <li>
          <div class="ma-3" v-for="(item, index) in question.items">
            <input class="ml-5 mr-4" type="radio">
            <input v-if="!inputQuestion"
              :value="item"
              type="text" 
              class="form-control subheading" 
            >
            <label v-else class="title">{{item}}</label>
            <v-icon 
              v-if="!inputQuestion"
              color="red" large
              class="ml-4" 
              @click="addNewBankChoice" 
              style="line-height:20px;"
            >add_box</v-icon>
            <v-icon 
              v-if="!inputQuestion"
              disabled
              color="green" large
              style="line-height:20px;"
              @click="removeBankChoice(index)"
            >indeterminate_check_box</v-icon>
          </div>
        </li>
        <li>
          <div class="ma-3" v-for="(bankValue, index) in BankValues">
            <input class="ml-5 mr-4" type="radio">
            <input v-if="!inputQuestion" 
              v-model="bankValue.value" 
              type="text"
              class="form-control subheading" 
              label="질문을 입력하세요."
            >
            <label v-else class="title">{{bankValue.value}}</label>
            <v-icon 
              v-if="!inputQuestion"
              color="red" large
              class="ml-4" 
              @click="addNewBankChoice" 
              style="line-height:20px;"
            >add_box</v-icon>
            <v-icon 
              v-if="!inputQuestion"
              color="green" large
              style="line-height:20px;"
              @click="removeBankChoice(index)"
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
  import {mapState} from 'vuex'

  export default {
    props:{
      question: {type:Object},
      inputQuestion: {type:Boolean},
    },
    data(){
      return{
        bankValue: { value: '' || "질문을 지정해주세요." },
        BankValues: [],
      }
    },
    methods: {
      addNewBankChoice() {
        this.BankValues.push(Vue.util.extend({}, this.bankValue))
      },
      removeBankChoice(index) {
        Vue.delete(this.BankValues, index)
      },
    },
  }
</script>

<style>

</style>
