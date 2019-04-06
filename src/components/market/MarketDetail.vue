/* 설문마켓 상품코너 */

<template>
  <v-fade-transition mode="out-in">
    <v-container pt-5 mt-5>
      <v-layout row wrap pb-2>
        <v-flex xs9>
          <span class="display-1 font-weight-bold">대중교통이용실태조사</span>
        </v-flex>
        <v-flex text-xs-right>
          <v-btn large color="info">구매하기</v-btn>
        </v-flex>        
      </v-layout>
      <v-divider/>
      <v-layout row wrap mt-3>
        <v-flex xs3 >
          <div class="headline font-weight-bold mb-5">설문정보</div>
          <div class="headline font-weight-bold">문항</div>
        </v-flex>
        <v-flex xs9>
          <div class="title font-weight-bold mb-5">대중교통 서비스 개선을 위한 설문조사입니다.</div>
          <div class="headline font-weight-bold">Q1. 귀하의 대중교통 이용 빈도는 어떻게 되나요?</div>  
        </v-flex>
      </v-layout>
    </v-container>
  </v-fade-transition>
</template>
