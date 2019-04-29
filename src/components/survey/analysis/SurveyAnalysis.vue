<template>
  <v-container fluid grid-list-md style="margin:0px;padding:0px;">
    <v-layout row>
      <v-flex xs12>
        <div class="display-1 font-weight-bold pa-3">설문조사1</div>
      </v-flex>
      <v-flex xs12>
        <div class="mt-3">
          <v-btn class="font-weight-bold" flat style="float:right;">PDF파일 변환</v-btn>
          <v-btn class="font-weight-bold" flat style="float:right;">엑셀파일 변환</v-btn>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs3 class="border_style">
        <v-card height="180px" class="text-xs-center" flat style="background-color:#FAFAFA;" >
          <div class="headline font-weight-bold pt-3 pt-5 mt-5">설문 정보</div>
        </v-card>
      </v-flex>
      <v-flex xs9 class="border_style pa-4"> 
        <v-card height="180px" flat style="background-color:#FAFAFA;">
          <v-progress-circular
              style="float:right; margin-right:100px;"
              class=""
              :rotate="360"
              :size="120"
              :width="20"
              value="45"
              color="teal"
            >
              45.3%
            </v-progress-circular>
          <div class="title font-weight-bold pa-4">설문조사1 소개</div>
          <div class="title font-weight-bold pa-4">연령 50대 </div>
          <div class="title font-weight-bold pa-3">
            <v-icon large style="line-height:20px;">event</v-icon>
            <span class="ml-3 left_class">2019.02.18 ~ 2019.03.15</span>
            <div class="mr-5 pr-4" style="float:right;"><v-icon large style="line-height:20px;">person</v-icon>
            <span class="ml-3">225 / 500 명</span></div>
          </div>
        </v-card>
      </v-flex>
      <Chart/>
    </v-layout>
  </v-container>
</template>

<script>
  import Chart from './Chart'

  export default {
    name:'analysis',
    components:{ Chart },
  }
</script>

<style scoped>
  .left_class {
    margin-right: 200px; 
  }
  .border_style {
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
  }
  .border_style:nth-child(1) {
    border-right: 2px solid lightgrey;
  }
</style>
