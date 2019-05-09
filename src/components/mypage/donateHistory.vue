<template>
<!-- 정은이가 수정 예정~!~!~! -->
  <span>
    <div v-if="!loading">
      <v-layout row wrap justify-space-around>
        <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
            style="z-index: 10000;"
          >
          <div class="headline text-xs-center pa-4 mt-5 info--text">{{userinfo.nickname}}</div>
            <v-list class="pt-5" dense>
              <v-divider></v-divider>
              <div class="pa-5 myhover_style text-xs-center title" @click="surveyPage">응답 설문 내역</div>
              <div class="pa-5 myhover_style text-xs-center title" @click="marketPage">구매 설문 내역</div>
              <div class="pa-5 myhover_style text-xs-center title" 
              v-if="userinfo.is_donator==1" @click="foundationPage">등록한 모금</div>
              <div class="pa-5 myhover_style text-xs-center title" @click="donatePage">참여한 모금</div>
              <div class="pa-5 myhover_style text-xs-center title" @click="walletPage">이노 지갑</div>
            </v-list>
          </v-navigation-drawer>
          <v-btn 
          color="#29B6F6" 
          dark fixed 
          left bottom 
          style="margin-bottom:350px; 
          height:200px; margin-left:-30px;" 
          @click.stop="drawer = !drawer"
          >
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
        <v-flex xs9>
          <div class="display-1">기부한 모금</div>
          <div class="headline font-weight-bold">총 기부 금액 : {{total}}</div>
            <v-data-table
            :headers="headers"
            :items="donationInfo"
            :search="search"
            :pagination.sync="pagination"
            class="elevation-1"
            >
            <template v-slot:items="props">

              <td class="pa-5 text-xs-center subheading">{{ props.item.content }}</td>
              <td class="title">
                <span v-if="props.item.sign == '+'" style="color:#42A5F5;">
                  <i class="fas fa-plus fa-xs"></i>&nbsp;{{ props.item.price }}  <span class="caption">이노</span>
                </span> 
                <span v-else-if="props.item.sign == '-'" style="color:red;"><i class="fas fa-minus fa-xs">
                  </i>&nbsp;{{ props.item.price }} <span class="caption">이노</span>
                </span> 
                <span v-else style="color:#42A5F5">{{props. item.price }}</span> 
              </td>
              <td class="text-xs-center grey--text">{{ props.item.date }}</td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
      <div class="text-xs-center pt-5">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </div>
    <Spinner v-else/>
  </span>
</template>

<script>
  import myNav from './myNav'
  import { mapState } from 'vuex'
  import { mypage } from '@/api/index'
  import Spinner from '@/components/Spinner'

  export default {
    components:{ myNav, Spinner },
    data () {
      return {
        drawer: null,
        loading: false,
        search: '',
        pagination: {},
        headers: [

          { 
            text: '설문 제목', 
            align: 'center', 
            value:'calories'
          },
          { 
            text: '기부 금액', 
            align: 'center', 
            value: 'fat'
          },
          { 
            text: '날짜', 
            align: 'center', 
            value: 'fat'
          },
        ],
        donationInfo: []
      }
    },
    mounted() {
      this.fetchDonatedonate()
    },
    computed: {
      ...mapState(['userinfo']),
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      },
      total(){
        return this.donationInfo.reduce((acc,item)=>acc+item.price,0)
      }
    
    },
    methods: {
      fetchDonatedonate() {
        this.loading = true
        return mypage.FetchDonationDonate({ id: this.userinfo.id })
        .then(response => {
          console.log(response)
          this.donationInfo = response.list
          this.loading = false
        })
      },
      surveyPage() {
      this.$router.push({name: 'surveyhistory'})
      },
      marketPage() {
        this.$router.push({name: 'markethistory'})
      },
      foundationPage() {
        this.$router.push({name: 'foundationhistory'})
      },
      donatePage() {
        this.$router.push({name: 'donatehistory'})
      },
      walletPage() {
        this.$router.push({name: 'wallethistory'})
      }
    },
  }
</script>

<style scoped>
  .myhover_style {
    cursor: pointer;
    transition: background 0.7s ease;
  }
  .myhover_style:hover{
    background: #E0E0E0;
  }
</style>