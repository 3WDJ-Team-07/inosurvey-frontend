/* 판매할 설문 상세정보 */

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
            {{ sellItems.started_at}}
          </span>
          <span v-if="sellItems.closed_at">
            ~{{sellItems.closed_at}}
          </span>
        </div>
        <div>
          <span>
            <v-chip color="info" text-color="white">
              연령대&nbsp;&nbsp;-&nbsp;&nbsp;
              <span v-if="!sellItems.target.age.length == 0">
                <span v-for="(age, index) in sellItems.target.age" :key="index">
                  {{age}},
                </span>
              </span>
              <span v-else>
                무관
              </span>       
            </v-chip>
          </span>
          <span>
            <v-chip color="info" text-color="white">
              성별&nbsp;&nbsp;-&nbsp;&nbsp;
              <span v-if="sellItems.target.gender == 0">
                무관
              </span>
              <span v-else-if="sellItems.target.gender == 1">
                남자
              </span>  
              <span v-else-if="sellItems.target.gender == 2">
                여자
              </span>      
            </v-chip>
          </span>
          <span>
            <v-chip color="info" text-color="white">
              직업&nbsp;&nbsp;-&nbsp;&nbsp; 
              <span v-if="sellItems.target.job.length == 0">
                무관
              </span>
              <span v-else v-for="(job, index) in sellItems.target.job" :key="index">
                {{job.name}},
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
  props: ['sell_id', 'sellItems'],
  data() {
    return {
      age: '',
      gender: '',
      job:''
    }
  }
}
</script>

<style>

</style>
