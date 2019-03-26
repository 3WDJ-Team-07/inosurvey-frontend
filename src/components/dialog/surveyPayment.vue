/* 설문 결제 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isPaymentDialog" persistent max-width="450px">
      <v-card class="pr-5 pl-5 pt-4 pb-4 border_rounded">
		<span 
          class="headline right grey--text" 
          @click="SET_IS_PAYMENT_SURVEY(false)">
          <i class="fas fa-times"></i>
        </span>
        <v-layout column align-center class="pt-4 pb-4">
          <v-card-title>
          	<span class="headline font-weight-bold">모든 작성란을 채워 주세요.</span>
					</v-card-title>
					<v-card-title>
						<span class="title font-weight-bold">모든 작성란을 채워 주세요.</span>
					</v-card-title>
					<v-card-title>
						<span class="title font-weight-bold">모든 작성란을 채워 주세요.</span>
					</v-card-title>
				</v-layout>
        <v-card-actions class="pr-4 pl-4 pb-4">
          <v-btn block color="#EF6C00" class="font-weight-black headline" dark large @click="payment">결제</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'surveyPayment',
  computed: {
    ...mapState([
      'isPaymentDialog'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_IS_PAYMENT_SURVEY'
		]),
		payment(){
			this.SET_IS_PAYMENT_SURVEY(false)
			this.$router.push('/surveyComplete')
		}
  }
}
</script>

<style scoped>
	*{
		overflow: hidden;
	}
	.border_rounded{
		border-radius: 7%;
	}
</style>