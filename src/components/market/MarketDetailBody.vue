/* 구매 설문 상세정보 */
<template lang="html">
  <v-layout>
    <v-flex xs3 class="border_style">
      <v-card class="text-xs-center" flat style="background-color:#FAFAFA;" >
        <v-container fluid>
          <v-layout align-center justify-space-around column fill-height>
            <div class="display-1 font-weight-bold my-5 py-5">설문 정보</div>
            <div class="display-1 font-weight-bold py-5 my-5">문항 정보</div>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs9 class="border_style">
      <v-card flat style="background-color:#FAFAFA;">
        <v-container fluid>
          <v-layout column fill-height>
            <div>
              <div class="title font-weight-bold px-4 pt-4 mt-2 pb-5">{{marketItems.description}}
                <span v-if="nickname" class="pl-5 ml-5 subheading grey--text">{{nickname}}</span>
              </div>
              <div class="title font-weight-bold px-4 pb-3">
                <v-tooltip right color="info">
                  <span slot="activator">
                    <i class="fas fa-user ma-1"></i>
                    <span>{{marketItems.respondent_count}}명</span>
                  </span>
                  <span>응답인원</span>
                </v-tooltip>
              </div>
              <div class="title font-weight-bold px-4 pb-3">
                <v-tooltip right color="info">
                  <span slot="activator">
                    <i class="far fa-calendar-alt ma-1"></i>
                    <span>{{ marketItems.created_at | substr }}</span>
                    <span v-if="marketItems.closed_at">
                    ~ {{marketItems.closed_at | substr}}
                    </span>
                  </span>
                  <span>설문 진행 일정</span>
                </v-tooltip>
              </div>
              <div class="title font-weight-bold px-4 pb-3">
                <v-tooltip right color="info">
                  <span slot="activator">
                    <i class="fas fa-coins ma-1"></i><span>{{ino}}이노</span>
                  </span>
                  <span>판매가격</span>
                </v-tooltip>
              </div>
              <div v-if="marketItems.target" class="px-4 pb-3">
                <v-tooltip right color="info">
                  <span slot="activator">
                    <span v-if="gender == 0">
                      <v-chip color="grey darken-2" text-color="white" large>모든 성별</v-chip>
                    </span>
                    <span v-else>
                      <v-chip color="grey darken-2" text-color="white" large>
                        <span v-if="gender == 1">
                          남자
                        </span>
                        <span v-else-if="gender == 2">
                          여자
                       </span>
                      </v-chip>
                    </span>
                    <span v-if="age.length !==0 ">
                      <v-chip
                        color="grey darken-2" text-color="white" large
                        v-for="(targetAge, index) in age " :key="index"
                      >
                        {{ targetAge }} 대
                      </v-chip>
                    </span>
                    <span v-else>
                      <v-chip
                        color="grey darken-2"
                        text-color="white"
                        large
                      >
                        모든 연령
                      </v-chip>
                    </span>
                    <span v-if="job.length !== 0">
                      <v-chip
                        color="grey darken-2" text-color="white" large
                        v-for="(targetJob, index) in job" :key="index"
                      >
                        {{targetJob.name}}
                      </v-chip>
                    </span>
                    <span v-else>
                      <v-chip
                        color="grey darken-2" 
                        text-color="white" 
                        large 
                      >
                        모든 직업
                      </v-chip>
                    </span>
                  </span>
                  <span>타겟</span>
                </v-tooltip>
              </div>
              <div v-if="!marketItems.target" class="px-3">
                <v-chip class="pa-1" color="grey darken-2" text-color="white" large close>모든 인원</v-chip>
              </div>
            </div>
            <div style="margin-top:50px;">
              <MarketDetailItem
                v-for="(question, index) in questions" :key="index"
                :question = "question"
              />
            </div>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import MarketDetailItem from './MarketDetailItem'

  export default {
    components: { MarketDetailItem },
    props:['marketItems','ino'],
    filters:{
      substr:function(date){
        if(date){
          return date.substr(0,10)
        }
      }
    },
    computed: {
      nickname(){
        return this.marketItems.user.nickname||'0'
      },
      age(){
        return this.marketItems.target.age||'0'
      },
      gender(){
        return this.marketItems.target.gender||'0'
      },
      job(){
        return this.marketItems.target.job||'0'
      },
      questions(){
        return this.marketItems.question||'0'
      },
      questionsItems(){
        return this.marketItems.question.questions||'0'
      }
    },
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
  .questions{
    font-size: 1.4em;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
  }
  .circle{
    border:1px solid grey;
    border-radius:50%;
  }
</style>
