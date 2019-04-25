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
          <v-progress-linear
              color="teal"
              height="30"
              :value="rate"
              style="font-size:20px;"
            >
              <span style="color:white; margin-left:6px;">{{ rate }}</span>
            </v-progress-linear>
            <!-- <v-progress-circular
              class="mr-5"
              :rotate="360"
              :size="100"
              :width="15"
              :value="rate"
              color="teal"
            >
              {{ rate }}
            </v-progress-circular> -->
          </v-flex>
          <v-flex xs12>
            <v-card class="pa-4 mt-2" flat>
              <v-layout row wrap>
                <span class="headline font-weight-bold mr-4">내 보유 이노</span>
                <span class="headline">{{inocoin.current_ino || '0'}} 이노</span>
              </v-layout>
            </v-card> 
            <v-flex xs4>
              <v-btn large block color="info" class="pt-4 pb-5 title font-weight-bold">기부하기</v-btn>
            </v-flex>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="mt-5 pt-5">
        <v-card flat fill-height>
          <div v-for="donator in donatorInfo"
           :key="donator.name">
            <div class="subheading font-weight-bold mb-3">
              <span class="mr-4">{{ donator.name }}</span>
              <span class="mx-4">
                <span class="info--text">{{ donator.sum }}</span>
                <span>이노</span>
              </span>
              <span class="mx-4">{{ donator.date }}</span>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { userInformation }  from '@/api/index'
  import { mapState } from 'vuex'

  export default {
    props: ['donationItems'],
    data() {
      return {
        inocoin:{}
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
      }
    },
    methods: {
      fetchCoin() {
        return userInformation.userCoin({ id: this.userinfo.id })
        .then(response => {
          this.inocoin = response
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
  }
</script>