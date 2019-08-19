<template>
  <div v-if="surveyFormInfo.survey">
    <v-layout>
      <v-container>
        <v-flex text-xs-left>
          <div class="display-2 font-weight-bold px-3 pb-4">
            {{surveyFormInfo.survey.title}}
          </div>
        </v-flex>
      <v-layout>
        <v-flex xs3 class="border_style">
          <v-card class="text-xs-center" flat style="background-color:#FAFAFA;" >
            <v-container fluid>
              <v-layout align-center justify-space-around column fill-height>
                <div class="display-1 font-weight-bold my-5 py-5">情報</div>
                <div class="display-1 font-weight-bold  my-5 py-5">販売先</div>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs9 class="border_style pa-3 text-xs-left"> 
          <v-card flat style="background-color:#FAFAFA;">
            <v-container fluid>
              <v-layout justify-space-around column fill-height>
                <div>
                  <div class="title font-weight-bold px-4 pt-4 mt-2 pb-3">
                    {{surveyFormInfo.survey.description}}
                    <span class=" ml-5 subheading grey--text">
                      {{surveyFormInfo.survey.user.nickname}}
                    </span>
                  </div>
                  <div class="title font-weight-bold px-4 pb-3">
                  <v-tooltip right color="info">
                    <span slot="activator">
                      <i class="fas fa-user ma-1"></i>
                      <span>
                        {{surveyFormInfo.survey.respondent_count}}人
                      </span>
                      </span>
                      <span>回答した人数</span>
                    </v-tooltip>
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
                        {{surveyFormInfo.reward}} INO
                      </span>
                      </span>
                      <span>金額</span>
                    </v-tooltip>
                  </div>
                </div>
                <div class=" mt-5 py-2">
                  <v-layout row wrap>
                    <v-flex xs-12 pa-4>
                      <div class="font-weight-bold  my-2" v-for="i in 1">
                        <!-- <span class="mr-5">김민영</span> -->
                        <span class="grey--text">2019-06-19</span>
                      </div>
                    </v-flex>
                  </v-layout>
                </div>
              </v-layout>
            </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
  import myNav      from './myNav'
  import { mypage } from '@/api/index'

  export default {
    components:{ myNav },
    data () {
      return {
        loading: false,
        surveyFormInfo: {},
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
