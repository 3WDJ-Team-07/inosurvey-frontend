<template>
  <div class="ma-3" >
    <span class="subheading">{{itemIndex+1}} .</span>
    <input class="ml-5 mr-4" type="radio">
    <input 
      v-if="!inputQuestion" 
      :placeholder="singleValue"
      v-model="item"
      type="text" 
      class="form-control subheading" 
    >
    <label v-else class="title">{{singleValue}}</label>
    <v-icon 
      v-if="!inputQuestion"
      color="red" large
      class="ml-4" 
      @click="addNewSingleChoice" 
      style="line-height:20px;"
    >add_box</v-icon>
    <v-icon 
      v-if="!inputQuestion"
      :disabled="singleValue.itemIndex == 0"
      color="green" large
      style="line-height:20px;"
      @click="removeSingleChoice()"
    >indeterminate_check_box</v-icon>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex';

  export default {
    props:['singleValue','inputQuestion','questionIndex','itemIndex'],
    data(){
      return{
        item : "질문을 입력해주세요",
      }
    },
    methods: {
      ...mapMutations(['REMOVE_ITEM']),
      ...mapActions(['INPUT_ITEMS']),
      addNewSingleChoice() {
        this.INPUT_ITEMS({
          items: "질문을 입력해주세요",
          questionIndex: this.questionIndex
        })
      },
      removeSingleChoice(){
        this.REMOVE_ITEM({
          questionIndex: this.questionIndex,
          itemIndex: this.itemindex
        })
      }
    },
  }
</script>

<style>

</style>
