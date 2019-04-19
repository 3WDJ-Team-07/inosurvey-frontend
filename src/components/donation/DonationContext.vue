/* 기부 페이지 (수정필) */

<template>
  <v-fade-transition mode="out-in">
    <v-container grid-list-xl  class="mt-4">
      <v-layout
        text-xs-center
        row wrap
        class="pa-4 pl-5 pr-5">
          <DonationCard 
            v-for="(card,index) in donationBox"
            :key = "index"
            :card = "card"
            :index =" index"
          />
      </v-layout>
    </v-container>
  </v-fade-transition>    
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import DonationCard             from '@/components/donation/DonationCard'

  export default {
    name: 'DonationContext',
    components: { DonationCard },
    computed: {
      ...mapState([ 'donationBox' ])
    },
    created() {
      this.fetchDonation()
    },
    methods: {
      ...mapActions(['FETCH_DONATION']),
      fetchDonation() {
        this.FETCH_DONATION()
      }
    }
  }
</script>
