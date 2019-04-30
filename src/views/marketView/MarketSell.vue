<template>
   <!-- 데이터 받아서 바인딩 해야됨!!!!!!! -->
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
          <v-card height="30vh" max-width="300" class="pt-4 text-xs-center">
            <div class="headline font-weight-bold pt-3">설문정보</div>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card height="30vh" class="pa-1">
            <SellBody/>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-divider/>
          <v-card color="#FAFAFA" height="50vh" flat class=" text-xs-center">
            <div fluid grid-list-md>
              <div class="headline font-weight-bold my-5 py-5">
                "설문조사1"을 "100이노"에 판매합니다.
              </div>
              <v-btn color="info" block @click="sell">판매하기</v-btn>
              <!-- 판매하기 클릭시 리스트에 추가 되도록 -->
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>    
</template>

<script>
  import SellBody from '@/components/market/MarketSellBody'
  export default {
    name: 'surveymarketsell',
    props:['sell_id'],
    data(){
      return{
        sellItems:{}
      }
    },
    components: { SellBody },
    methods:{
      sell(){
        this.$router.replace({name:'surveymarket'})
      },
      // 백엔드에서 설문 아이디 주고 데이터 받아와야됨 -- 설문 상세에서 썼던 함수 써도 무방할듯
      fetchList(){
        axios.post('http://172.26.2.186:8000/api/market/show',{id:sell_id})
        .then(response=>{
          this.selltItems = response.data.list
          console.log(this.sellItems);
        })
        .catch(error =>{
          console.log(error)
        })
      }
    }
      
    
  }
</script>
