<template>
  <div transition="slide-x-transition">
      <v-img :src="donationItems.image" id="donationImg" class="donationImg" height="35vh" color=""
      gradient="to top,  rgba(0, 0, 0, .6), rgba(0, 0, 0, .1)"
      style="border-bottom-left-radius: 5%; 
   border-bottom-right-radius: 5% ">

        <v-container fill-height>
          <v-layout align-center justify-center>
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