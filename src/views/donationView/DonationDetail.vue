/* 기부페이지 모금함 상세 */
<template>
  <div>
    <v-container fluid grid-list-md pt-4 mt-5>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#FAFAFA" height="10vh" flat >
            <div fluid grid-list-md>
              <v-layout row wrap>
                <div  class="display-1 font-weight-bold pt-3 ml-5 xs-2">
                {{$route.params.title}} <!-- 수정 필 새로고침시 없어짐 - 라우팅시 받아왔기 때문 -->
                </div>
              </v-layout>
            </div>
          </v-card>
          <v-divider/>
        </v-flex>
        <v-flex xs2 md2>
          <v-card height="80vh" max-width="300" class="pt-5 text-xs-center">
            <v-card flat height="48vh" fill-height>
              <div class="headline font-weight-bold">모금 소개</div>
            </v-card>
            <v-card flat  height="20vh" fill-height>
              <div class="headline font-weight-bold">기부자 현황</div>
            </v-card>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card height="80vh" class="pa-4">
            <DonationBoxBody/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>    
</template>
<script>
import DonationBoxBody from '@/components/donation/DonationBoxBody'
import {mapActions,mapState} from 'vuex'

export default {
  name: 'donationdetail',
  components: {
    DonationBoxBody
  },
  computed: {
    ...mapState([ 'donationBox' ])
  },
  created(){
    this.fetchDonation()
  },
  methods: {
    ...mapActions([ 'FETCH_DONATION' ]),
    fetchDonation(){ this.FETCH_DONATION() }
  }
}

</script>

<style>
</style>
