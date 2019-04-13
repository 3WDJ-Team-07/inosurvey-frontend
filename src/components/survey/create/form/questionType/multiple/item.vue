<template>
  <v-flex xs6 class="pb-4">
    <span class="subheading">{{itemIndex+1}} .</span>
    <input class="mr-4" type="checkbox">
    <input v-if="!inputQuestion" 
      v-model="multipleModel" 
      type="text" label="질문을 입력하세요."
      class="form-control subheading"
    >
    <label v-else class="title">{{multipleModel}}</label>
    <v-icon 
      v-if="!inputQuestion"
      :disabled="multipleValue.index==10"
      color="red" 
      class="ml-2" 
      @click="addNewMultipleChoice" 
      style="line-height:20px;"
    >add_box</v-icon>
    <v-icon 
      v-if="!inputQuestion"
      :disabled="multipleValue.index == 0"
      color="green" 
      @click="removeMultipleChoice(multipleValue.index)" 
      style="line-height:20px;"
    >indeterminate_check_box</v-icon>
  </v-flex>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex';

  export default {
    props:['multipleValue','inputQuestion','questionIndex','itemIndex'],
    data(){
      return{
        item : "질문을 입력해주세요",
        multipleModel: this.multipleValue
      }
    },
    methods: {
      ...mapMutations(['REMOVE_ITEM']),
      ...mapActions(['INPUT_ITEMS']),
      addNewMultipleChoice() {
        this.INPUT_ITEMS({
          items: this.item,
          questionIndex: this.questionIndex
        })
      },
      removeMultipleChoice(index) {
        this.REMOVE_ITEM({
          questionIndex: this.questionIndex,
          itemIndex: this.itemIndex
        })
      },
    },
  }
</script>

<style>

</style>
