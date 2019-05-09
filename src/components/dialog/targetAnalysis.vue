/* 설문결제 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isTargetDialog" persistent m{{item.age}}-width="80%">
      <v-card class="pa-1 border_rounded">
		    <span 
          class="headline right grey--text pa-3" 
          @click="SET_IS_TARGET(false)">
          <i class="fas fa-times"></i>
        </span>
        <v-layout row justify-center class="pt-4 pb-4" style="margin-top:20px;">
          <div class="title"></div>
				</v-layout>
        
        <v-layout row justify-center style="margin-top:20px;">
          <div v-for="(item, index) in percentage[1].gender" :key="index">
            <span v-if="index == 0" class="mr-4">남자 : {{item}}%</span>
            <span v-if="index == 1" class="mr-4">여자 : {{item}}%</span>
          </div>
          <div v-for="(item, index) in percentage[0].age[0]" :key="index" class="mr-4">{{item.age}}대 : {{item.percentage}}%</div>
          <div v-for="(item, index) in percentage[2].job[0]" :key="index" class="mr-4">{{item.job_name}} : {{item.percentage}}%</div>
				</v-layout>
        <v-layout row justify-center class="pt-4 pb-4" style="margin-top:20px;">
          <div v-for="(item, index) in percentage[1].gender" :key="index" class="pr-4">
            <span v-if="index == 0">
              <v-progress-circular
              style="float:right; margin-right:10px;"
              :rotate="360"
              :size="120"
              :width="15"
              :value="item"
              color="teal"
              >남자
              </v-progress-circular>
            </span>
            <span v-if="index == 1">
              <v-progress-circular
              style="float:right; margin-right:10px;"
              :rotate="360"
              :size="120"
              :width="15"
              :value="item"
              color="teal"
              >여자
              </v-progress-circular>
            </span>
          </div>
          <div v-for="(item, index) in percentage[0].age[0]" :key="index" class="pr-4">
            <v-progress-circular
            style="float:right; margin-right:10px;"
            :rotate="360"
            :size="120"
            :width="15"
            :value="item.percentage"
            color="teal"
            >
              {{item.age}}
            </v-progress-circular>
          </div>
           <div v-for="(item, index) in percentage[2].job[0]" :key="index" class="pr-4">
            <v-progress-circular
              style="float:right; margin-right:10px;"
              :rotate="360"
              :size="120"
              :width="15"
              :value="item.percentage"
              color="teal"
              >
                {{item.job_name}}
            </v-progress-circular>
          </div>
				</v-layout>
        <v-card-actions class="pr-3 pb-3" style="float:right;">
          <v-btn color="info" dark large @click="SET_IS_TARGET(false)">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    props: ['percentage'],
    name: 'surveyPayment',
    computed: {
      ...mapState(['isTargetDialog'])
    },
    methods: {
      ...mapMutations(['SET_IS_TARGET']),
    }
  }
</script>

<style scoped>
	*{
		overflow: hidden;
	}
</style>