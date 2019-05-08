/* 설문모드를 정하는 페이지 (설문작성/내설문보기) */

<template lang="html">
  <div>
    <v-img
      v-if="this.$route.name == 'survey'" 
      height="100vh"
      gradient="to bottom,  rgba(128, 128, 128, .9), 
      rgba(128, 128, 128, .8), rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)">
      <v-container
        fluid grid-list-md 
        fill-height 
        class="pa-5 mt-5">
        <v-layout 
          row wrap align-center 
          justify-center class="ml-5">
          <v-flex d-flex xs12 sm6 md6 lg5 xl4 class="pa-3">
            <v-hover>
              <v-card 
                slot-scope="{ hover }" color="grey lighten-4"
                max-width="600" class="rounded-card">
                <v-img :aspect-ratio="16/12" :src="Features[0].img">
                  <v-expand-transition>
                    <div
                      v-if="hover" style="cursor:pointer;height:100%;"
                      class="d-flex transition-fast-in-fast-out blue darken-1 
                      v-card--reveal display-1 white--text font-weight-thin" 
                      @click="SET_IS_ADD_SURVEY(true)">
                      {{$t(Features[0].hoverTitle)}}
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-4">
                  <div class="font-weight-light grey--text title mb-2">{{$t(Features[0].mainText)}}</div>
                  <h3 :class="Features[0].color" class="headline pa-2">{{$t(Features[0].subText)}}</h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex d-flex xs12 sm6 md6 lg5 xl4 class="pa-3">
            <v-hover>
              <v-card
                slot-scope="{ hover }" color="grey lighten-4" 
                max-width="600" class="rounded-card">
                <v-img :aspect-ratio="16/12" :src="Features[1].img">
                  <v-expand-transition>
                    <div
                      v-if="hover" style="cursor:pointer;height:100%;"
                      class="d-flex transition-fast-in-fast-out amber darken-3
                      v-card--reveal display-1 white--text font-weight-thin" 
                      @click="my_survey_list">
                      {{$t(Features[1].hoverTitle)}}
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-4">
                  <div class="font-weight-light grey--text title mb-2">{{$t(Features[1].mainText)}}</div>
                  <h3 :class="Features[1].color" class="headline pa-2">{{$t(Features[1].subText)}}</h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
        <AddSurvey/>
      </v-container>
    </v-img>
    <div v-else-if="this.$route.name == 'mysurvey'"><router-view :result = "this.result"/></div>
    <div v-else-if="this.$route.name == 'surveyform'"><router-view/></div>
    <div v-else-if="this.$route.name == 'surveyrequest'"><router-view/></div>
    <div v-else-if="this.$route.name == 'surveycomplete'"><router-view/></div>
    <div v-else-if="this.$route.name == 'analysis'"><router-view/></div>
  </div>
</template>
  
<script>
  import { mapMutations } from 'vuex'
  import AddSurvey        from '@/components/survey/AddSurvey'

  export default {
    name: 'surveyMode',
    data(){ 
      return {
        result : 'test'
      }
    },
    components:{ AddSurvey },
    computed: {
      Features() {
        return this.$t('Survey.surveyFeatures')
      }
    },
    methods: {
      // 설문제목 모달창
      ...mapMutations(['SET_IS_ADD_SURVEY']),
      my_survey_list(){
        this.$router.push({ name: 'mysurvey' })
      }
    }
  }
</script>

<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .7;
    position: absolute;
    width: 100%;
  }
  .rounded-card {
    border-radius:20px;
  }
</style>