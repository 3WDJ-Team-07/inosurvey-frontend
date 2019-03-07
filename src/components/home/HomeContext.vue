<template>
  <div>
    <v-container fluid grid-list-lg class="mt-3 mb-3">
      <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black " id="element">{{$t("Home.cardTitle")}}</v-flex>
        </v-layout>
      <v-layout align-center justify-center fill-height wrap class="pa-5">
          <v-flex xs12 sm12 md5 xl5 class="pa-2" v-for="card in cardFeatures" :key="card.title">
            <v-card color="white darken-2" class="white--text pa-3" data-aos="fade-right" data-aos-delay="200" >
              <v-layout>
                <v-flex xs5 class="pa-4">
                  <v-img class="roundedImg" :src="card.img" width="200px" height="180px" contain></v-img>
                </v-flex>
                <v-flex xs7 class="mr-4">
                  <v-card-title primary-title class="black--text">
                    <div>
                      <div class="headline font-weight-bold grey--text mb-4">{{ card.title }}</div>
                      <div>{{ card.text }}</div>
                      <div>{{ card.day }}</div>
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
   border-radius: 100%;
   border: 2px solid lightgray;
   background-color: lightgray;
 }
</style>
