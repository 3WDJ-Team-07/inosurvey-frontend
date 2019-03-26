/* 상품작성 폼(타이틀바)
    1. 빈값일때는 받지않기 구현하기 
    2. 요청페이지에도 동일한 컴포넌트 사용문제 
*/

<template>
  <div fluid grid-list-md>
    <v-layout row wrap class="mt-3">
      <div 
        class="display-1 
        font-weight-bold pt-3 ml-4"
        v-html="surveyTitle">
      </div> 
      <v-spacer/>
      <v-layout row wrap justify-end>
        <v-flex sm3>
          <v-select
            label="설문주제선택"
            class="pr-4 pl-5 mt-2 "
            hide-details
            v-model="category"
            :items="category_item"
            append-icon="arrow_drop_down">
          </v-select>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data(){
      return{
        category: null,
        category_item: ['생활','제품','경제','교육','기타'], 
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
