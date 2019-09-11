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
            <div class="display-1 pa-5"><span class="info--text" style="text-decoration: underline; text-underline-position: under;">{{ userinfo.nickname }} </span>様の 登録した募金箱</div>
            <!--      <div>
               <carousel-3d :width="600" :height="400" :controls-visible="true" :clickable="false">
    <slide v-for="(donation, i) in donationInfo" :index="i" >
      <figure >
        <img :src="donation.detail.image"/>
        <figcaption>
          {{donation.content}}
        </figcaption>
      </figure>
    </slide>
  </carousel-3d>
            </div>
        <v-layout row wrap justify-center text-xs-center>
                <v-flex xs12 v-for="(donation, index) in donationInfo" :key="index">
                <v-card
                  v-if="donation.content&&donation.date" class="round ma-2"
                  :to="{name: 'donationdetail',params:{donation_id:donation.form_id}}"
                >
                <div class="pa-4">
                  <span class="font-weight-bold headline pb-1">{{donation.content}}</span>
                  <span class="font">{{donation.date}}</span>
                  <span>{{donation.detail.current_amount}}/{{donation.detail.target_amount}}</span>
                </div>
              </v-card>
            </v-flex>
          </v-layout>-->
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
              <td class="title font-weight-bold">
                <i class="fas fa-coins ma-1"></i><span class="info--text mr-1">{{props.item.detail.current_amount}}</span>/{{props.item.detail.target_amount}}
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
  import { mypage, donation } from '@/api/index'
  import Spinner from '@/components/Spinner'
  import { Carousel3d, Slide } from 'vue-carousel-3d'

  export default {
    components:{ myNav, Spinner,Carousel3d,Slide },
    data () {
      return {
        drawer: null,
        loading: false,
        search: '',
        donationInfo: [],
        pagination: {},
        headers: [
          { 
            text: '募金箱名', 
            align: 'center', 
            width : '500'
          },
          { 
            text: '寄付現況', 
            align: 'center', 
          },
          { 
            text: '寄付した日', 
            align: 'center', 
          },
        ],
      }
    },
    mounted() {
      this.fetchDonateRequest()
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
    methods: {
      fetchDonateRequest() {
        this.loading = true
        return mypage.FetchDonationRequest({ id: this.userinfo.id })
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
    }
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
  .round{
    border-radius: 20px
  }
  .carousel-3d-container figure {
  margin:0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>