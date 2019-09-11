<template>
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
              <div class="pa-5 myhover_style text-xs-center title" @click="surveyPage">回答されたアンケート</div>
              <div class="pa-5 myhover_style text-xs-center title" @click="marketPage">購入したアンケート</div>
              <div class="pa-5 myhover_style text-xs-center title" 
              v-if="userinfo.is_donator==1" @click="foundationPage">登録した募金箱</div>
              <div class="pa-5 myhover_style text-xs-center title" @click="donatePage">参加した募金箱</div>
              <div class="pa-5 myhover_style text-xs-center title" @click="walletPage">INOウォレット</div>
            </v-list>
          </v-navigation-drawer>
          <v-btn 
          color="#29B6F6" 
          dark fixed 
          left bottom 
          style="margin-bottom:270px; 
        height:200px; margin-left:-30px;" 
          @click.stop="drawer = !drawer"
          >
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
        <v-flex xs9>
          <div class="display-1 font-weight-bold mb-2"><span class="info--text" style="text-decoration: underline; text-underline-position: under;">{{ userinfo.nickname }} </span>様の 参加した募金箱</div>
          <div class="headline font-weight-bold mb-5">総 寄付金額 : <span class="red--text">{{total}}</span> INO</div>
            <v-data-table
            :headers="headers"
            :items="donationInfo"
            :search="search"
            :pagination.sync="pagination"
            class="elevation-1"
            >
            <template v-slot:items="props">
              <router-link :to=" {
                name : 'donationdetail',
                params: { donation_id: props.item.form_id }
              } ">
              <td class="pa-5 text-xs-center font-weight-bold headline black--text">{{ props.item.content }}</td>
              </router-link>
              <td class="title">
                <span v-if="props.item.sign == '+'" style="color:#42A5F5;">
                  <i class="fas fa-plus fa-xs"></i>&nbsp;{{ props.item.price }}  <span class="caption">INO</span>
                </span> 
                <span v-else-if="props.item.sign == '-'" style="color:red;"><i class="fas fa-minus fa-xs">
                  </i>&nbsp;{{ props.item.price }} <span class="caption">INO</span>
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
            text: '募金箱名', 
            align: 'center'
          },
          { 
            text: '寄付金額', 
            align: 'center'
          },
          { 
            text: '日付', 
            align: 'center'
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
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        var totalCoin = this.donationInfo.reduce((acc,item)=>acc+item.price,0)+""
        return totalCoin.replace(regexp, ',');
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