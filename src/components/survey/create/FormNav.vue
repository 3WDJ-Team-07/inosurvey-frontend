/* 상품작성 폼(타이틀바)
    1. 빈값일때는 받지않기 구현하기 
    2. 요청페이지에도 동일한 컴포넌트 사용문제 
*/

<template>
  <div fluid grid-list-md>
    <v-layout column wrap class="mt-3">
      <div 
        class="display-1 
        font-weight-bold pt-3 ml-4"
        v-html="surveyTitle">
      </div> 
      <v-divider class="mt-2"></v-divider>
    </v-layout>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data(){
      return{
       
      }
    },
    computed:{
      ...mapState([
        'surveyTitle'  // 설문제목을 받는다
      ])
    }
  }
</script>

<style>

</style>
