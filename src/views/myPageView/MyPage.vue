/* 마이페이지 */

<template>
  <v-container
    grid-list-md 
		text-xs-center
    class="pa-5 mt-5"
    style="max-width: 100vw; padding:0px;"
    >

      <div v-if="this.$route.name == 'mypage'">
    <v-img src="/static/mypage.png" style="margin-bottom:-50px; margin-right:-50px;">

        <div class="display-2 pa-5 mt-5 font-weight-bold">
          <span class="blue--text">{{userinfo.nickname}} </span>
          <span>様のマイページ</span> 
        </div>
        <v-layout 
          row wrap align-center 
          justify-center class="pt-2 ml-5">
          <v-flex d-flex xs12 sm3 class="mr-5">
            <v-card class="border_round elevation-4">
              <v-card-title style="background-color:#66B3FF">
                <div style="margin:0 auto">
                  <div class="display-1 font-weight-bold py-1 white--text">アンケート</div>
                </div>
              </v-card-title>
              <v-card flat :to="{name: 'surveyhistory'}">
                <div class="hover_style" style="margin:0 auto">
                  <div class="title font-weight-bold py-4" >回答の記録</div>
                </div>
              </v-card>
              <v-card flat :to="{name: 'markethistory'}">
                <div class="hover_style" style="margin:0 auto">
                  <div class="title font-weight-bold py-4">購入の記録</div>
                </div>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm3 class="mr-5">
            <v-card class="border_round elevation-4">
              <v-card-title style="background-color:#66B3FF">
                <div style="margin:0 auto">
                  <div class="display-1 font-weight-bold py-1 white--text">寄付</div>
                </div>
              </v-card-title>
              <v-card v-if="userinfo.is_donator ==1" flat :to="{name: 'foundationhistory'}">
                <div class="hover_style" style="margin:0 auto">
                  <div class="title font-weight-bold py-4" >登録した募金箱</div>
                </div>
              </v-card>
              <v-card flat :to="{name: 'donatehistory'}">
                <div class="hover_style py-4" style="margin:0 auto">
                  <div class="title font-weight-bold" :style="styleObject">寄付した募金箱</div>
                </div>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm3 class="mr-5">
            <v-card class="border_round elevation-4">
              <v-card-title style="background-color:#66B3FF">
                <div style="margin:0 auto">
                  <div class="display-1 font-weight-bold py-1 white--text">INOウォレット</div>
                </div>
              </v-card-title>
              <v-card flat>
                <div class="border" style="margin:0 auto">
                  <div class="font-weight-black my-3">保有しているINO <span class="headline info--text font-weight-black">{{totalCoin}}</span> INO</div>
                </div>
              </v-card>
              <v-card flat  :to="{name: 'wallethistory'}">
                <div class="hover_style" style="margin:0 auto">
                  <div class="title font-weight-bold py-4">もっと見る</div>
                </div>
              </v-card>
            </v-card>
          </v-flex>
        </v-layout>
    </v-img>
      </div>
    <div v-else>
      <router-view/>
    </div>

  </v-container>
</template>

<script>
  import { mapState }        from 'vuex'
  import { userInformation } from '@/api/index'

  export default {
    data() {
      return {
        styleObject:'',
        inocoin: {}
      }
    },
    computed: {
      ...mapState(['userinfo']),
      totalCoin(){
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        var inoValue = this.inocoin.current_ino+""
        return inoValue.replace(regexp, ',');
      }
    },
    created() {
      if(!this.userinfo.is_donator==1){
        return this.styleObject = 'margin-top:8% ; padding-bottom:8%'
      }
    },
    mounted() {
      this.fetchCoin()
    },
    methods: {
      fetchCoin() {
        return userInformation.userCoin({ id: this.userinfo.id })
        .then(response => {
          this.inocoin = response
        })
      },
    },
  }

</script>

<style scoped>
	#btn_center{
		border-radius: 5%;
		margin: 0 auto;
		width: 80%;
	}
	.border_round{
		border-radius: 20px;
	}
  .hover_style {
    cursor: pointer;
    transition: background 0.3s ease;
    border-top: 1px solid lightgrey;
  }
  .border{
    border-top: 1px solid lightgrey;
  }
  .hover_style:hover{
    background: #EEEEEE;
  }
</style>
