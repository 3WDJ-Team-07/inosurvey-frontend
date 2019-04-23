<template>
  <div>
    <v-container fluid grid-list-md pt-5 mt-5>
      <v-layout row wrap>
        <v-flex xs12>
<<<<<<< HEAD
          <v-card color="#FAFAFA" height="10vh" flat>
            <div fluid grid-list-md>
              <v-layout row wrap>
                <div  class="display-1 font-weight-bold pt-3 ml-5 xs-2">{{donationItems.title}}</div>
=======
          <pre>as{{card}}</pre>
          <pre>ds{{index}}</pre>
          <v-card color="#FAFAFA" height="10vh" flat >
            <div fluid grid-list-md>
              <v-layout row wrap>
                <div  class="display-1 font-weight-bold pt-3 ml-5 xs-2">
                {{card.title}} <!-- 수정 필 새로고침시 없어짐 - 라우팅시 받아왔기 때문 -->
                </div>
>>>>>>> dd1ef3659e5480de63485478b0c1f56e87883cbc
              </v-layout>
            </div>
          </v-card>
          <v-divider/>
        </v-flex>
        <v-flex xs2 md2>
          <v-card height="80vh" max-width="300" class="pt-5 text-xs-center">
            <v-card flat height="50vh" fill-height>
              <div class="headline font-weight-bold">모금 소개</div>
            </v-card>
            <v-card flat  height="20vh" fill-height>
              <div class="headline font-weight-bold">기부자 현황</div>
            </v-card>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card height="80vh" class="pa-4">
            <DonationBoxBody
            :donation_id = "donation_id"
            :donationItems = "this.donationItems"
            />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>    
</template>
<script>
  import DonationBoxBody    from '@/components/donation/DonationBoxBody'
  import axios              from 'axios'

  export default {
    props: ['donation_id'],
    name: 'donationdetail',
    data() {
      return {
        card: [],
        index: 0
      }
    },
    components: { DonationBoxBody },
    data() {
      return {
        donationItems:{}
      }
    },
    created() {
      this.fetchList()
    },
    methods: {
      fetchList() {
        axios.post('http://172.26.1.251:8000/api/donation/show', {id: this.donation_id})
        .then(response => {
          this.donationItems = response.data.donations
          console.log(this.donationItems)
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>