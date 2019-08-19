<template>
  <div class="ma-3">
    <span 
      class="mr-4 font-weight-bold 
      pr-2 pl-2 pt-1 pb-1 border_style">
      <span class="subheading">{{itemIndex+1}}</span>
    </span>
      <input 
        v-if="!inputQuestion" 
        v-model="bankItem.value" 
        type="text"
        class="form-control subheading" 
      >
      <label v-else class="title">{{bankItem.value}}</label>
      <v-icon 
        v-if="!inputQuestion"
        color="red" large
        class="ml-4" 
        @click="addNewBankSingleChoice" 
        style="line-height:20px;"
      >add_box</v-icon>
      <v-icon 
        v-if="!inputQuestion"
        color="green" large
        style="line-height:20px;"
        @click="removeBankSingleChoice(itemIndex)"
      >indeterminate_check_box</v-icon>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex';

  export default {
    props: [
      'bankItem',
      'inputQuestion',
      'questionIndex',
      'itemIndex'
    ],
    data() {
      return {
        bankValues: { value: '' || "質問をご記入ください。" },
      }
    },
    methods: {
      ...mapMutations(['REMOVE_ITEM','INPUT_ITEMS']),
      addNewBankSingleChoice() {
        this.INPUT_ITEMS({
          items: this.bankValues,
          questionIndex: this.questionIndex
        })
      },
      removeBankSingleChoice(itemIndex){
        this.REMOVE_ITEM({
          questionIndex: this.questionIndex,
          itemIndex: itemIndex
        })
      }
    }
  }
</script>

<style scoped>
  .border_style{
    border:1px solid grey;
    border-radius:50%;
    margin-left: 3px;
  }
</style>
