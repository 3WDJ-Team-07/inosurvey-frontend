/* 설문마켓 판매페이지..... */
<template>
  <div>
    <v-container fluid grid-list-md pt-4 mt-5>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#FAFAFA" height="10vh" flat >
            <div fluid grid-list-md>
              <v-layout row wrap>
                <div class="display-1 font-weight-bold pt-3 ml-5 xs-2">
                  설문조사1
                </div>
              </v-layout>
            </div>
          </v-card>
          <v-divider/>
        </v-flex>
        <v-flex xs2 md2>
          <v-card height="30vh" max-width="300" class="pt-4 text-xs-center">
            <div class="headline font-weight-bold pt-3">설문정보</div>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card height="30vh" class="pa-1">
            <SellBody/>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-divider/>
          <v-card color="#FAFAFA" height="50vh" flat class=" text-xs-center">
            <div fluid grid-list-md>
              <div class="headline font-weight-bold my-5 py-5">
                "설문조사1"을 "100이노"에 판매합니다.
              </div>
              <v-btn color="info" block @click="sell">판매하기</v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>    
</template>

<script>
import SellBody from '@/components/market/SellBody'
export default {
  name: 'marketsell',
  components: {
    SellBody
  },
  methods:{
    sell(){
      this.$router.replace("surveymarket")
    }
  }
}
</script>

<style>
</style>
