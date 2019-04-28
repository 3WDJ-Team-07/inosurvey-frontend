/* 기부 페이지 (수정필) */

<template>
  <v-fade-transition mode="out-in">
    <v-container grid-list-xl  class="mt-4">
      <v-layout
        text-xs-center
        row wrap
        class="pa-4">
        <v-flex pa-3 xs4 v-for="(card,index) in donationBox" :key="index"> 
            <router-link 
            :to="{
              name: 'donationdetail', 
              params: { donation_id: card.id }
            }">
              <DonationCard
              :card = "card"
              :index = "index"/>
            </router-link>
        </v-flex>
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
      this.FETCH_DONATION()
      console.log(this.donationBox)
    },
    methods: {
      ...mapActions([
        'FETCH_DONATION'
      ]),
    }
  }
</script>
