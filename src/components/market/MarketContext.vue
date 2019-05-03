<template>
  <span>
    <!-- <v-container fluid grid-list-xl v-if="!this.$store.state.loading"> -->
    <v-container fluid grid-list-xl>
      <v-layout text-xs-center row wrap class="pa-3 mx-5">
        <v-layout justify-end>
          <v-flex xs12 sm3> 
            <v-text-field
              placeholder="검색"
              append-icon="search"
            >
            </v-text-field>
        </v-flex>
        </v-layout>
        <v-flex xs12 class="border" v-for="(card,index) in saleList" :key="index" >
          <router-link
            :to="{
              name: 'surveymarketdetail',
              params:{ market_id: card.id}
            }">
              <MarketCard
              :card="card"
              :index="index"
              />
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <Spinner2 v-else/> -->
  </span>
</template>

<script>
  import { mapActions, mapState }    from 'vuex'
  import MarketCard                  from '@/components/market/MarketCard'
  import Spinner2                    from '@/components/Spinner2'
  import { market }                  from '@/api/index'

  export default {
    name:'MarketContext',
    data() {
      return {
        saleList: []
      }
    },
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
        // this.FETCH_MARKET()
        return market.TestSaleList()
        .then(response => {
          this.saleList = response.list
        })
      }
    }
  }
</script>

<style scoped>
  .border{
    border-top: 1px solid lightgrey;
  }
</style>

