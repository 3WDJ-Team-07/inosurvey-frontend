<template>
  <div>
    <v-container fluid grid-list-lg class="mt-3 mb-3">
      <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black ">서비스 소개</v-flex>
        </v-layout>
      <v-layout align-center justify-space-between fill-height wrap class=" pa-5">
          <v-flex xs12 sm12 md6 class="pa-2" v-for="card in cardFeatures" :key="card.title">
            <v-card color="white darken-2" class="white--text pa-4">
              <v-layout>
                <v-flex xs5 class="pa-4">
                  <v-img class="roundedImg" src="http://source.unsplash.com/bG3M_acL-Ao" height="200px" contain></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title class="black--text">
                    <div>
                      <div class="headline font-weight-light">{{ card.title }}</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>


  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Vuetify Alpha',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    },

    data: () => ({
      items: ['/static/home-parallax.png']
    }),

    computed: {
      cardFeatures () {
        return this.$t('Home.cardFeatures')
      },
      testimonials () {
        return this.$t('Home.testimonials')
      }
    }
  }
</script>

<style scoped>
 .roundedImg{
   border-radius: 50%;
   border: 2px solid lightgray;
   background-color: lightgray;
 }
</style>
