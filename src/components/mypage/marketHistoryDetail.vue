<template>
  <div>
    <v-layout>
      <v-flex xs2>
        <myNav/>
      </v-flex>
      <v-container mt-4>
        <v-layout row wrap>
          <v-flex xs8 text-xs-left>
            <div class="display-2 font-weight-bold px-3 pb-4">설문조사1</div>
          </v-flex>

          <v-flex justify-end>
            <div>
              <v-btn class="font-weight-bold" flat>PDF파일 변환</v-btn>
              <v-btn class="font-weight-bold" flat>엑셀파일 변환</v-btn>
            </div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs3 class="border_style">
            <v-card class="text-xs-center" flat style="background-color:#FAFAFA;">
              <div class="display-1 font-weight-bold my-5 py-5 elevation-5">설문 정보</div>
            </v-card>
          </v-flex>
          <v-flex xs9 class="border_style pa-3 text-xs-left">
            <v-card flat style="background-color:#FAFAFA;">
              <v-layout row wrap>
                <v-flex xs9>

                <div class="elevation-5">

                  <div class="title font-weight-bold px-4 pt-4 mt-2 pb-3">
                    설문조사 1 설문조사 1 소개설문조사 1 소개
                    <span class="pl-5 ml-5 subheading grey--text">
                      닉네임
                    </span>
                  </div>
                  
                  <div class="title font-weight-bold px-4 pb-3">
                    <v-tooltip right color="info">
                      <span slot="activator">
                        <i class="far fa-calendar-alt ma-1"></i>
                        <span>
                          2019-05-01
                        </span>
                        <span>설문 진행 일정</span>
                      </v-tooltip>
                    </div>
                    <div class="title font-weight-bold px-4 pb-3">
                      <v-tooltip right color="info">
                        <span slot="activator">
                          <i class="fas fa-coins ma-1"></i>
                          <span>100이노</span>
                        </span>
                        <span>금액</span>
                      </v-tooltip>
                    </div>
                    <div class="title font-weight-bold px-4 pb-3">
                      <v-tooltip right color="info">
                        <span slot="activator">
                          <v-chip color="grey darken-2" dark>
                            <span>타겟</span>
                          </v-chip>
                        </span>
                        <span>타겟</span>
                      </v-tooltip>
                    </div>
                  </div>
                </v-flex>
                <v-flex xs3 class="text-xs-center pt-4 mt-1">
                  <div class="elevation-5">
                    <v-progress-circular
                      :rotate="360"
                      :size="120"
                      :width="20"
                      value="100"
                      color="info"
                    >100%</v-progress-circular>
                    <div class="title font-weight-bold pt-2">
                      <v-tooltip right color="info">
                        <span slot="activator">
                          <i class="fas fa-user ma-1"></i>
                          <span>300/300명</span>
                        </span>
                        <span>응답인원</span>
                      </v-tooltip>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <Chart/>
  </div>
</template>

<script>
import myNav from "./myNav";
import Chart from "@/components/survey/analysis/Chart";

export default {
  components: { myNav, Chart },
  data() {
    return {};
  }
};
</script>

<style scoped>
.border_style {
  border-bottom: 2px solid lightgrey;
  border-top: 2px solid lightgrey;
}
.border_style:nth-child(1) {
  border-right: 2px solid lightgrey;
}
</style>
