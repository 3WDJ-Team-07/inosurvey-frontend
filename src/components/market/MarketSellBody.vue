/* 설문마켓 판매 설문 ---- 마켓 설문 상세 (MarketDetailBody와 유사! MarketSell에서 데이터 넘겨 받아서 바인딩)*/
<template>
  <v-container>
    <v-layout fluid grid-list-md  class="font-weight-bold pt-3">
      <v-card flat fill-height>
        <div>
          <span class="headline">20-40대 직장인의 피로도를 알아봅니다....</span>
        </div>
        <div>
          <i class="fas fa-user fa-lg ma-2"></i>
          <span>500명</span>
        </div>
        <div>
          <i class="far fa-calendar-alt fa-lg ma-2"></i>
          <span>2019.01.01 ~ 2019.02.28</span>
        </div>
        <div>
          <v-chip color="info" text-color="white">연령대 - 20대, 30대, 40대</v-chip>
        </div>
      </v-card>
      </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
