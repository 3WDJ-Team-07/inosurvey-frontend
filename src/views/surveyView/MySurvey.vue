<template>
  <v-container grid-list-md class="pt-5 mt-5">
    <div v-if="this.$route.name == 'mysurvey'">
      <div v-if="!this.$store.state.loading">
        <v-flex xs12 sm12 md12 xl10 class="center_card">
          <v-card 
          v-for="(form, index) in mySurveyForm" 
          :key="index" class="pa-2 mt-5">
            <v-card-title>
              <v-chip 
              v-if="!form.respondent_number == form.respondent_count" 
              class="body-2 ml-3 pa-2" color="info" dark>응답중..</v-chip>
              <v-chip v-else class="subheading ml-3 pa-2 pr-4 pl-4" color="success" dark>완료</v-chip>
              <v-layout text-sm-center>
                <v-flex xs5 class="mt-3 mr-5 ml-5">
                  <span class="headline font-weight-bold">{{form.title}}</span>
                  <div class="subheading grey--text pt-1">작성일 : {{form.started_at}}</div>
                </v-flex>
                <v-flex xs3>
                  <div class="pb-2 mr-5 pr-2"><v-icon large style="line-height:20px;">person</v-icon><span class="ml-3">{{form.respondent_count}} / {{form.respondent_number}} 명</span></div>
                  <div class="pb-2 ml-4 mt-4"><v-icon large style="line-height:20px;">event</v-icon><span class="ml-3">{{form.started_at}} ~ {{form.closed_at}}</span></div>
                </v-flex>
                <v-flex xs5>
                  <v-tooltip bottom>
                    <v-icon 
                      class="mr-5" slot="activator" 
                      size="65">shopping_cart
                    </v-icon>
                    <span>설문판매</span>
                  </v-tooltip>
                  <router-link 
                    :to="{
                      name: 'analysis', 
                      params: { form_id: index }
                    }">
                    <v-tooltip bottom>
                      <v-icon 
                        class="mr-5" slot="activator" 
                        size="65" @click="pageRedirect">insert_chart
                      </v-icon>
                      <span>분석</span>
                    </v-tooltip>
                  </router-link>
                  <v-tooltip bottom>
                    <v-icon 
                      slot="activator" size="65" 
                    >delete
                    </v-icon>
                    <span>삭제</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-card>
          <v-flex xs12 right>
            <v-btn 
              large color="info"
              class="subheading
              font-weight-bold mt-4"
              @click="SET_IS_ADD_SURVEY(true)">
              새 설문 만들기
            </v-btn>
          </v-flex>
        </v-flex>
        <AddSurvey/>
      </div>
      <Spinner v-else/>
    </div>
  </v-container>
</template>

<script>
  import AddSurvey                              from '@/components/survey/AddSurvey'
  import { mapState, mapMutations, mapActions } from 'vuex'
  import Spinner from '@/components/Spinner'

  export default {
    props: ['result'],
    name: 'mySurvey',
    components: { AddSurvey, Spinner },
    computed: {
      ...mapState([ 'mySurveyForm', 'userinfo' ]),
    },
    mounted() {
      // this.FETCH_MY_SURVEY_FORM_TEST()
      this.FETCH_MY_SURVEY_FORM({
        id: this.userinfo.id
      })
    },
    methods: {
      ...mapMutations(['SET_IS_ADD_SURVEY']),
      ...mapActions(['FETCH_MY_SURVEY_FORM_TEST', 'FETCH_MY_SURVEY_FORM']),
      pageRedirect() {
        this.$router.push({ name: 'analysis'})
      }
    }
  }
</script>

<style scoped>
  .center_card {
    margin: 0 auto;
  }
  * {
    text-decoration: none;
  }
</style>