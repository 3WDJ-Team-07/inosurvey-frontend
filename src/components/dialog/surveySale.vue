/* 판매할 설문 리스트 모달창 */
<template lang="html">
  <v-layout>
    <v-dialog v-model="isSaleDialog" persistent max-width="450px"  >
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
          <v-card-text >
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
          <router-link
          :to="{ name : 'marketsale',
          params: { sell_id: pickedSurvey } }" >
            <v-btn color="info" large @click="sale" :disabled="!btn">판매하기</v-btn>
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
        sellSurvey: [],
        btn:true
      }
    },
    created() {
      this.fetchSellList()
      console.log(1111, this.pickedSurvey);
    },
    computed: {
      ...mapState(['isSaleDialog']),
    },
    watch:{
      test(){
        if(!pickedSurvey.length == 0){
          this.btn=true
        }
        console.log(pickedSurvey)
      }
    },
    methods: {
      ...mapMutations(['SET_IS_SURVEY_SALE']),
      sale(){
        this.SET_IS_SURVEY_SALE(false);
      },
      fetchSellList() {
        return market.marketSell({ id: this.userinfo.id })
        .then(response => {
           this.$store.state.loading = false
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