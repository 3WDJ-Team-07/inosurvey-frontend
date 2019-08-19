<template>
  <div v-if="surveyFormInfo.survey">
    <v-container>
      <v-layout row>
        <v-layout row wrap>
          <v-flex xs12 text-xs-left>
            <div class="display-2 font-weight-bold px-3 pb-4">
            {{surveyFormInfo.survey.title}}
            </div>
          </v-flex>
        </v-layout>
      </v-layout>
        <v-layout row wrap>
          <v-flex xs3 class="border_style">
            <v-card class="text-xs-center" flat style="background-color:#FAFAFA;">
              <div class="display-1 font-weight-bold my-5 py-5">情報</div>
            </v-card>
          </v-flex>
          <v-flex xs9 class="border_style pa-3 text-xs-left">
            <v-card flat style="background-color:#FAFAFA;">
              <v-layout row wrap>
                <v-flex xs9>
                  <div>
                    <div class="title font-weight-bold px-4 pt-4 mt-2 pb-3">
                      {{surveyFormInfo.survey.description}}
                      <span class="pl-5 ml-5 subheading grey--text">
                        {{surveyFormInfo.survey.user.nickname}}
                      </span>
                    </div>
                    <div class="title font-weight-bold px-4 pb-3">
                      <v-tooltip right color="info">
                        <span slot="activator">
                          <i class="far fa-calendar-alt ma-1"></i>
                          <span>
                            {{surveyFormInfo.survey.created_at}}
                          </span>
                          <span>
                            ~{{surveyFormInfo.survey.closed_at}}
                          </span>
                        </span>
                        <span>進行日程</span>
                      </v-tooltip>
                    </div>
                    <div class="title font-weight-bold px-4 pb-3">
                      <v-tooltip right color="info">
                        <span slot="activator">
                          <i class="fas fa-coins ma-1"></i>
                          <span>
                            {{surveyFormInfo.price}} INO
                          </span>
                        </span>
                        <span>金額</span>
                      </v-tooltip>
                    </div>
                    <div v-if="surveyFormInfo.survey.target" class="px-4">
                      <v-tooltip right color="info">
                      <span slot="activator">
                        <span v-if="gender == 0">
                          <v-chip color="grey darken-2" text-color="white" large>すべて</v-chip>
                        </span>
                        <span v-else>
                          <v-chip color="grey darken-2" text-color="white" large>
                            <span v-if="gender == 1">
                              男性
                            </span>
                            <span v-else-if="gender == 2">
                              女性
                          </span>
                          </v-chip>
                        </span>
                        <span v-if="age.length !==0 ">
                          <v-chip
                            color="grey darken-2" text-color="white" large
                            v-for="(targetAge, index) in age " :key="index"
                          >
                            {{ targetAge }} 代
                          </v-chip>
                        </span>
                        <span v-else>
                          <v-chip
                            color="grey darken-2"
                            text-color="white"
                            large
                          >
                            年齢
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
                            職業
                          </v-chip>
                        </span>
                      </span>
                      <span>対象</span>
                    </v-tooltip>
                  </div>
                  <div v-if="!surveyFormInfo.survey.target" class="px-3">
                <v-chip class="pa-1" color="grey darken-2" text-color="white" large close>すべて</v-chip>
              </div>
                </div>
              </v-flex>
              <v-flex xs3 class="text-xs-center pt-4 mt-1">
                <div>
                  <v-progress-circular
                    :rotate="360"
                    :size="120"
                    :width="20"
                    :value="rate"
                    color="info"
                  >{{rate}}</v-progress-circular>
                  <div class="title font-weight-bold pt-2">
                    <v-tooltip right color="info">
                      <span slot="activator">
                        <i class="fas fa-user ma-1"></i>
                        <span>{{surveyFormInfo.survey.respondent_count}}</span>
                        /<span>{{surveyFormInfo.survey.respondent_number}}</span>人
                      </span>
                      <span>回答した人数</span>
                    </v-tooltip>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="#FAFAFA" flat class=" text-xs-center">
            <div fluid grid-list-md class="py-5">
              <router-link :to="{
                        name: 'analysis', 
                        params: { form_id: surveyFormInfo.survey.id }
                      }">
              <div class="display-3 font-weight-bold my-5 py-5 info--text">
                <v-btn color="info" class="pa-5" fab style="width:180px; height:180px">
                  <img src="/static/analysis2.png" style="width:130%"/>
                </v-btn>
                  分析する
              </div>
              </router-link>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    
  </v-layout>
  </v-container>
</div>
<!-- //<router-link 
                      > -->
</template>

<script>

import { mypage } from '@/api/index'

export default {
  data () {
      return {
        surveyFormInfo: {},
      }
    },
    computed:{
      rate() {
        return (this.surveyFormInfo.survey.respondent_count / this.surveyFormInfo.survey.respondent_number*100).toFixed(1) + ' %'
      },
      age(){
      return this.surveyFormInfo.survey.target.age||'0'
      },
      gender(){
        return this.surveyFormInfo.survey.target.gender||'0'
      },
      job(){
        return this.surveyFormInfo.survey.target.job||'0'
      }
    },
    mounted() {
      this.fetchSurveyForm()
    },
    methods: {
      fetchSurveyForm() {
        this.loading = true
        return mypage.FetchSurveyForm({ form_id: this.$route.params.form_id })
        .then(response => {
          console.log(response)
          this.surveyFormInfo = response
          this.loading = false
        })
      }
    },
};
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
