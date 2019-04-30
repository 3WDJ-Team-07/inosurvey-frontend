/* 설문판매 모달창 */
<template lang="html">
  <v-layout row>
    <v-dialog v-model="isSaleDialog" persistent max-width="450px">
      <v-card class="pr-5 pl-5 pt-4 pb-4 border_rounded">
        <span 
          class="headline right grey--text" 
          @click="SET_IS_SURVEY_SALE(false)">
          <i class="fas fa-times"></i>
        </span>
        <v-layout column align-center class="pt-4 pb-4">
          <v-card-title>
            <span class="headline font-weight-bold"> 판매할 설문 선택</span>
          </v-card-title>
          <v-card-text>
            <div v-for="(survey) in sellSurvey" class="title">
              <input type="radio" v-bind:value="survey.id" name="sellSurvey" v-model="pickedSurvey" class="ml-3 mr-3 mb-3">
              {{survey.title}}
            </div>
            selectedSurvey ID : {{pickedSurvey}}
          </v-card-text>
        </v-layout>
        <v-card-actions class="pr-4 pl-4 pb-4">
          <!-- 설문의 id값 marketsell에 넘겨주기
          !!!!!! missing param 경고 뜸 -->
          <router-link :to="{ name : 'surveymarketsell', params: { sell_id: pickedSurvey} }" >
            <v-btn color="info" large @click="sale">판매하기</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  export default {
    name: 'surveySale',
    // marketJumbotron에서 데이터 받아오기
    props:['sellSurvey','userinfo'],
    data(){
      return {
        pickedSurvey:''
      }
    },
    computed: {
      ...mapState(['isSaleDialog']),
    },
    // created(){
    //   this.FETCH_SELL({
    //     id: this.userinfo.id 
    //   })
    // },
    methods: {
      ...mapMutations(['SET_IS_SURVEY_SALE']),
      // ...mapActions(['FETCH_SELL']),
      sale(){
        this.SET_IS_SURVEY_SALE(false);
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