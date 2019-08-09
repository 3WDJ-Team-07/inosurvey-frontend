<template>
  <div>
    <v-container 
      fluid grid-list-lg 
      class="my-1">
      <v-layout 
        justify-center 
        fill-height 
        wrap class="pa-5"
        style="margin-top:100px;"
        >
        <v-flex id="element"
          xs12 sm12 md3 xl3 
          class="pa-2" 
          v-for="card in cardFeatures" 
          :key="card.title">
          <div
            color="white darken-2" 
            class="white--text pa-3 servicebox" 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500">
            <v-container>
              <v-layout column align-center text-xs-center>
                <v-img :src="card.img" width="100"></v-img>
                <div class="headline font-weight-bold info--text mb-4">{{ card.title }}</div>
                <div class="black--text">{{ card.text }}</div>
              </v-layout>
            </v-container>
          </div>
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