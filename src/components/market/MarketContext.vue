<template>
  <v-fade-transition mode="out-in">
<<<<<<< HEAD
    <v-container grid-list-xl>
      <v-layout justify-center text-xs-center row wrap class="pa-4">
        <v-flex pa-3 xs12 sm12 md5 xl5
          v-for="card in cardFeatures"
          :key="card.title" @click="toDetail"> 
          <v-card class="card pt-4" height="160px" style="cursor:pointer;">
            <div class="pt-4">
              <div class="card-title headline font-weight-bold mb-3">{{ card.title }}</div>
              <div class="card-text body-2 font-weight-black">{{ card.text }}</div>
              <div class="card-hover headline font-weight-bold mb-3">{{ card.hover }}</div>
              <div class="card-hoversub body-2 font-weight-black">{{ card.hoversub }}</div>
            </div>
          </v-card>
        </v-flex>
=======
    <v-container fluid grid-list-xl>
      <v-layout text-xs-center row wrap class="pa-4">
        <MarketCard
        v-for="(card,index) in saleSurvey"
          :key="index"
          :card="card"
          :index="index"
        />
>>>>>>> dd1ef3659e5480de63485478b0c1f56e87883cbc
      </v-layout>
    </v-container>
  </v-fade-transition>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
import MarketCard from '@/components/market/MarketCard'
  export default {
    name:'MarketContext',
    components: { MarketCard },
    computed: {
      ...mapState([ 'saleSurvey' ]),

    },
    created() {
      this.fetchMarket()
     
    },
    methods: {
      ...mapActions(['FETCH_MARKET']),
      fetchMarket() {
        this.FETCH_MARKET()
      }
    }
}
</script>

