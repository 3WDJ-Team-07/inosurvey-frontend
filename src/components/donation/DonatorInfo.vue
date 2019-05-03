<template>
  <span>
    <v-flex style="margin-top:80px;" xs12>
        <div class="subheading font-weight-bold mb-3">
          <v-layout row wrap>
            <v-flex xs8>
                <span class="info--text mr-4 title">{{ donationItems.users[0].pivot.donation_amount }} 이노</span>
                <span class="mr-4 caption">{{ donationItems.users[0].pivot.created_at }}</span>
                <span>{{ donationItems.users[0].nickname }}</span>
            </v-flex>
            <v-flex xs8>
                <span class="info--text mr-4 title">{{ donationItems.users[1].pivot.donation_amount }} 이노</span>
                <span class="mr-4 caption">{{ donationItems.users[1].pivot.created_at }}</span>
                <span>{{ donationItems.users[1].nickname }}</span>
            </v-flex>
            <v-flex xs8>
                <span class="info--text mr-4 title">{{ donationItems.users[2].pivot.donation_amount }} 이노</span>
                <span class="mr-4 caption">{{ donationItems.users[2].pivot.created_at }}</span>
                <span>{{ donationItems.users[2].nickname }}</span>
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
    methods: {
      ...mapMutations(['SET_IS_DONATOR'])
    }
  }
</script>
