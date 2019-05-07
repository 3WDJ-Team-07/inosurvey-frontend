<template>
  <v-card style="border-radius: 20px;" class="font-weight-bold">
    <v-card-title class="hover_style" @click="surveyPage"
     ref="survey">
      <div
      class="headline 
      center_sorting 
      font-weight-bold pa-2">
      응답 설문 내역</div>
    </v-card-title>
    <v-card-title class="hover_style" @click="marketPage" ref="market">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-2">
      구매 설문 내역</div>
    </v-card-title>
    <v-card-title  v-if="userinfo.is_donator==1" class="hover_style" @click="foundationPage" ref="foundation">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-2">
      등록한 모금</div>
    </v-card-title>
    <v-card-title class="hover_style" @click="donatePage" ref="donate">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-2">
      참여한 모금</div>
    </v-card-title>
    <v-card-title class="hover_style" @click="walletPage" ref="wallet">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-2">
      이노 지갑</div>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active:''
    }
  },
  computed: {
    ...mapState(['userinfo']),
  },
  methods:{
    surveyPage() {
      this.$router.push({name: 'surveyhistory'})
    },
    marketPage() {
      this.$router.push({name: 'markethistory'})
    },
    foundationPage() {
      this.$router.push({name: 'foundationhistory'})
    },
    donatePage() {
      this.$router.push({name: 'donatehistory'})
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
  .active{
    background: blue
  }
</style>
