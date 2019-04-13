/* 설문마켓 판매페이지..... */

<template>
  <v-fade-transition mode="out-in">
    <v-container pt-5 mt-5>
      <v-layout row wrap pb-2 justify-center align-center text-xs-center >
        <div class=" display-2">설문 판매 페이지... ..... ... ... </div>
      </v-layout>
      <div class="pb-5">
        <v-btn color="info" block @click="sell">판매하기</v-btn>
      </div>
      <v-alert
      :value="true"
      color="info"
      icon="check_circle"
      outline
      >설문이 판매되었습니다.</v-alert>
    </v-container>
  </v-fade-transition>
</template>

<script>
  export default {
    data () {
      return {
        radios: 'radio-1'
      }
    },
    methods:{
      sell(){
        this.$router.replace("surveymarket")
      }
    }
  }
</script>
