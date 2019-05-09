<template>
  <div>
    <v-container fluid grid-list-md pt-5 mt-5 v-if="!this.$store.state.loading">
      <v-layout row>
          <v-layout row wrap>
            <v-flex xs10>
              <div class="display-2 font-weight-bold pa-3 ml-5">
                {{sellItems.title}}
              </div>
            </v-flex>
            <v-flex xs2>
            <div class="mr-5 pa-3">
              <v-btn color="info" large block @click="sell">판매하기</v-btn>
            </div>
          </v-flex>
          </v-layout>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs3 class="border_style">
        <v-card height=180 class="text-xs-center" flat style="background-color:#FAFAFA;" >
          <div class="display-1 font-weight-bold pt-5 mt-5">설문 정보</div>
        </v-card>
      </v-flex>
      <v-flex xs9 class="border_style pa-3"> 
        <v-card height="180px" flat style="background-color:#FAFAFA;">
          <div class="title font-weight-bold px-4 pt-4 mt-2 pb-3">
             {{sellItems.description}}
          </div>
          <div class="title font-weight-bold px-4 pb-3">
            <v-tooltip right color="info">
              <span slot="activator">
            <i class="fas fa-user ma-1"></i>
            <span>
            {{sellItems.respondent_count}}명
            </span>
            </span>
            <span>응답인원</span>
            </v-tooltip>
          </div>
          <div class="title font-weight-bold px-4 pb-3">
            <v-tooltip right color="info">
              <span slot="activator">
                <i class="far fa-calendar-alt ma-1"></i>
                <span>
                  {{ sellItems.created_at | substr }}
                </span>
                <span v-if="sellItems.closed_at">
                  ~{{sellItems.closed_at | substr}}
                </span>
              </span>
              <span>설문 진행 일정</span>
            </v-tooltip>
          </div>
          <div v-if="sellItems.target" class="px-4">
            <v-tooltip right color="info">
              <span slot="activator">
            <span>
              <v-chip color="grey darken-2" text-color="white" large v-if="gender ==! 0">
                <span v-if="gender == 1">
                  남자
                </span>
                <span v-else-if="gender == 2">
                  여자
                </span>
              </v-chip>
            </span>
            <span>
              <v-chip
                color="grey darken-2" text-color="white" large
                v-if="age" v-for="(targetAge, index) in age " :key="index"
              >
                {{ targetAge }} 대
              </v-chip>
            </span>
            <span>
              <v-chip
                color="grey darken-2" text-color="white" large
                v-if="job" v-for="(targetJob, index) in job" :key="index"
              >
                {{targetJob.name}}
              </v-chip>
            </span>

            </span>
            <span>타겟</span>
            </v-tooltip>
          </div>
        </v-card>
      </v-flex>
        <v-flex xs12>
          <v-card color="#FAFAFA" flat class=" text-xs-center">
            <div fluid grid-list-md class="py-5">
              <div class="display-3 font-weight-bold my-5 py-5">
                " <span class="info--text">{{sellItems.title}}</span> "을 "<span class="info--text font-italic"> 100</span> 이노"에 판매합니다.
              </div>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Spinner v-else/>
  </div>
</template>

<script>
  import { mapActions,mapState }   from 'vuex'
  import { market }                from '@/api/index'
  import Spinner                   from '@/components/Spinner'
  export default {
    name: 'marketsale',
    components: { Spinner },
    filters:{
      substr:function(date){
        if(date){
          return date.substr(0,10)
        }
      }
    },
    computed: {
      ...mapState(['userinfo']),
      sell_id(){
        return Number(this.$route.params.sell_id)
      },
       age(){
      return this.sellItems.target.age||'0'
      },
      gender(){
        return this.sellItems.target.gender||'0'
      },
      job(){
        return this.sellItems.target.job||'0'
      }
    },
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
      fetchList(){
        //설문 정보 불러오기
        this.$store.state.loading=true
        return market.FetchListSell({id:this.sell_id})
        .then(response=>{
           this.sellItems = response.list
           this.$store.state.loading=false
        })
        .catch(error =>{
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  .border_style {
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
  }
  .border_style:nth-child(1) {
    border-right: 2px solid lightgrey;
  }
</style>
