<template>
  <div>
    <v-layout>
      <v-flex xs2>
        <myNav/>
      </v-flex>
      <v-container>
        <v-flex xs9 text-xs-left>
          <div class="display-2 font-weight-bold px-3 pb-4">
            설문조사1
          </div>
        </v-flex>
      <v-layout>
        <v-flex xs3 class="border_style">
          <v-card class="text-xs-center" flat style="background-color:#FAFAFA;" >
            <v-container fluid>
              <v-layout align-center justify-space-around column fill-height>
                <div class="display-1 font-weight-bold my-5 py-5 elevation-5">설문 정보</div>
                <div class="display-1 font-weight-bold  my-5 py-5 elevation-5">설문 구매처</div>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs9 class="border_style pa-3 text-xs-left"> 
          <v-card flat style="background-color:#FAFAFA;">
            <v-container fluid>
              <v-layout justify-space-around column fill-height>
                <div class="elevation-5">
                  <div class="title font-weight-bold px-4 pt-4 mt-2 pb-3">
                    설문조사 1 소개
                    <span class="pl-5 ml-5 subheading grey--text">
                      닉네임
                    </span>
                  </div>
                  <div class="title font-weight-bold px-4 pb-3">
                  <v-tooltip right color="info">
                    <span slot="activator">
                      <i class="fas fa-user ma-1"></i>
                      <span>
                        100명
                      </span>
                      </span>
                      <span>응답인원</span>
                    </v-tooltip>
                  </div>
                  <div class="title font-weight-bold px-4 pb-3">
                    <v-tooltip right color="info">
                      <span slot="activator">
                        <i class="far fa-calendar-alt ma-1"></i>
                        <span>
                          2019-05-01
                        </span>
                        <span>
                          ~2019-05-12
                        </span>
                      </span>
                      <span>설문 진행 일정</span>
                    </v-tooltip>
                  </div>
                  <div class="title font-weight-bold px-4 pb-3">
                  <v-tooltip right color="info">
                    <span slot="activator">
                      <i class="fas fa-coins ma-1"></i>
                      <span>
                        100이노
                      </span>
                      </span>
                      <span>금액</span>
                    </v-tooltip>
                  </div>
                </div>
                <div class="elevation-5 mt-5 py-2">
                  <v-layout row wrap>
                    <v-flex xs-12 pa-4>
                      <div class="font-weight-bold  my-2" v-for="i in 5">
                        <span class="mr-5">설문 구매자 1</span>
                        <span class="mx-5">+ <span class="info--text font-italic">100 </span> 이노</span>
                        <span class="ml-5">설문 구매 날짜1</span>
                      </div>
                    </v-flex>
                  </v-layout>
                </div>
              </v-layout>
            </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
  import myNav from './myNav'

  export default {
    components:{ myNav },
    data () {
      return {
      }
    }
  }
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
