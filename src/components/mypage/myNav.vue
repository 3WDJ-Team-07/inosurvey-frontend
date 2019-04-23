<template>
  <v-card style="border-radius: 20px;" class="font-weight-bold">
    <v-card-title class="hover_style" @click="surveyPage" ref="survey">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-3">
      응답 설문 내역</div>
    </v-card-title>
    <v-card-title class="hover_style" @click="marketPage" ref="market">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-3">
      구매 설문 내역</div>
    </v-card-title>
    <v-card-title class="hover_style" @click="walletPage" ref="wallet">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-3">
      이노 지갑</div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  methods:{
    surveyPage() {
      this.$router.push({name: 'surveyhistory'})
    },
    marketPage() {
      this.$router.push({name: 'markethistory'})
    },
    walletPage() {
      this.$router.push({name: 'wallethistory'})
    }
  }
}
</script>

<style scoped>
  .center_sorting {
    margin: 0 auto;
  }
  .hover_style {
    cursor: pointer;
    transition: background 0.3s ease;
    border-bottom: 1px solid lightgrey;
  }
  .hover_style:hover{
    background: #EEEEEE;
  }
</style>
