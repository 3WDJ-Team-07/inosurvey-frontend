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
        <v-flex xs12>
        <v-layout row wrap justify-center class="pt-4">
          <v-flex xs8>
            <div class="jumbotron">
              <div
              class="display-3 font-weight-bold"
              style="margin-top:50px;padding:30px;"
              ><span class="info--text">{{ userinfo.nickname }} </span>様の 保有INO 
                <div>
                  <span class="info--text font-italic">{{totalCoin}}</span>
                  <img src="/static/coin.png" width="60" class="pos ml-3"></img>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
        </v-flex>
        <v-layout row wrap justify-center>
          <v-flex xs8>
            <v-card class="pa-4 mb-3" id="bordering" flat style="background-color:#BDBDBD;">
              <v-layout row wrap justify-space-around>
                <table>
                  <td class="font-weight-black title white--text">内訳</td>
                  <td class="font-weight-black title white--text">情報</td>
                  <td class="font-weight-black title white--text">INO</td>
                  <td class="font-weight-black title white--text">日付</td>
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
                      <span v-if="item.sign == '+'" style="color:#42A5F5;"><i class="fas fa-plus fa-xs"></i>&nbsp;{{ item.price }}  <span class="caption">INO</span></span> 
                      <span v-else-if="item.sign == '-'" style="color:red;"><i class="fas fa-minus fa-xs"></i>&nbsp;{{ item.price }} <span class="caption">INO</span></span> 
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
      },
      totalCoin(){
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        var inoValue = this.inocoin.current_ino+""
        return inoValue.replace(regexp, ',');
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
  .pos {
    position: relative;
    top:10px;
  }
</style>