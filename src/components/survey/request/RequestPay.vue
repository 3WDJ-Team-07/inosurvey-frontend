/* 설문요청페이지(결제)
	1. 테이블은 임시로 지정
*/

<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="display-1 pb-4">설문 견적</div>
    </v-layout>
    <v-card fluid grid-list-sm class="border_style pa-5">
      <v-layout column wrap>
        <div class="pa-3 mt-2 font-weight-bold display-2">
          <v-layout row wrap justify-space-between>
            <span>총요금</span>
            <span>10,000</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-5"/>
        <div justify-space-between class="pa-4 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>예상 응답자수</span>
            <span>1000 명</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-2"/>
        <div justify-space-between class="pa-4 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>문항 개수</span>
            <span>2 문항</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-2"/>
        <div justify-space-between class="pa-4 mb-5 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>문항당 요금</span>
            <span>10</span>
          </v-layout>
        </div>
      </v-layout>
      <v-divider class="mt-5"/>
      <v-btn class="mt-5 title font-weight-bold" large color="info" block @click="SET_IS_PAYMENT_SURVEY(true)">확인 ( 결제 )</v-btn>
    </v-card>
    <surveyPayment/>
  </v-container>
</template>

<script>
  import { mapMutations } from 'vuex'
  import surveyPayment from '@/components/dialog/surveyPayment'

	export default {
    name: 'requestPay',
    components: {
      surveyPayment
    },
		data(){
			return{
				items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
			}
    },
    methods: {
      ...mapMutations([
        'SET_IS_PAYMENT_SURVEY'
      ])
    }
	}
</script>

<style scoped>
  .border_style {
    border: 1px solid lightgray;
  }
</style>
