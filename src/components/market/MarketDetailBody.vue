/* 구매 설문 상세정보 */
<template lang="html">
<v-layout>
  <v-flex xs3 class="border_style">
    <v-card class="text-xs-center" flat style="background-color:#FAFAFA;" >
      <v-container fluid>
        <v-layout align-center justify-space-around column fill-height>
          <div class="display-1 font-weight-bold my-5 py-5">설문 정보</div>
          <div class="display-1 font-weight-bold py-5 qInfo">문항 정보</div>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
    <v-flex xs9 class="border_style">
    <v-card flat style="background-color:#FAFAFA;" >
      <v-container fluid>
        <v-layout column fill-height>
          <div>
            <div class="title font-weight-bold px-4 pt-4 mt-2 pb-3">
               {{marketItems.description}}
               <span v-if="nickname" class="pl-5 ml-5 subheading grey--text">
                {{nickname}}
              </span>
            </div>
            <div class="title font-weight-bold px-4 pb-3">
            <v-tooltip right color="info">
              <span slot="activator">
            <i class="fas fa-user ma-1"></i>
            <span>
            {{marketItems.respondent_count}}명
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
                  {{ marketItems.started_at | substr }}
                </span>
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
            <i class="fas fa-user ma-1"></i>
            <span>
            {{ino}}이노
            </span>
            </span>
            <span>응답인원</span>
            </v-tooltip>
          </div>
          <div v-if="marketItems.target" class="px-4 pb-3">
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
          </div>
          <div class="my-5">
            <div v-for="(question, index) in questions" :key="index"
            class="mx-5 pa-3 my-3 questions">
            <div class="font-weight-bold">
              <span>
                Q{{question.question_number}}.{{question.question_title}}
              </span>
              <span class="px-5 elevation-4" style="float:right">
                <i class="fas fa-sort-down fa-lg grey--text text--darken-2"></i>
              </span>
              <div class="body-1" style="display:none">
                <span class="ml-5"
                v-for="(coo, index) in question.question_items"
                :key="index">
                {{coo.content_number}}.{{coo.content}}
                </span>
              </div>
         
            </div>
            </div>
          </div>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
  </v-layout>
</template>
<script>
export default {
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
  .qInfo{
    margin-top: 30%
  }
  .questions{
    font-size: 1.4em;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
       }
</style>
