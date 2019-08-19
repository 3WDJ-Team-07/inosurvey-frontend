/* 판매할 설문 리스트 모달창 */
<template lang="html">
  <v-layout>
    <v-dialog v-model="isSaleDialog" persistent max-width="600px">
      <v-card class="pr-5 pl-5 pt-4 pb-4 border_rounded">
      <span v-if="!this.$store.state.loading">
        <span 
          class="title right grey--text" 
          @click="SET_IS_SURVEY_SALE(false)">
          <i class="fas fa-times fa-2x" style="cursor:pointer"></i>
        </span>
        <span v-if="sellSurvey.length !== 0">
          <v-layout column align-center class="py-5">
            <v-flex xs12>
              <v-card-title>
              <span class="display-1 font-weight-bold mx-5">販売するアンケート選択</span>
            </v-card-title>
            <v-card-text >
              <div v-for="(survey) in SortSellSurvey" class="title py-3">
                <span class="mx-5">
                  <input
                    type="radio" name="sellSurvey" class=" radio_btn mr-4"
                    :value="survey.id" v-model="pickedSurvey" :id="survey.id"
                  >
                  <label :for="survey.id" class="radio_label font-weight-bold">{{survey.title}}</label>
                </span>
              </div>
            </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <router-link :to="{
                name : 'marketsale',
                params: { sell_id: pickedSurvey }
              }">
              <v-btn color="info" block style="width:400px;" large round @click="sale">販売</v-btn>
            </router-link>
          </v-layout>
        </span>
        <span v-else>
          <v-layout row wrap justify-center>
              <v-card-title class="headline pa-5">
                見つかりません…
              </v-card-title>
          </v-layout>
        </span>
        </v-flex>
        </span>
        <Spinner3 v-else/>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import { market } from '@/api/index'
  import Spinner3   from '@/components/Spinner3'

  export default {
    name: 'surveySale',
    components: {
      Spinner3
    },
    props: ['userinfo'],
    data() {
      return {
        pickedSurvey: '',
      }
    },
    mounted() {
      this.FETCH_SELL({ id: this.userinfo.id })
    },
    computed: {
      ...mapState(['isSaleDialog', 'sellSurvey']),
      SortSellSurvey() {
        this.sellSurvey.sort((x,y) => { return y.id - x.id })
        return this.sellSurvey
      }
    },
    methods: {
      ...mapMutations(['SET_IS_SURVEY_SALE']),
      ...mapActions(['FETCH_SELL']),
      sale(){
        this.SET_IS_SURVEY_SALE(false);
      },
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