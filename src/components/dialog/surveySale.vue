/* 판매할 설문 리스트 모달창 */
// 리스트가 바로 뜨지 않고 마켓 페이지가 다시 로딩 되었을때 뜨는 문제점 해결해야됨
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
              <input
              type="radio"  name="sellSurvey"
              v-bind:value="survey.id" v-model="pickedSurvey"
              class="ml-3 mr-3 mb-3">
              {{survey.title}}
            </div>
          </v-card-text>
        </v-layout>
        <v-card-actions class="pr-4 pl-4 pb-4">
          <!-- router !!!!!! missing param 경고 해결하기 -->
          <router-link
          :to="{ name : 'surveymarketsell',
          params: { sell_id: pickedSurvey } }" >
            <v-btn color="info" large @click="sale">판매하기</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { market } from '@/api/index'

  export default {
    name: 'surveySale',
    props:['userinfo'],
    data(){
      return {
        pickedSurvey:'',
        sellSurvey: []
      }
    },
    mounted() {
      this.fetchSellList()
    },
    computed: {
      ...mapState(['isSaleDialog']),
    },
    methods: {
      ...mapMutations(['SET_IS_SURVEY_SALE']),
      sale(){
        this.SET_IS_SURVEY_SALE(false);
      },
      fetchSellList() {
        return market.marketSell({ id: this.userinfo.id })
        .then(response => {
          this.sellSurvey = response.list
        })
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