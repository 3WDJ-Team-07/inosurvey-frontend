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
        <v-layout column align-center class="py-3">
          <v-flex xs12>
             <v-card-title>
            <span class="display-1 font-weight-bold mx-4">판매할 설문 선택</span>
          </v-card-title>
          <v-card-text >
            <div v-for="(survey) in sellSurvey" class="title py-3">
              <span class="mx-5">
                 <input
                  type="radio" name="sellSurvey" class=" radio_btn mr-5"
                  v-bind:value="survey.id" v-model="pickedSurvey" :id="survey.id"
                 >
                 <label :for="survey.id" class="radio_label font-weight-bold">{{survey.title}}</label>
              </span>
            </div>
          </v-card-text>
          </v-flex>
        </v-layout>
        <v-flex xs12>
          <v-card-actions>
          <v-btn
            color="info" block round @click="sale"
            class="mb-2 py-4"
            :to="{
              name : 'marketsale',
              params: { sell_id: pickedSurvey }
            }">
            판매하기
          </v-btn>
        </v-card-actions>
        </v-flex>
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
      }
    },
    created() {
      this.fetchSellList()
      console.log(1111, this.pickedSurvey);
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

.radio_btn{
  appearance:none;
  width: 15px;
  height: 15px;
  box-shadow:
    inset 0 0 0 .4em white,
    0 0 0 .3em;
  border-radius: 50%;
  transition: .1s;
  cursor:pointer;
  color: #999999;

}

  .radio_btn:checked {
    outline: 0;
    background-color:#2196f3;
    box-shadow:
      inset 0 0 0 .2em white,
      0 0 0 .3em #2196f3
  }
</style>