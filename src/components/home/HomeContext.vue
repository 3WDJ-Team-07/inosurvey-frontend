/* 메인페이지( 서비스소개 ) */

<template>
  <div>
    <v-container 
      fluid grid-list-lg 
      class="mt-3 mb-3">
      <v-layout row>
        <v-flex xs12 class="text-xs-center display-1 font-weight-black " id="element">
          {{$t("Home.cardTitle")}}
        </v-flex>
      </v-layout>
      <v-layout 
        align-center 
        justify-center 
        fill-height 
        wrap class="pa-5">
        <v-flex 
          xs12 sm12 md5 xl5 
          class="pa-2" 
          v-for="card in cardFeatures" 
          :key="card.title">
          <v-card 
            color="white darken-2" 
            class="white--text pa-3" 
            data-aos="fade-right" 
            data-aos-delay="200">
            <v-layout>
              <v-flex xs5 class="pa-5">
                <v-avatar size="150" class="grey lighten-2" >
                  <v-img :src="card.img" contain></v-img>
                </v-avatar>
              </v-flex>
              <v-flex xs7 class="mr-4">
                <v-card-title class="black--text">
                  <div>
                    <div class="headline font-weight-bold grey--text mb-4">{{ card.title }}</div>
                    <div class="caption font-weight-black">{{ card.subtitle }}</div>
                    <div>{{ card.text }}</div>
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
      // locales 언어 설정
      cardFeatures () {
        return this.$t('Home.cardFeatures')
      },
      testimonials () {
        return this.$t('Home.testimonials')
      }
    }
  }
</script>
