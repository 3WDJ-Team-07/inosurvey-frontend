<template>
  <v-layout justify-center text-xs-center>
    <v-flex xs12>
      <v-card flat color="#fafafa">
        <v-container fluid >
          <v-layout column fill-height>
            <v-layout row wrap justify-center class="mb-5">
              <div style="width:800px;">
                <div class="mb-4 headline text-xs-left">
                  {{donationItems.content}}
                </div>
              </div>
            </v-layout>
            <div class="title font-weight-bold px-4">
              <v-tooltip right color="info">
                <span slot="activator">
                  <i class="far fa-calendar-alt ma-1"></i>
                  <span>
                    {{donationItems.created_at | substr(10)}}
                    ~ {{donationItems.closed_at | substr(10)}}
                  </span>
                </span>
                <span>모금 일정</span>
              </v-tooltip>
            </div>
          <v-container fill-height>
            <v-layout align-center justify-center row wrap>
              <v-flex xs2>
                <div class="title font-weight-bold">
                  <v-tooltip right color="info">
                    <span slot="activator">
                      <i class="fas fa-coins ma-1"></i>
                      <span class="info--text">
                      {{donationItems.current_amount}}
                      </span>
                      / {{donationItems.target_amount}} 이노
                    </span>
                    <span>모금 상황</span>
                  </v-tooltip>
              </div>
              </v-flex>
              <v-flex xs2 ml-3 mr-3>
                <v-progress-linear
                  color="info"
                  height="25"
                  :value="rate"
                  style="font-size:17px;"
                  class="rounded-bar text-xs-left"
                >
                <span style="color:white;" class="ml-3">{{ rate }}</span>
                </v-progress-linear>
              </v-flex>
            </v-layout>
          </v-container>
          <v-layout row wrap justify-center text-xs-center>
            <div class="donate pa-5">
              <span class="headline font-weight-bold mr-4">내 보유 이노</span>
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="primary"
              ></v-progress-circular>
              <span v-else class="headline font-weight-bold info--text">{{coin || '0'}}</span>
              <span class="headline font-weight-bold mr-3">&nbsp;&nbsp;이노</span>
              <v-btn
                large color="info"
                class="mb-3 title font-weight-bold"
                @click="SET_IS_DONATE(true)"
              >기부하기</v-btn>
            </div>
          </v-layout>
          <div v-if="!this.donationItems.users.length==0">
            <DonatorInfo
            :donationItems="donationItems"
          />
          </div>
          <div v-else>
            <div class="mt-5 subheading font-weight-bold">
              당신이 첫번째 기부의 주인공이 되어주세요!
            </div>
          </div>
        </v-layout>
      </v-container>
    </v-card>
    <v-layout text-xs-center justify-center>
      <donate
        :donationItems="donationItems"
        :inocoin = "inocoin"
        />
    </v-layout>
  </v-flex>
</v-layout>

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
    filters:{
      substr(date,length){
        return date.substr(0,length)
      }
    },
    created() {
      this.fetchCoin()
    },
    computed: {
      ...mapState(['userinfo']),
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
<style scoped>
  .rounded-bar {
    border-radius: 15px;
  }
  .donate{
    border: 2px solid white;
    border-radius:30px;
    box-shadow:0 0 20px #99999970
  }
</style>
