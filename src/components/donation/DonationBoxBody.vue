<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex>
        <v-card flat >
          <v-flex xs10>
          <div class="mb-4">
            <span class="headline font-weight-bold">
              {{donationItems.content}}
            </span>
          </div>
          <div>
            <i class="far fa-calendar-alt fa-2x ma-2"></i>
            <span class="subheading">
              <span class="font-weight-bold">마감날짜</span> 
               : {{donationItems.started_at}}
               ~ {{donationItems.closed_at}}
            </span>
          </div>
          <div>
            <i class="fas fa-coins fa-2x ma-2 mb-5"></i>
            <span class="subheading">
              <span class="font-weight-bold">목표금액</span> 
              : {{donationItems.current_amount}} 
              / {{donationItems.target_amount}} 이노</span>
          </div>
          <v-flex xs8>
            <v-progress-linear
              color="info"
              height="30"
              :value="rate"
              style="font-size:20px;"
            >
              <span style="color:white; margin-left:6px;">{{ rate }}</span>
            </v-progress-linear>
          </v-flex>
          </v-flex>
          <v-flex xs12>
            <v-card class="pa-4 mt-2" flat>
              <v-layout row wrap>
                <span class="headline font-weight-bold mr-4">내 보유 이노</span>
                <v-progress-circular
                  v-if="loading"
                  indeterminate
                  color="primary"
                ></v-progress-circular>
                <span v-else class="headline">{{coin || '0'}}</span>
                <span class="headline">&nbsp;&nbsp;이노</span>
              </v-layout>
            </v-card> 
            <v-flex xs4>
              <v-btn large block color="info" class="pt-4 pb-5 title font-weight-bold" @click="SET_IS_DONATE(true)">기부하기</v-btn>
            </v-flex>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <DonatorInfo
      :donationItems="donationItems"
      />
      <donate 
      :donationItems="donationItems"
      :inocoin = "inocoin"
      />
    </v-layout>
  </v-container>
</template>

<script>
  import { userInformation }        from '@/api/index'
  import { mapState, mapMutations } from 'vuex'
  import donate                     from '@/components/dialog/donate'
  import DonatorInfo                from './DonatorInfo'

  export default {
    props: ['donationItems'],
    components: { donate, DonatorInfo },
    data() {
      return {
        inocoin: {},
        loading: false
      }
    },
    created() {
      this.fetchCoin()
    },
    computed: {
      ...mapState(['userinfo']),
      donatorInfo () {
        return this.$t('Donation.donatorInfo')
      },
      rate() {
        return (this.donationItems.current_amount / this.donationItems.target_amount*100).toFixed(1) + ' %'
      },
      coin() {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return this.inocoin.current_ino.toString().replace(regexp, ',')
      }
    },
    methods: {
      ...mapMutations([ 'SET_IS_DONATE' ]),
      fetchCoin() {
        this.loading = true
        return userInformation.userCoin({ id: this.userinfo.id })
        .then(response => {
          this.inocoin = response
          this.loading = false
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
  }
</script>