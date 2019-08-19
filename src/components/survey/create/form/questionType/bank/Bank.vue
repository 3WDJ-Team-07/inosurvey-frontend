<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">質問 {{ question.index-1 }} .</span>
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
      </ul>
    </div>
    <v-divider class="pa-4 mt-5"></v-divider>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    props: [
      'question',
      'inputQuestion'
    ],
    data() {
      return{
        BankValues: { value: '' || "質問をご記入ください。" },
      }
    },
    created() {
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
