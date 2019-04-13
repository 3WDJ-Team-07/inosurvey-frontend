/* 상품작성 폼(바디) */

<template>
  <v-container fluid grid-list-md ref="formColor" class="scroll_style">
    <v-layout row wrap>
      <formHead/>
      <question/>
      <AddQuestion/>
      <v-spacer/>
    </v-layout>
  </v-container>
</template>

<script>
  import formHead from '@/components/survey/create/form/formHead'
  import question from '@/components/survey/create/form/question'
  import AddQuestion from '@/components/survey/create/form/AddQuestion'
  import {mapState} from 'vuex'
  import {EventBus} from '@/utils/bus'

  export default {

    name: 'formbody',
    components:{
      formHead,
      question,
      AddQuestion,
    },
    data(){
      return{
        responseColor:'#ffffff'
      }
    },
    mounted(){
      EventBus.$on("ColorEventBus", value => {
        this.responseColor=value
        this.$refs.formColor.style.background = this.responseColor
      })
    },
    computed:{
			// 설문제목을 받는다
			...mapState([
        'surveyTitle',
			]),
		},
  }
</script>

<style scoped>
  .scroll_style{
     overflow-y:auto;
     height:800px;
     background:'';
     transition: all 1s;
  }
</style>