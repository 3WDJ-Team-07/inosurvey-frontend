<template>
  <div>
    <v-container fluid grid-list-md pt-4 mt-5>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#FAFAFA" height="10vh" flat >
            <div fluid grid-list-md>
              <v-layout row wrap>
                <div class="display-1 font-weight-bold pt-3 ml-5 xs-2">
                {{sellItems.title}}
                </div>
              </v-layout>
            </div>
          </v-card>
          <v-divider/>
        </v-flex>
        <v-flex xs2 md2>
          <v-card
          height="30vh" max-width="300"
          class="pt-4 text-xs-center">
            <div class="headline font-weight-bold pt-3">설문정보</div>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card height="30vh" class="pa-1">
            <MarketSellBody
            :sell_id = "sell_id"
            :sellItems = "sellItems"
            />
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-divider/>
          <v-card color="#FAFAFA" flat height="50vh" class=" text-xs-center">
            <div fluid grid-list-md>
              <div class="headline font-weight-bold my-5 py-5">
                " {{sellItems.title}} "을 "100이노"에 판매합니다.
              </div>
              <v-btn color="info" block @click="sell">판매하기</v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import MarketSellBody           from '@/components/market/MarketSellBody'
  import { mapActions,mapState }  from 'vuex'
  import { market }               from '@/api/index'

  export default {
    props: ['sell_id'],
    name: 'surveymarketsell',
    computed: {
      ...mapState(['userinfo']),
    },
    components: { MarketSellBody },
    data(){
      return{
        sellItems: {},
      }
    },
    created(){
      this.fetchList()
    },
    methods: {
      ...mapActions(['UPDATE_MARKET']),
      sell(){
        this.UPDATE_MARKET({
          //id 넘김 -- 해당 설문 마켓 리스트에 등록
          id: this.sell_id,
          user_id: this.userinfo.id
        })
        this.$router.replace({name: 'surveymarket'})
      },
      fetchList() {
        //설문 정보 불러오기
        // return market.FetchListSell({id:this.sell_id})
        // .then(response => this.sellItems = response.list )
        return market.TestDetailList()
        .then(response => this.sellItems = response)
      }
    }
  }
</script>
