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
  import formHead    from '@/components/survey/create/form/formHead'
  import question    from '@/components/survey/create/form/question'
  import AddQuestion from '@/components/survey/create/form/AddQuestion'
  import {mapState}  from 'vuex'
  import {EventBus}  from '@/utils/bus'

  export default {

    name: 'formbody',
    components:{
      formHead,
      question,
      AddQuestion,
    },
    data() {
      return{
        responseColor: '#ffffff'
      }
    },
    beforeCreate() {
      // 시작되기전에 생성하지않으면 오류 이벤트버스 반응이 마운트되는 속도보다 빨라서 undefind
      this.responseColor = '#ffffff' 
    },
    beforeMount() {
      EventBus.$on("ColorEventBus", value => {
        this.responseColor = value
        this.$refs.formColor.style.background = this.responseColor
      })
    },
    computed: {
			...mapState(['surveyTitle']),
		},
  }
</script>

<style scoped>
  .scroll_style{
     overflow-y:auto;
     height:800px;
     transition: all 1s;
  }
</style>