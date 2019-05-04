<template>
  <span>
    <v-container fluid grid-list-xl v-if="!this.$store.state.loading">
      <v-layout text-xs-center row wrap class="pa-3 mx-5">
        <v-layout justify-end>
          <v-flex xs12 sm3 class="searchBox"> 
            <v-text-field
              placeholder="검색..."
              append-icon="search"
              v-model="search"
            >
            </v-text-field>
        </v-flex>
        </v-layout>
        <v-flex xs12 class="border" v-for="(card,index) in surveyList" :key="index">
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
        <v-flex v-if="surveyList.length === 0" xs12 >
          <div class="display-1 grey--text">
            <span v-if="search.length == 0">판매중인 설문이 없습니다. </span>
            <span v-else>" {{ search }} " 를 찾을 수 없습니다 ! </span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <Spinner2 v-else/>
    <surveySale
    :userinfo="userinfo"
    />
  </span>
</template>

<script>
  import { mapActions, mapState }    from 'vuex'
  import MarketCard                  from '@/components/market/MarketCard'
  import Spinner2                    from '@/components/Spinner2'
  import surveySale                               from '@/components/dialog/surveySale'

  export default {
    name:'MarketContext',
    components: { MarketCard, Spinner2, surveySale },
    data(){
      return{
        search:''
        }
    },
    computed: {
      ...mapState([ 'saleSurvey', 'userinfo']),
       surveyList() {
        var sellingSurvey = this.saleSurvey.filter((card) => {
          return card.title.toLowerCase().includes(this.search.toLowerCase())||card.description.toLowerCase().includes(this.search.toLowerCase())
        })
        return sellingSurvey
      }
    },
    created() {
      this.fetchMarket()
    },
    methods: {
      ...mapActions(['FETCH_MARKET']),
      fetchMarket() {
        this.FETCH_MARKET()
        console.log(this.cards);
      },
    }
  }
</script>
<style scoped>
.border{
  border-top: 1px solid lightgrey;
}
</style>

