<template lang="html">
  <div>
    <v-container fluid grid-list-md pt-4 mt-5 v-if="!this.$store.state.loading">
      <v-layout row>
        <v-layout row wrap>
          <v-flex xs10>
            <div class="display-2 font-weight-bold pa-3 mt-4 mb-4 ml-5">
              {{marketItems.title}}
            </div>
          </v-flex>
          <v-flex xs2>
            <div class="mr-5 mt-4 mb-4 pa-3">
              <v-btn color="info" large block @click="SET_IS_SURVEY_PURCHASE(true)">
                購買
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout>
        <MarketDetailBody
          :market_id = "market_id"
          :marketItems = "this.marketItems"
          :ino = "this.ino"
        />
      </v-layout>
    </v-container>
    <Spinner v-else/>
    <surveyPurchase
    :market_id = "market_id"
    :marketItems = "this.marketItems"
    :ino = "this.ino"
    />
     
  </div>    
</template>

<script>
  import MarketDetailBody             from '@/components/market/MarketDetailBody'
  import surveyPurchase               from '@/components/dialog/surveyPurchase'
  import { mapMutations,mapState }    from 'vuex'
  import { market }                   from '@/api/index'
  import Spinner                      from '@/components/Spinner'
  export default {
      name: 'marketdetail',
      props: ['market_id'],
      components: {
        MarketDetailBody,
        surveyPurchase,
        Spinner
      },
      data(){
        return{
          marketItems: {},
          ino : ''
        }
      },
      created(){
      this.fetchList()
    },
    methods: {
      ...mapMutations(['SET_IS_SURVEY_PURCHASE']),
      fetchList() {
        this.$store.state.loading = true
        return market.FetchListDetail({ id:this.market_id })
        .then(response => {

          this.marketItems = response.list
          this.ino = response.price
          this.$store.state.loading = false
        })
      }
    }
  }
</script>