/* 판매할 설문 상세정보 */
// age, gender, job 로딩시 에러 뜨는 문제 해결해야됨
<template>
  <v-container>
    <v-layout fluid grid-list-md
    class="font-weight-bold pt-3">
      <v-card flat fill-height>
        <div>
          <span class="headline">
            {{sellItems.description}}
          </span>
        </div>
        <div>
          <i class="fas fa-user fa-lg ma-2"></i>
          <span>
            {{sellItems.respondent_count}}명
          </span>
        </div>
        <div>
          <i class="far fa-calendar-alt fa-lg ma-2"></i>
          <span>
            {{ sellItems.started_at | substr }}
          </span>
          <span v-if="sellItems.closed_at">
            ~{{sellItems.closed_at | substr}}
          </span>
        </div>
        <div v-if="sellItems.target">
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
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props:['sell_id','sellItems'],
  filters:{
    substr:function(date){
      if(date){
        return date.substr(0,10)
      }
    }
  },
  computed: {
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
}
</script>

<style>

</style>
