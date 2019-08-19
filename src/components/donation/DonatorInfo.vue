<template>
  <v-layout text-xs-center justify-center mt-5 ml-5>
    <v-flex xs12>
      <div class="mb-3">
        <div v-for="(item, index) in SliceDonationItems" :key="index">
          <v-layout text-xs-center justify-center>
            <v-flex xs12>
              <span class="title">{{ item.nickname }}</span>
            </v-flex>
            <v-flex xs12>
              <span class="info--text title">{{ item.pivot.donation_amount }}</span>
              <span class="title font-weight-bold">INO</span>
            </v-flex>
            <v-flex xs12>
              <span class="caption">{{ item.pivot.created_at }}</span>
            </v-flex>
          </v-layout>
        </div>
      </div>
      <v-btn block color="grey" dark @click="SET_IS_DONATOR(true)" style="width:90%; margin:0 auto;">すべて</v-btn> 
      <donator
        :donationItems = "donationItems"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import donator from '@/components/dialog/donator'
  import { mapMutations } from 'vuex'
  export default {
    props: ['donationItems'],
    components: { donator },
    computed: {
      SliceDonationItems() {
        return this.donationItems.users.slice(0,3)
      }
    },
    methods: {
      ...mapMutations(['SET_IS_DONATOR'])
    }
  }
</script>