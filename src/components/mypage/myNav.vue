<template>
  <v-card style="margin-top:50px; background-color:#FAFAFA;" flat>
    <v-card-title class="hover_style" @click="surveyPage"
     ref="survey">
      <div
      class="headline 
      center_sorting 
      font-weight-bold pa-1">
      回答されたアンケート</div>
    </v-card-title>
    <v-card-title class="hover_style" @click="marketPage" ref="market">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-1">
      購入したアンケート</div>
    </v-card-title>
    <v-card-title  v-if="userinfo.is_donator==1" class="hover_style" @click="foundationPage" ref="foundation">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-1">
      登録した募金箱</div>
    </v-card-title>
    <v-card-title class="hover_style" @click="donatePage" ref="donate">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-1">
      参加した募金箱</div>
    </v-card-title>
    <v-card-title class="hover_style" @click="walletPage" ref="wallet">
      <div 
      class="headline 
      center_sorting 
      font-weight-bold pa-1">
      INOウォレット</div>
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
