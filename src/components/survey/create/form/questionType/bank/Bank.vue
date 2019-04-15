/* 질문은행 질문 
   아이템을 받으면 아이템을가지고
   첫번째 보여주는 문제를 for문으로 
   반복해서 보여준다 
*/

<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">질문 {{ question.index }} .</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4 font-weight-bold">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
		<div>
			<ul>
        <li v-for="(bankItem, index) in question.items" :key="index">
          <div class="ma-3">
            <span 
              class="mr-4 font-weight-bold 
              pr-2 pl-2 pt-1 pb-1 border_style">
              <span class="subheading">{{index + 1}}</span>
            </span>
            <input v-if="!inputQuestion"
              v-model="bankItem.value"
              type="text" 
              class="form-control subheading" 
            >
            <label v-else class="title font-weight-bold">{{bankItem.value}}</label>
            <v-icon 
              v-if="!inputQuestion"
              color="grey" large
              class="ml-4" 
              style="line-height:20px;"
            >add_box</v-icon>
            <v-icon 
              v-if="!inputQuestion"
              color="grey" large
              style="line-height:20px;"
            >indeterminate_check_box</v-icon>
          </div>
        </li>
        <!-- <item v-for="(bankItem, index) in question.items"
        :bankItem="bankItem"
        :itemIndex = "index"
        :inputQuestion = "inputQuestion"
        :questionIndex="question.index">
        </item> -->
      </ul>
    </div>
    <v-divider class="pa-4 mt-5"></v-divider>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  // import item from './item'

  export default {
    props:['question','inputQuestion'],
    // components:{item},
    data(){
      return{
        BankValues: { value: '' || "질문을 지정해주세요." },
      }
    },
    created(){
      this.INPUT_ITEMS({
        items: this.BankValues,
        questionIndex: this.question.index
      })
    },
    
    methods: {
      ...mapMutations(['INPUT_ITEMS']),
    },
  }
</script>

<style scoped>
  .border_style{
    border:1px solid grey;
    border-radius:50%;
    margin-left: 3px;
  }
</style>
