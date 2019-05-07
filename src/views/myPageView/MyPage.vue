/* 마이페이지 */

<template>
  <v-container
    fluid grid-list-md 
		text-xs-center
    class="pa-5 mt-5">
      <div v-if="this.$route.name == 'mypage'">
        <div class="display-2 pa-5 mt-5 font-weight-bold">
          <span class="blue--text">{{userinfo.nickname}} </span>
          <span>님의 마이페이지</span> 
        </div>
        <v-layout 
          row wrap align-center 
          justify-center class="pt-5 ml-5">
          <v-flex d-flex xs12 sm3 class="mr-5">
            <v-card class="border_round elevation-4">
              <v-card-title>
                <div style="margin:0 auto">
                  <div class="display-1 font-weight-bold py-3">설문</div>
                </div>
              </v-card-title>
              <v-card flat :to="{name: 'surveyhistory'}">
                <div class="hover_style" style="margin:0 auto">
                  <div class="title font-weight-bold py-4" >응답 설문 내역</div>
                </div>
              </v-card>
              <v-card flat :to="{name: 'markethistory'}">
                <div class="hover_style" style="margin:0 auto">
                  <div class="title font-weight-bold py-4">구매 설문 내역</div>
                </div>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm3 class="mr-5">
            <v-card class="border_round elevation-4">
              <v-card-title>
                <div style="margin:0 auto">
                  <div class="display-1 font-weight-bold py-3">기부</div>
                </div>
              </v-card-title>
              <v-card v-if="userinfo.is_donator ==1" flat :to="{name: 'foundationhistory'}">
                <div class="hover_style" style="margin:0 auto">
                  <div class="title font-weight-bold py-4" >등록한 모금</div>
                </div>
              </v-card>
              <v-card flat :to="{name: 'donatehistory'}">
                <div class="hover_style py-4" style="margin:0 auto">
                  <div class="title font-weight-bold" :style="styleObject">참여한 모금</div>
                </div>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm3 >
            <v-card class="border_round pa-4 elevation-4">
              <v-card-title>
                <div style="margin:0 auto">
                  <div class="display-1 font-weight-bold">이노 지갑</div>
                  <div class="headline mt-4 font-weight-black mt-4">가용이노 <span class="display-1 font-weight-black">7500</span></div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn color="info" id="btn_center" class="title font-weight-bold" large :to="{name: 'wallethistory'}">더보기</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    <div v-else>
      <router-view/>
    </div>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        styleObject:''
      }
    },
    computed: {
      ...mapState(['userinfo']),
    },
    created() {
      if(!this.userinfo.is_donator==1){
        return this.styleObject = 'margin-top:8% ; padding-bottom:8%'
      }
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
  .hover_style:hover{
    background: #EEEEEE;
  }
</style>
