<template>
  <div transition="slide-x-transition">
      <v-img :src="donationItems.image" id="donationImg" class="donationImg" gradient="to bottom, rgba(33,92,209,1) 0%, rgba(33,92,209,0) 65%" height="80vh" style="clip-path: ellipse(70% 70% at 48% 0%); margin-left:-30px; margin-right:-30px;" 
      >
        <v-container fill-height>
          <v-layout justify-center align-center style="margin-bottom:160px;">
            <div class="font-weight-bold white--text" style="font-size: 3em; text-shadow: 0 0 20px #000000" >
              {{donationItems.title}}
            </div>
          </v-layout>
        </v-container>
    </v-img>
    <v-container fluid grid-list-md pt-5 mt-5
    v-if="!this.$store.state.loading">
    <v-layout>
      <DonationBoxBody
        :donation_id = "donation_id"
        :donationItems = "this.donationItems"
      />
    </v-layout>
    </v-container>
    <Spinner v-else/>
  </div>
</template>
<script>
  import DonationBoxBody   from '@/components/donation/DonationBoxBody'
  import { donation }      from '@/api/index'
  import Spinner           from '@/components/Spinner'

  export default {
    props: ['donation_id'],
    name: 'donationdetail',
    components: { DonationBoxBody, Spinner },
    data() {
      return {
        card: [],
        index: 0,
        donationItems:{}
      }
    },
    created() {
      this.fetchList()
    },
    methods: {
      fetchList() {
        this.$store.state.loading = true
        return donation.fetchListItem({ id: this.donation_id })
        .then(response => {
          this.donationItems = response.donations
          this.$store.state.loading = false
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>