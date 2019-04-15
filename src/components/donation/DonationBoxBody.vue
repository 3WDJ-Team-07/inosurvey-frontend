/* 모금함 상세 페이지 (수정필) */
<template>
  <v-container fluid grid-list-md  class="font-weight-bold">
    <v-layout>
      <v-flex>
        <v-card flat height="48vh" fill-height>
          <div>
            <span class="title font-weight-bold">
              {{$route.params.content}}
            </span>
            <span class="grey--text ml-5">기부처 1 소개</span>
          </div>
          <div>
            <i class="far fa-calendar-alt fa-lg ma-2"></i>
            <span>{{$route.params.started_at}} ~ {{$route.params.closed_at}}</span>
          </div>
          <div>
            <i class="fas fa-coins fa-lg ma-2"></i>
            <span>{{$route.params.current_amount}}</span> / 
            <span>{{$route.params.target_amount}}</span>   이노
          </div>
          <v-flex xs4>
            <vm-progress
            :percentage="80"
            :text-inside="true"
            :stroke-width="18"
            color="info">
            </vm-progress>
          </v-flex>
          <v-flex xs4 class="mt-3">
            <v-card elevation="5" class="pa-3">
              <div class="pl-1 mt-2">
                <span class="headline font-weight-bold mr-4">내 보유 이노</span>
                <span class="ml-5 pl-5">7500이노</span>
              </div>
              <v-layout row wrap>
                <v-flex xs5 ml-2>
                  <v-text-field label="price" placeholder=" " solo>-</v-text-field>
                </v-flex>
                <v-flex xs2>
                  <div class="title font-weight-bold mt-3">이노</div>
                </v-flex>
                <v-flex xs2>
                  <v-btn large color="info title font-weight-bold">기부</v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex >
        <v-card flat height="20vh" fill-height>
          <div v-for="donator in donatorInfo"
           :key="donator.name">
            <div class="subheading font-weight-bold mb-2">
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
import {mapActions,mapState} from 'vuex'
export default {
  computed: {
    ...mapState([ 'donationBox' ]),
    donatorInfo () {
      return this.$t('Donation.donatorInfo')
    }
  }
}
</script>

<style>

</style>
