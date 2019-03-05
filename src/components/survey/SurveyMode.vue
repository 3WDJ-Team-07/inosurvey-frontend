<template>
  <v-container fluid grid-list-md fill-height class="pa-5 mt-5">
    <v-layout row wrap align-center justify-center class="ml-5">
      <v-flex d-flex xs12 sm6 md6 lg5 xl4 v-for="(feature, i) in surveyFeatures" :key="i">
        <v-hover>
          <v-card slot-scope="{ hover }" color="grey lighten-4" max-width="600">
            <v-img :aspect-ratio="16/12" :src="feature.img">
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-2 white--text" style="height: 100%;">{{$t(feature.hoverTitle)}}</div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-4">
              <div class="font-weight-light grey--text title mb-2">{{$t(feature.mainText)}}</div>
              <h3 :class="feature.color" class="headline font-weight-light">{{$t(feature.subText)}}</h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>
  
<script>
  export default {
    computed: {
      surveyFeatures () {
        return this.$t('Survey.surveyFeatures')
      }
    },
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