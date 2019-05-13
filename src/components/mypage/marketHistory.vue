<template>
  <span>
    <span v-if="!loading">
    <div v-if="this.$route.name == 'markethistory'">
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
          <div class="display-1 pa-5">구매 설문 내역</div>
          <v-data-table
            :headers="headers"
            :items="buyInfo"
            :search="search"
            :pagination.sync="pagination"
            class="elevation-1 click_event"
          >
            <template v-slot:items="props">
              <router-link :to=" {
                name : 'markethistorydetail',
                params: { form_id: props.item.form_id }
              } ">
                <td class="pa-5 headline font-weight-bold black--text">{{ props.item.content }}</td>
              </router-link>
              <td class="text-xs-center grey--text subheading">
              {{props.item.date}}
              </td>
              <td class="text-xs-center subheading red--text">
              -{{props.item.price}}
              </td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
      <div class="text-xs-center pt-5">
        <v-pagination 
        v-model="pagination.page" 
        :length="pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </div>
    <div v-else> 
      <router-view/>
    </div>
    </span>
    <Spinner v-else/>
  </span>
</template>

<script>
  import myNav        from './myNav'
  import { mypage }   from '@/api/index'
  import { mapState } from 'vuex'
  import Spinner      from '@/components/Spinner'

  export default {
    components:{ myNav, Spinner },
    data () {
      return {
        drawer: null,
        loading: false,
        buyInfo: [],
        search: '',
        pagination: {},
        headers: [
          {
            text: '설문조사 제목',
            align: 'center',
            sortable: false,
            width : '700'
          },
          { 
            text: '구매일자', 
            align: 'center', 
            value:'calories'
          },
          { 
            text: '구매가격', 
            align: 'center', 
            value:'calories'
          },
        ],
      }
    },
    mounted() {
      this.FetchSurveyBuy()
    },
    computed: {
      ...mapState([ 'userinfo' ]),
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    methods: {
      FetchSurveyBuy() {
        this.loading = true
        return mypage.FetchSurveyBuy({ id: this.userinfo.id })
        .then(response => {
          console.log(response)
          this.buyInfo = response.list
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

  .click_event {
    cursor: pointer;
  }
  .myhover_style {
    cursor: pointer;
    transition: background 0.7s ease;
  }
  .myhover_style:hover{
    background: #E0E0E0;
  }

</style>