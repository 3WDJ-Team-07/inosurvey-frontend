/* 설문마켓 상품코너 */

<template>
  <v-fade-transition mode="out-in">
    <v-container fluid grid-list-xl  class="mt-3 mb-3">
       <v-layout 
        justify-center 
        align-center 
        text-xs-center 
        fill-height 
        wrap class="pa-5"
        >
          <v-flex 
            pa-3 xs12 sm12 md6 xl6
            v-for="card in cardFeatures" 
            :key="card.title"
          >
          <v-card class="pa-4" @click="toDetail">
            <div class="headline font-weight-bold grey--text mb-4">{{ card.title }}</div>
            <div class="caption font-weight-black">{{ card.text }}</div>  
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-fade-transition>
</template>

<script>
export default {
    computed: {
      cardFeatures () {
        return this.$t('Market.cardFeatures')
      }
    },
    methods:{
      toDetail(){
        this.$router.replace("/surveyMarketDetail")
      }
    }
  }
</script>
