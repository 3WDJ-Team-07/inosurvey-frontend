/* 기부 페이지 (수정필) */

<template>
  <span>
    <v-container grid-list-xl  class="mt-4" v-if="!this.$store.state.loading">
      <v-layout
        row wrap
        class="pa-4 pl-5 pr-5">
        <v-flex pa-4 xs4 v-for="(card,index) in donationBox" :key="index"> 
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
    <Spinner2 v-else/>
  </span>    
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import DonationCard             from '@/components/donation/DonationCard'
  import Spinner2                  from '@/components/Spinner2'

  export default {
    name: 'DonationContext',
    components: { DonationCard, Spinner2 },
    computed: {
      ...mapState([ 'donationBox' ])
    },
    created() {
      this.FETCH_DONATION()
    },
    methods: {
      ...mapActions([
        'FETCH_DONATION'
      ]),
    }
  }
</script>
