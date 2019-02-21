<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-3">컨텐츠 설명해라 마</v-flex>
        </v-layout>
      <v-layout row justify-center align-center wrap>
        <v-flex xs12 sm12 md6 class="pa-4" v-for="card in cardFeatures" :key="card.title" fill-height>
           <v-card flat heigth="100%" class="elevation-0">
              <v-responsive>
                <v-img height="300px">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">KETO</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
              </v-responsive>
              <v-card-text>
                <div>
                  <h3 class="headline mb-0">{{ card.title }}</h3>
                    <div>{{ card.text }}</div>
                </div>
              </v-card-text>
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
</style>
