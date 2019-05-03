/* 판매할 설문 리스트 모달창 */

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
            <v-layout column wrap align-center>
              <div v-for="(survey, index) in saleDetailList" :key="index" class="title pa-2 form-radio-text">
              <input
              type="radio" name="sellSurvey"
              :value="survey.id" :id="survey.id"
              v-model="pickedSurvey"
              class="form-radio ml-3 mr-3 mb-3">
              <label class="headline" :for="survey.id">{{survey.title}}</label> 
              </div>
            </v-layout>
          </v-card-text>
        </v-layout>
        <v-card-actions class="pr-4 pl-4 pb-4">
          <router-link
          :to="{ 
            name : 'surveymarketsell',
            params: { sell_id: pickedSurvey }
          }">
            <v-btn color="info" large @click="sale">판매하기</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { market }                 from '@/api/index'

  export default {
    name: 'surveySale',
    data(){
      return {
        pickedSurvey:'',
        saleDetailList: []
      }
    },
    computed: {
      ...mapState(['isSaleDialog']),
    },
    mounted() {
      this.fetchSelect()
    },
    updated() {
      console.log(this.pickedSurvey)
    },
    methods: {
      ...mapMutations(['SET_IS_SURVEY_SALE']),
      sale(){
        this.SET_IS_SURVEY_SALE(false);
      },
      fetchSelect() {
        return market.TestSelectList()
        .then(response => {
          this.saleDetailList = response.list
        })
      }
    }
  }
</script>

<style scoped>
	*{
		overflow: hidden;
	}
  .form-radio {
    display : none;
  }
  .form-radio-text {
    cursor: pointer;
    width: 100%;
    transition: background-color 1s ease;
  }
  .form-radio-text:hover {
    background-color: grey;
  }
	.border_rounded{
		border-radius: 7%;
	}
</style>