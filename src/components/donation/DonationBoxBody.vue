<template>
  <v-layout justify-center text-xs-center>
    <v-flex xs12>
      <v-card flat color="#fafafa">
        <v-container fluid>
          <v-layout align-start justify-center row fill-height style="position:relative; bottom:200px;">
            <v-flex xs5>
              <img src="/static/crip.png" style="z-index:1000; position:relative; bottom:70px;" width="60px;" alt="">
              <v-card style="z-index:10; position:relative; bottom:100px; height:700px;" class="pa-5">
                <v-card-text primary-title class="title text-sm-left" v-html="donationItems.content">
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs5>
              <v-layout row wrap >
                <div class="title font-weight-bold" style="margin-left: 75px;">
              <v-tooltip right color="info">
                <span slot="activator">
                  <i class="far fa-calendar-alt ma-1"></i>
                  <span>
                    {{donationItems.created_at | substr(10)}}
                    ~ {{donationItems.closed_at | substr(10)}}
                  </span>
                </span>
                <span>募金日程</span>
              </v-tooltip>
            </div>
          <v-container fill-height>
            <v-layout align-start justify-start row wrap>
              <v-flex xs5>
                <div class="title font-weight-bold">
                  <v-tooltip right color="info">
                    <span slot="activator" style="line-height:50px;">
                      <i class="fas fa-coins ma-1"></i>
                      <span class="info--text">
                      {{donationItems.current_amount}}
                      </span>
                      / {{donationItems.target_amount}} INO
                    </span>
                    <span>募金状況</span>
                  </v-tooltip>
              </div>
              </v-flex>
              <v-flex xs5 ml-3 mr-3>
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
              <span class="headline font-weight-bold mr-4">保有INO</span>
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="primary"
              ></v-progress-circular>
              <span v-else class="headline font-weight-bold info--text">{{coin || '0'}}</span>
              <span class="headline font-weight-bold mr-3">&nbsp;&nbsp;INO</span>
              <v-btn
                round
                large color="info"
                class="mb-3 title font-weight-bold"
                @click="SET_IS_DONATE(true)"
              >寄付する</v-btn>
            </div>
          </v-layout>
          <div style="width:90%;" v-if="!this.donationItems.users.length==0">
            <DonatorInfo
            :donationItems="donationItems"
          />
          </div>
          <div v-else>
            <div class="mt-5 font-weight-bold" style="margin-left:100px;">
              あなたが一番目の寄付主人公になってください！
            </div>
          </div>
              </v-layout>
              
            </v-flex>
            
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
