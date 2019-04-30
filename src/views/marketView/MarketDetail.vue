<template lang="html">
  <div>
    <v-container fluid grid-list-md pt-4 mt-5>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#FAFAFA" height="10vh" flat >
            <div fluid grid-list-md>
              <v-layout row wrap>
                <div class="display-1 font-weight-bold pt-3 ml-5 xs-2">
                  {{marketItems.title}}
                </div>
                <v-layout row wrap justify-end>
                  <v-flex sm3>
                    <v-btn large color="info"
                      @click="SET_IS_SURVEY_PURCHASE(true)">
                      구매하기
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
          </v-card>
          <v-divider/>
        </v-flex>
        <v-flex xs2 md2>
          <v-card height="80vh" max-width="300"
          class="pt-5 text-xs-center">
            <v-card flat height="28vh" fill-height>
              <div class="headline font-weight-bold">
                설문정보
              </div>
            </v-card>
            <v-card flat  height="40vh" fill-height>
              <div class="headline font-weight-bold">
                문항
              </div>
            </v-card>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card height="80vh" class="pa-4">
            <MarketDetailBody
            :market_id = "market_id"
            :marketItems = "this.marketItems"
            />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <surveyPurchase
    :market_id = "market_id"
    :marketItems = "this.marketItems"
    />
  </div>    
</template>

<script>
  import MarketDetailBody     from '@/components/market/MarketDetailBody'
  import surveyPurchase       from '@/components/dialog/surveyPurchase'
  import { mapMutations }     from 'vuex'
  import axios                from 'axios'

  export default {
      name: 'marketdetail',
      props: ['market_id'],
      components: {
        MarketDetailBody,
        surveyPurchase
      },
      data(){
        return{
          marketItems: {}
        }
      },
      created(){
      this.fetchList()
    },
    methods: {
      ...mapMutations(['SET_IS_SURVEY_PURCHASE']),
      fetchList(){
        axios.post('http://172.26.2.186:8000/api/market/show',{id:this.market_id})
        .then(response=>{
          this.marketItems = response.data.list
          console.log(this.marketItems);
        })
        .catch(error =>{
          console.log(error)
        })
      }
    }
  }
</script>