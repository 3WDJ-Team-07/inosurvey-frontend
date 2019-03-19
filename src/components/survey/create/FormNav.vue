/* 상품작성 폼(타이틀바)
    1. 빈값일때는 받지않기 구현하기 
    2. 요청페이지에도 동일한 컴포넌트 사용문제 
*/

<template>
  <v-container fluid grid-list-md >
    <v-layout row wrap>
      <div 
        class="display-1 
        font-weight-bold" 
        v-html="surveyTitle">
      </div> 
      <v-spacer/>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed:{
      ...mapState([
        'surveyTitle'  // 설문제목을 받는다
      ])
    }
  }
</script>

<style>

</style>
