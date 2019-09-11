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
					<div class="headline font-weight-bold pb-3">一項目当たりの価格 {{questionNumberPay}} INO</div>
					<div class="headline font-weight-bold pb-4">回答者数{{responseNumber}} 人</div>
          <div class="headline font-weight-bold pa-3">決済金額 {{total}} INOを</div>
          <div class="headline font-weight-bold">決済します。</div>
				</v-layout>
        <v-card-actions class="pr-4 pl-4 pb-4">
          <v-btn block color="#EF6C00" class="font-weight-black headline" dark large @click="payment">決済</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { userInformation } from '@/api/index'
  import swal                from 'sweetalert'

  export default {
    name: 'surveyPayment',
    props: ['total','responseNumber', 'numberTotal'],
    data() {
      return {
        questionNumberPay:10, // 문제당 요금
        inocoin: {}
      }
    },
    computed: {
      // 설문결제 모달 상태값
      ...mapState([ 'isPaymentDialog', 'form', 'userinfo' ]),
      currentIno() {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        var ino = this.inocoin.current_ino + ""
        return ino.replace(regexp, ',')
      }
    },
    mounted() {
      this.fetchCoin()
    },
    methods: {
      // 설문결제 모달 상태값 변이 
      ...mapMutations(['SET_IS_PAYMENT_SURVEY']),
      ...mapActions(['REQUEST_SURVEY_FORM']),
      fetchCoin() {
        return userInformation.userCoin({ id: this.userinfo.id })
        .then(response => {
          this.inocoin = response
        })
      },
      // 결제시 모달 닫기/이동
      payment(){
        if(Number(this.inocoin.current_ino) >= this.numberTotal) {
          this.REQUEST_SURVEY_FORM()
          this.SET_IS_PAYMENT_SURVEY(false)
          this.$router.push('surveycomplete')
        }else {
          swal("INOが足りないです！", `\n今、INOを充填しますか ? \n\n保有INO : ${this.currentIno} INO`,
          {icon: "warning", buttons: true, dangerMode: true,})
          .then(response => {
            if(response) {
              //  이노충전하러가기 
            }
          })
        }
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