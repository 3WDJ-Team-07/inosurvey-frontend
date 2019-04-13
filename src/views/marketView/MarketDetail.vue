/* 설문마켓 설문상세 */

<template>
  <div>
    <v-container fluid grid-list-md pt-4 mt-5>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#FAFAFA" height="10vh" flat >
            <div fluid grid-list-md>
              <v-layout row wrap>
                <div class="display-1 font-weight-bold pt-3 ml-5 xs-2">직장인 피로도 설문조사</div>
                <v-layout row wrap justify-end>
                  <v-flex sm3>
                    <v-btn large color="info" @click="SET_IS_SURVEY_PURCHASE(true)">구매하기</v-btn>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
          </v-card>
          <v-divider/>
        </v-flex>
        <v-flex xs2 md2>
          <v-card height="80vh" max-width="300" class="pt-5 text-xs-center">
            <v-card flat height="28vh" fill-height>
              <div class="headline font-weight-bold">설문정보</div>
            </v-card>
            <v-card flat  height="40vh" fill-height>
              <div class="headline font-weight-bold">문항</div>
            </v-card>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card height="80vh" class="pa-4">
            <DetailBody/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="purchase_dialog justify-end">
      <surveyPurchase/>
    </div>
  </div>
</template>

<script>
  import DetailBody from '@/components/market/DetailBody'
  import { mapMutations } from 'vuex'
  import surveyPurchase from '@/components/dialog/surveyPurchase'

  export default {
      name: 'marketdetail',
      components: {
        DetailBody,
        surveyPurchase
      },
      methods: {
        ...mapMutations([
          'SET_IS_SURVEY_PURCHASE'
        ])
    }
  }
</script>

<style scoped>
  .purchase_dialog{
    position: absolute;
    bottom:0;
    right:0;
  }
</style>
