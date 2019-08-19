<template>
  <div class="ma-3">
    <span 
      class="mr-4 font-weight-bold 
      pr-2 pl-2 pt-1 pb-1 border_style">
      <span class="subheading">{{itemIndex+1}}</span>
    </span>
    <input 
      v-if="!inputQuestion" 
      v-model="singleValue.value"
      type="text" 
      class="form-control subheading" 
    >
    <label v-else class="title font-weight-bold">{{singleValue.value}}</label>
    <v-icon 
      v-if="!inputQuestion"
      color="red" large
      ref="AddBtn"
      @click="addNewSingleChoice" 
      style="line-height:20px;"
    >add_box</v-icon>
    <v-icon 
      v-if="!inputQuestion"
      color="green" large
      ref="RemoveBtn"
      style="line-height:20px;"
      @click="removeSingleChoice(itemIndex)"
    >indeterminate_check_box</v-icon>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    props: [
      'singleValue',
      'inputQuestion',
      'questionIndex',
      'itemIndex'
    ],
    data() {
      return {
        SingleValues: { value: '' || "質問をご記入ください。" },
      }
    },
    methods: {
      ...mapMutations(['REMOVE_ITEM','INPUT_ITEMS']),
      addNewSingleChoice() {
        this.INPUT_ITEMS({
          items: this.SingleValues,
          questionIndex: this.questionIndex
        })
      },
      removeSingleChoice(itemIndex){
        this.REMOVE_ITEM({
          questionIndex: this.questionIndex,
          itemIndex: itemIndex
        })
      }
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
