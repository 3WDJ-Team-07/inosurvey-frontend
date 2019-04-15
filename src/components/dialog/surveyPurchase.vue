/* 설문구매 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isPurchaseDialog" hide-overlay persistent max-width="350px">
      <v-card color="info" class="pa-3 border_rounded">
		  <span
        class="pr-1 pt-1 right white--text" 
        @click="SET_IS_SURVEY_PURCHASE(false)">
        <i class="fas fa-times"></i>
      </span>
      <v-layout column align-center>
        <v-card-text class="subheading font-weight-bold  white--text">
          <span>직장인 피로도 설문조사</span>를 <span>60</span>이노에 구매하시겠습니까?
        </v-card-text>
			</v-layout>
        <v-card-actions class="pb-4">
          <v-btn block color="white" class="info--text font-weight-bold" @click="purchase">결제하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'surveyPurchase',
    computed: {
      ...mapState(['isPurchaseDialog'])
    },
    methods: {
      ...mapMutations([
      'SET_IS_SURVEY_PURCHASE'
      ]),
      purchase(){
        this.SET_IS_SURVEY_PURCHASE(false);
        this.$router.replace("surveymarket")
      }
    }
  }
</script>

<style scoped>
	*{
		overflow: hidden;
	}
	.border_rounded{
		border-radius: 20px;
	}
  .subheading{
    line-height: 1.5em
  }
</style>