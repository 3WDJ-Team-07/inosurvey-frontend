/* 구매 설문 상세정보 */
// age, gender, job 로딩시 에러 뜨는 문제 해결해야됨

<template lang="html">
  <v-container fluid grid-list-md
  class="font-weight-bold" >
    <v-layout>
      <v-flex>
        <v-card flat height="28vh" fill-height>
          <div>
            <span class="headline">{{marketItems.description}}</span>
            <span class="grey--text ml-5">{{nickname}}</span>
          </div>
          <div>
            <i class="fas fa-user fa-lg ma-2"></i>
            <span>{{marketItems.respondent_count}}명</span>
          </div>
          <div>
            <i class="fas fa-coins fa-lg ma-2"></i>
            <span>{{ino}}이노</span>
          </div>
          <div>
            <i class="far fa-calendar-alt fa-lg ma-2"></i>
            <span>{{ marketItems.started_at | substr }}</span>
            <span v-if="marketItems.closed_at">
              ~{{marketItems.closed_at | substr}}
              </span>
          </div>
          <span  v-if="marketItems.target">
          <span>
            <v-chip color="info" text-color="white">
              연령대 - 
              <span v-if="!age.length == 0">
                {{ age }} 대
              </span>
              <span v-else>
                무관
              </span>       
            </v-chip>
          </span>
          <span>
            <v-chip color="info" text-color="white">
              성별 - 
              <span v-if="gender == 0">
                무관
              </span>
              <span v-else-if="gender == 1">
                남자
              </span>  
              <span v-else-if="gender == 2">
                여자
              </span>      
            </v-chip>
          </span>
          <span>
            <v-chip color="info" text-color="white">
              직업 - 
              <span v-if="job.length == 0">
                무관
              </span>
              <span v-else v-for="(targetjob) in job">
                {{targetjob.name}}, 
              </span>
            </v-chip>
          </span>
          </span>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card flat height="38vh" fill-height>
          <div>
            <div
            v-for="(question, index) in questions"
            :key="index"
            class="subheading font-weight-bold mb-2">
              Q{{question.question_number}}. 
              {{question.question_title}}
              <div class="body-1">
                <span class="mx-2"
                v-for="(coo, index) in question.question_items"
                :key="index">
                {{coo.content_number}}.{{coo.content}}
                </span>
              </div>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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