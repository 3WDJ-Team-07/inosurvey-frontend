<template>
  <v-container fluid grid-list-md fill-height class="pa-5 mt-5">
    <v-layout row wrap align-center justify-center class="ml-5">
      <v-flex d-flex xs12 sm6 md6 lg5 xl4>
        <v-hover>
          <v-card slot-scope="{ hover }" color="grey lighten-4" max-width="600">
            <v-img :aspect-ratio="16/12" :src="Features[0].img">
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-2 white--text" style="cursor:pointer;height:100%;" @click="SET_IS_ADD_SURVEY(true)">{{$t(Features[0].hoverTitle)}}</div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-4">
              <div class="font-weight-light grey--text title mb-2">{{$t(Features[0].mainText)}}</div>
              <h3 :class="Features[0].color" class="headline font-weight-light">{{$t(Features[0].subText)}}</h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6 lg5 xl4>
        <v-hover>
          <v-card slot-scope="{ hover }" color="grey lighten-4" max-width="600">
            <v-img :aspect-ratio="16/12" :src="Features[1].img">
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-2 white--text" style="cursor:pointer;height: 100%;" @click="MySurveyRoute">{{$t(Features[1].hoverTitle)}}</div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-4">
              <div class="font-weight-light grey--text title mb-2">{{$t(Features[1].mainText)}}</div>
              <h3 :class="Features[1].color" class="headline font-weight-light">{{$t(Features[1].subText)}}</h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <AddSurvey></AddSurvey>
  </v-container>
</template>
  
<script>
import { mapMutations } from 'vuex'
import AddSurvey from '@/components/survey/AddSurvey'

  export default {
    name: 'surveyMode',
    components:{
      AddSurvey
    },
    computed: {
      Features () {
        return this.$t('Survey.surveyFeatures')
      }
    },
    methods: {
      ...mapMutations([
        'SET_IS_ADD_SURVEY'
      ]),
      MySurveyRoute(){
        this.$router.replace("/join")
      }
    }
  }
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
}
</style>