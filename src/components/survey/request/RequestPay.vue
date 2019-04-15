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
            <span>{{total}} 이노</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-5"/>
        <div justify-space-between class="pa-4 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>예상 응답자수</span>
            <span ref="targetNumber">{{responseNumber}} 명</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-2"/>
        <div justify-space-between class="pa-4 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>문항 개수</span>
            <span>{{this.$store.state.form.list.length}} 문항</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-2"/>
        <div justify-space-between class="pa-4 mb-5 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>문항당 요금</span>
            <span>{{questionNumberPay}} 이노</span>
          </v-layout>
        </div>
      </v-layout>
      <v-divider class="mt-5"/>
      <v-btn 
        class="mt-5 title font-weight-bold" 
        large color="info" block 
        @click="targetSave">
        확인 ( 결제 )
      </v-btn>
    </v-card>
    <surveyPayment :responseNumber = "responseNumber" :total ="total"/>
  </v-container>
</template>

<script>
  import { mapMutations } from 'vuex'
  import surveyPayment from '@/components/dialog/surveyPayment'
  import { EventBus } from '@/utils/bus'

	export default {
    name: 'requestPay',
    components: {
      surveyPayment
    },
		data(){
			return{
        responseNumber:50,  // 응답자수
        questionNumberPay:10, // 문제당 요금,
        gender:0,
        age:0,
        job:0
			}
    },
    // 이상하게 마운트될때 값을 바꿔줘야 v-model 값이 변동가능 
    mounted(){
      this.responseNumber=100
    },
    computed: {
      total(){
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return (this.responseNumber * this.questionNumberPay * this.$store.state.form.list.length).toString().replace(regexp, ',');
      }
    },
    updated() {
      EventBus.$on('responseNumber', response => this.responseNumber = response)
      EventBus.$on('gender', response => this.gender = response)
      EventBus.$on('age', response => this.age = response)
      EventBus.$on('job', response => this.job = response)
    },  
    methods: {
      ...mapMutations([
        'SET_IS_PAYMENT_SURVEY',
        'INPUT_FORM_TARGET'
      ]),
      targetSave(){
        this.INPUT_FORM_TARGET({
          gender: this.gender,
          age: this.age,
          job: this.job,
          responseNumber: this.responseNumber
        })
        this.SET_IS_PAYMENT_SURVEY(true)
      }
    }
	}
</script>

<style scoped>
  .border_style {
    border: 1px solid lightgray;
  }
</style>
