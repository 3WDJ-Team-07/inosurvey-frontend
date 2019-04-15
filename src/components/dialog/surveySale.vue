/* 설문판매 모달창 */
<template>
  <v-layout row justify-center>
    <v-dialog v-model="isSaleDialog" persistent max-width="450px">
      <v-card class="pr-5 pl-5 pt-4 pb-4 border_rounded">
        <span 
          class="headline right grey--text" 
          @click="SET_IS_SURVEY_SALE(false)">
          <i class="fas fa-times"></i>
        </span>
        <v-layout column align-center class="pt-4 pb-4">
          <v-card-title>
            <span class="headline font-weight-bold">판매할 설문 선택</span>
          </v-card-title>
          <v-card-text>
            <div class="title">
              <input type="radio" name="saleSurvey" value="survey1" class="ml-3 mr-3 mb-3">
              설문조사1
            </div>
            <div class="title">
              <input type="radio" name="saleSurvey" value="survey2" class="ml-3 mr-3 mb-3">
              설문조사2
            </div>
            <div class="title">
              <input type="radio" name="saleSurvey" value="survey3" class="ml-3 mr-3 mb-3">
              설문조사3
            </div>
            <div class="title">
              <input type="radio" name="saleSurvey" value="survey4" class="ml-3 mr-3 mb-3">
              설문조사4
            </div>
          </v-card-text>
        </v-layout>
        <v-card-actions class="pr-4 pl-4 pb-4">
          <v-btn block color="info" large @click="sale">판매하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'surveySale',
  computed: {
    ...mapState(['isSaleDialog'])
  },
  methods: {
    ...mapMutations(['SET_IS_SURVEY_SALE']),
		sale(){
      this.SET_IS_SURVEY_SALE(false);
      this.$router.push('sell')
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