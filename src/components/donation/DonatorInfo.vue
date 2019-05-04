<template>
  <span>
    <v-flex style="margin-top:80px;" xs12>
        <div class="subheading font-weight-bold mb-3">
          <v-layout row wrap>
            <v-flex xs8 v-for="(item, index) in SliceDonationItems" :key="index">
              <span v-if="">
                <span class="mr-4">{{ item.nickname }}</span>
                <span class="info--text mr-2 title">{{ item.pivot.donation_amount }}</span><span class="title font-weight-bold">이노</span> 
                <span class="mr-4 caption">{{ item.pivot.created_at }}</span>
              </span>
            </v-flex>
          </v-layout>
        </div>
    </v-flex>
    <v-flex xs5>
      <v-btn block color="grey" dark @click="SET_IS_DONATOR(true)">모두보기</v-btn>
    </v-flex>
    <donator
    :donationItems = "donationItems"
    />
  </span>
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
