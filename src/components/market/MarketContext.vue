<template>
  <span>
    <v-container fluid grid-list-xl v-if="!this.$store.state.loading">
      <v-layout text-xs-center row wrap class="pa-2 mx-5">
        <v-layout justify-end style="margin-left:700px;">
          <v-flex xs3>
            <v-select
            :items="items"
            v-model="items.value"
            label="すべて"
            item-text="text"
            item-value="value"
            color="info"
            append-icon="arrow_drop_down"
            solo
          ></v-select>
          </v-flex>
          <v-flex xs6 class="searchBox"> 
            <v-text-field
              placeholder="検索..."
              append-icon="search"
              v-model="search"
              @focus="search=''"
            >
            </v-text-field>

            <div>
              <span class="font-weight-bold grey--text text--darken-2">
              <i class="fas fa-thumbtack mr-2"></i>
              <span class="info--text">{{surveyList.length}} </span>個の アンケートが 
              <span v-if="search.length == 0">販売しています!</span>
              <span v-else>検索されました。</span>
              </span>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs12 v-for="(card,index) in surveyList" :key="index">
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
        <v-flex v-if="surveyList.length === 0" xs12 style="margin-top:100px;">
          <div class="display-1 grey--text">
            <span v-if="search.length == 0"><i class="far fa-frown mx-2"></i>販売しているアンケートがありません。</span>
            <span v-else><i class="far fa-frown mx-2"></i> " {{ search }} " がありません。</span>
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
  import surveySale                  from '@/components/dialog/surveySale'

  export default {
    name:'MarketContext',
    components: { MarketCard, Spinner2, surveySale },
    data(){
      return{
        search:'',
        items:[
          { text: 'すべて', value:1 },
          { text: 'タイトル', value:2 },
          { text: '紹介文', value:3 },
          ]
        }
    },
    computed: {
      ...mapState([ 'saleSurvey', 'userinfo']),
      surveyList() {
        var sellingSurvey = this.saleSurvey.filter((card) => {
          if(this.items.value == 2){
            return card.title.toLowerCase().includes(this.search.toLowerCase())
          }
          else if(this.items.value ==3){
            return card.description.toLowerCase().includes(this.search.toLowerCase())
          }
          else{
            return card.title.toLowerCase().includes(this.search.toLowerCase())||card.description.toLowerCase().includes(this.search.toLowerCase())
          }
        })
        return sellingSurvey.sort((x,y) => { return y.id - x.id})
      }
    },
    mounted() {
      this.FETCH_MARKET({ id: this.userinfo.id })
    },
    methods: {
      ...mapActions(['FETCH_MARKET']),
    }
  }
</script>