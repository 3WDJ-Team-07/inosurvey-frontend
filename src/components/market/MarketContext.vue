<template>
  <v-fade-transition mode="out-in">
    <v-container fluid grid-list-xl>
      <v-layout text-xs-center row wrap class="pa-5">
        <v-flex pa-3 xs6  v-for="(card,index) in saleSurvey" :key="index" >
          <router-link 
            :to="{
              name: 'surveymarketdetail', 
              params:{ market_id: card.id}
            }">
              <MarketCard
              :card="card"
              :index="index"/>
          </router-link>
        </v-flex>
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

