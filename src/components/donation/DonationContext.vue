/* 설문마켓 상품코너 */

<template>
  <v-fade-transition mode="out-in">
    <v-container fluid grid-list-xl  class="mt-3 mb-3">
      <v-layout 
      justify-center 
      text-xs-center 
      fill-height wrap 
      class="pa-4 pl-5 pr-5"
      >
        <v-flex 
        pa-3 xs12 sm12 md3 xl3 
        v-for="card in cardFeatures"
        :key="card.title" 
        @click="toDetail"> 
          <v-card class="rounded-card">
            <v-img :src="card.img"class="white--text" height="200px">
            </v-img>
            <v-flex>
              <div class="headline font-weight-bold mb-3">{{ card.title }}</div>
              <div class="sub-heading font-weight-black">{{ card.text }}</div>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-fade-transition>    
</template>

<script>
export default {
    computed: {
      cardFeatures () {
        return this.$t('Donation.cardFeatures')
      }
    },
    methods: {
      toDetail() {
        this.$router.push("donationdetail")
      }
    }
  }
</script>

<style>
.rounded-card{
      border-radius:20px;
    }
</style>
