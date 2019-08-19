<template>
  <v-flex xs6 class="pb-4">
    <span 
      class="mr-4 font-weight-bold 
      pr-2 pl-2 pt-1 pb-1 border_style">
      <span class="subheading">{{itemIndex+1}}</span>
    </span>
    <input 
      v-if="!inputQuestion" 
      v-model="multipleValue.value" 
      type="text"
      class="form-control subheading"
    >
    <label v-else class="title font-weight-bold">{{multipleValue.value}}</label>
    <v-icon 
      v-if="!inputQuestion"
      color="red" class="ml-2" 
      @click="addNewMultipleChoice" 
      style="line-height:20px;"
    >add_box</v-icon>
    <v-icon 
      v-if="!inputQuestion"
      color="green" 
      style="line-height:20px;"
      @click="removeMultipleChoice(itemIndex)" 
    >indeterminate_check_box</v-icon>
  </v-flex>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex';

  export default {
    props: [
      'multipleValue',
      'inputQuestion',
      'questionIndex',
      'itemIndex'
    ],
    data() {
      return {
        multipleValues: { value: '' || "タイトルをご記入ください" }
      }
    },
    methods: {
      ...mapMutations(['INPUT_ITEMS','REMOVE_ITEM']),
      addNewMultipleChoice() {
        this.INPUT_ITEMS({
          items: this.multipleValues,
          questionIndex: this.questionIndex
        })
      },
      removeMultipleChoice(itemIndex) {
        this.REMOVE_ITEM({
          questionIndex: this.questionIndex,
          itemIndex: itemIndex
        })
      },
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
