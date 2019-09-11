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
          <div class="display-1 pa-5"><span class="info--text" style="text-decoration: underline; text-underline-position: under;">{{ userinfo.nickname }} </span>様の 購入した内訳</div>
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
            text: '',
            align: 'center',
            sortable: false,
            width : '700'
          },
          { 
            text: '購買日', 
            align: 'center', 
            value:'calories'
          },
          { 
            text: '購買価格', 
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