<template>
  <v-container grid-list-md class="pt-5 mt-5">
    <div v-if="this.$route.name == 'mysurvey'">
      <v-flex xs12 sm12 md12 xl10 class="center_card">
        <v-card class="pa-2">
          <v-card-title>
            <v-chip class="body-2 ml-3 pa-2" color="info" dark>응답중..</v-chip>
            <v-layout text-sm-center>
              <v-flex xs5 class="mt-3 mr-5 ml-5">
                <span class="headline font-weight-bold">미세먼지 인식에미세먼지 설문조사</span>
                <div class="subheading grey--text pt-1">작성일 : 2073</div>
              </v-flex>
              <v-flex xs3>
                <div class="pb-2 mr-5 pr-2"><v-icon large style="line-height:20px;">person</v-icon><span class="ml-3">225 / 500 명</span></div>
                <div class="pb-2 ml-4 mt-4"><v-icon large style="line-height:20px;">event</v-icon><span class="ml-3">2019.02.18 ~ 2019.03
                  .15</span></div>
              </v-flex>
              <v-flex xs5>
                <v-tooltip bottom>
                  <v-icon 
                    class="mr-5" slot="activator" 
                    size="65">shopping_cart
                  </v-icon>
                  <span>설문판매</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-icon 
                    class="mr-5" slot="activator" 
                    size="65" @click="pageRedirect">insert_chart
                  </v-icon>
                  <span>분석</span>
                </v-tooltip>
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
    <div v-else>
      <router-view/>
    </div>
  </v-container>
</template>

<script>
  import AddSurvey        from '@/components/survey/AddSurvey'
  import { mapMutations } from 'vuex'

  export default {
    props: ['result'],
    name: 'mySurvey',
    components:{ AddSurvey },
    mounted() {
      console.log(this.result)
    },
    methods: {
      ...mapMutations(['SET_IS_ADD_SURVEY']),
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
</style>