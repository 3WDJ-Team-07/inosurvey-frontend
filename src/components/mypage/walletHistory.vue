<template lang="html">
  <span>
    <div v-show="!loading">
      <v-layout row wrap justify-center>
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
        <v-flex xs12>
        <v-layout row wrap justify-center class="mr-5 pt-4 pr-4">
          <v-flex xs8>
            <div class="jumbotron">
           
          <div
          class="display-3 font-weight-bold"
          style="margin-top:50px; padding:30px;"
          >
          현재 보유 이노 
            <div>
            <span class="info--text font-italic pb-4">{{inocoin.current_ino}}</span>
            <span class="coinImg pl-3">
            <img src="/static/coin.png" width="60"></img>
            </span>
            </div>
            </div>
            </div>
            
            </v-flex>
        </v-layout>
        </v-flex>
        <v-layout row wrap justify-center class="mr-5 pr-4">
          <v-flex xs8>
            <v-card class="pa-4 mb-3" id="bordering" flat style="background-color:#BDBDBD;">
              <v-layout row wrap justify-space-around>
                <table>
                  <td class="font-weight-black title white--text">내역</td>
                  <td class="font-weight-black title white--text">제목</td>
                  <td class="font-weight-black title white--text">이노</td>
                  <td class="font-weight-black title white--text">날짜</td>
                </table>
              </v-layout>
            </v-card>
            <v-card 
            style="border-left:15px solid #CFD8DC"
            class="pa-5 mb-3" id="bordering" 
            flat v-for="(item, index) in surveyInfo" :key="index">
              <v-layout row wrap justify-space-around>
                <table>
                  <td class="subheading">{{ item.title }} {{ item.method}}</td>
                  <td class="subheading">{{ item.content }}</td>
                  <td class="title">
                      <span v-if="item.sign == '+'" style="color:#42A5F5;"><i class="fas fa-plus fa-xs"></i>&nbsp;{{ item.price }}  <span class="caption">이노</span></span> 
                      <span v-else-if="item.sign == '-'" style="color:red;"><i class="fas fa-minus fa-xs"></i>&nbsp;{{ item.price }} <span class="caption">이노</span></span> 
                      <span v-if="item.price==0" style="display:none"></span> 
                      
                      
                  </td>
                  <td class="subheading">{{ item.date }}</td>
                </table>
              </v-layout>
            </v-card>
        </v-flex>
        </v-layout>
      </v-layout>
    </div>
    <Spinner v-show="loading"/>
  </span>
</template>

<script>
  import myNav                       from './myNav'
  import { userInformation, mypage } from '@/api/index'
  import { mapState, mapMutations }  from 'vuex'
  import Spinner                     from '@/components/Spinner'


  export default {
    name: 'wallethistory',
    components:{ myNav, Spinner },
    data () {
      return {
        drawer: null,
        loading: false,
        search: '',
        inocoin: {},
        pagination: {},
        headers: [
          {
            text: '내용',
            align: 'center',
            sortable: false,
            value: 'state'
          },
          {
            text: '날짜',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { 
            text: '내역', 
            align: 'center', 
            value:'calories'
          },
          { 
            text: '이노', 
            align: 'center', 
            value: 'fat'
          },
        ],
        surveyInfo: []
      }
    },
    computed: {
      ...mapState(['userinfo']),
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    mounted() {
      this.fetchCoin()
      this.coinHistory()
    },
    methods: {
      fetchCoin() {
        return userInformation.userCoin({ id: this.userinfo.id })
        .then(response => {
          this.inocoin = response
        })
      },
      coinHistory() {
        this.loading = true
        return mypage.FetchAllHistory({ id: this.userinfo.id })
        .then(response => {
          this.surveyInfo = response.list
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
  #bordering {
    border: 1px solid lightgray;
  }
  table td {
    width: 300px;
  }
  .myhover_style {
    cursor: pointer;
    transition: background 0.7s ease;
  }
  .myhover_style:hover{
    background: #E0E0E0;
  }
</style>