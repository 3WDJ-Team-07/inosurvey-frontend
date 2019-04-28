<template>
  <span>
    <v-container fluid grid-list-xl
    v-if="!this.$store.state.loading">
      <v-layout text-xs-center row wrap class="pa-4">
        <MarketCard
        v-for="(card,index) in saleSurvey"
          :key="index"
          :card="card"
          :index="index"
        />
      </v-layout>
    </v-container>
    <Spinner2 v-else/>
  </span>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import MarketCard from '@/components/market/MarketCard'
  import Spinner2 from '@/components/Spinner2'

  export default {
    name:'MarketContext',
    components: { MarketCard, Spinner2 },
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

