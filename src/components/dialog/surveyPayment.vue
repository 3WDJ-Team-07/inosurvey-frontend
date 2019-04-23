/* 설문결제 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isPaymentDialog" persistent max-width="600px">
      <v-card class="pb-5 pt-4 pl-5 pr-5 border_rounded">
		    <span 
          class="headline right grey--text" 
          @click="SET_IS_PAYMENT_SURVEY(false)">
          <i class="fas fa-times"></i>
        </span>
        <v-layout column align-center class="pt-4 pb-4">
          <v-card-title>
          	<span class="display-1 font-weight-bold pa-5 grey--text">{{this.$store.state.formTitle}}</span>
					</v-card-title>
					<div class="headline font-weight-bold pb-3">문항당 요금 {{questionNumberPay}} 이노</div>
					<div class="headline font-weight-bold pb-4">응답자 수{{responseNumber}} 명</div>
          <div class="headline font-weight-bold pa-3">결제 금액 {{total}} 이노를</div>
          <div class="headline font-weight-bold">결제합니다.</div>
				</v-layout>
        <v-card-actions class="pr-4 pl-4 pb-4">
          <v-btn block color="#EF6C00" class="font-weight-black headline" dark large @click="payment()">결제</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'surveyPayment',
    props: ['total','responseNumber'],
    data() {
      return {
        questionNumberPay:10, // 문제당 요금
      }
    },
    computed: {
      // 설문결제 모달 상태값
      ...mapState(['isPaymentDialog','form','userinfo'])
    },
    methods: {
      // 설문결제 모달 상태값 변이 
      ...mapMutations(['SET_IS_PAYMENT_SURVEY']),
      ...mapActions(['REQUEST_SURVEY_FORM']),
      // 결제시 모달 닫기/이동
      payment(){
        this.REQUEST_SURVEY_FORM({ user_id: this.userinfo.id})
        this.SET_IS_PAYMENT_SURVEY(false)
        this.$router.push('surveycomplete')
      }
    }
  }
</script>

<style scoped>
	*{
		overflow: hidden;
	}
	.border_rounded{
		border-radius: 5%;
	}
</style>