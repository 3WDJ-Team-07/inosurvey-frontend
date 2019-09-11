/* 설문구매 모달창 */
<template>
  <v-layout row justify-center>
    <v-dialog v-model="isPurchaseDialog" hide-overlay persistent max-width="500px">
      <v-card color="info" class="pa-3 border_rounded">
		  <span
        class="pr-1 pt-1 right white--text"
        @click="SET_IS_SURVEY_PURCHASE(false)">
        <i class="fas fa-times fa-2x"></i>
      </span>
      <v-layout column align-center>
        <v-card-title primary-title class="display-1 mt-4 font-weight-bold white--text">
          {{marketItems.title}}
        </v-card-title>
        <v-card-title primary-title class="white--text title font-weight-bold">
          <span>{{ino}}</span></span>INOで購入しますか？
        </v-card-title>
			</v-layout>
        <v-card-actions class="pt-4 pb-4">
          <v-btn block color="white" class="info--text font-weight-bold" @click="purchase">決済</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { market, userInformation } from '@/api/index'
  import swal                                  from 'sweetalert'
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'surveyPurchase',
    props: ['marketItems','ino'],
    data() {
      return {
        inocoin: "" 
      }
    },
    computed: {
      ...mapState(['isPurchaseDialog','userinfo']),
      currentIno() {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        var ino = this.inocoin + ""
        return ino.replace(regexp, ',')
      }
    },
    mounted() {
      this.fetchCoin()
    },
    methods: {
      ...mapMutations([ 'SET_IS_SURVEY_PURCHASE' ]),
      ...mapActions([ 'MARKET_PURCHASE' ]),
      fetchCoin() {
        return userInformation.userCoin({ id: this.userinfo.id })
        .then(response => {
          this.inocoin = response.current_ino
        })
      },
      purchase(){
        if(Number(this.inocoin) >= Number(this.ino)) {
          this.MARKET_PURCHASE({
            id:this.marketItems.id,
            user_id : this.userinfo.id
          })
          .then(response => {
            if(response.status == "mysurvey"){
              swal({
                title: '購入エラ',
                text: '自分が作成したアンケートは購入できません。',
                icon: "error",
                button: "確認"
              })
            }
            else if(response.status == "duplicated"){
              swal({
                title: '購入エラ',
                text: 'もう購入したアンケートです。',
                icon: "error",
                button: "確認"
              })
            }
            else if(response.status == "request failure"){
              swal({
                title: '購入成功',
                text: 'ネットワークに問題があります。',
                icon: "error",
                button: "確認"
              })
            }
            else{
              swal({
                title: '購入成功',
                text: '購入したアンケートはマイページで見られます!',
                icon: "success",
                button: "確認"
              })
            }
          })
          this.SET_IS_SURVEY_PURCHASE(false);
          this.$router.replace({name:'surveymarket'})
        }else {
          swal("INOが不足です", `\n今充電しますか？\n\n保有しているINO : ${this.currentIno} INO`,
          {icon: "warning", buttons: true, dangerMode: true,})
          .then(response => {
            if(response) {
              //  이노충전하러가기 
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
	*{
		overflow: hidden;
	}
	.border_rounded{
		border-radius: 20px;
	}
  .subheading{
    line-height: 1.5em
  }
</style>