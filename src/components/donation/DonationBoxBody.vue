<template>
  <v-container fluid grid-list-md  class="font-weight-bold">
    <v-layout>
      <v-flex>
        <v-card flat fill-height>
          <div class="mb-4">
            <span class="headline font-weight-bold">
              {{donationItems.content}}
            </span>
          </div>
          <div>
            <i class="far fa-calendar-alt fa-2x ma-2"></i>
            <span class="subheading"> {{donationItems.started_at}}
               ~ {{donationItems.closed_at}}
            </span>
          </div>
          <div>
            <i class="fas fa-coins fa-2x ma-2 mb-5"></i>
            <span class="subheading">{{donationItems.current_amount}} / {{donationItems.target_amount}} 이노</span>
          </div>
          <v-flex xs4>
            <vm-progress
            :percentage="rate"
            :text-inside="true"
            :stroke-width="22"
            color="info">
            </vm-progress>
          </v-flex>
          <v-flex xs5>
            <v-card class="pa-4 mt-2" flat>
              <div>
                <span class="headline font-weight-bold mr-4">내 보유 이노</span>
                <span class="title">7500이노</span>
              </div>
              <v-layout row wrap>
                <v-flex xs8 mt-4>
                  <input type="text" class="form-control">
                  <span class="title font-weight-bold ml-3">이노</span>
                </v-flex>
                <v-flex xs3>
                  <v-btn large color="info title font-weight-bold mt-3">기부하기</v-btn>
                </v-flex>
              </v-layout>
            </v-card>
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
  export default {
    props: ['donationItems'],
    computed: {
      donatorInfo () {
        return this.$t('Donation.donatorInfo')
      },
      rate(){
        return (this.donationItems.current_amount / this.donationItems.target_amount*100).toFixed(1)
      }
    },
  }
</script>