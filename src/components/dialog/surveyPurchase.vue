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
          <span>{{ino}}</span></span>이노에 구매하시겠습니까 ?
        </v-card-title>
			</v-layout>
        <v-card-actions class="pt-4 pb-4">
          <v-btn block color="white" class="info--text font-weight-bold" @click="purchase">결제하기</v-btn>
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
                title: '구매 오류',
                text: '자신이 만든 설문조사는 구매할 수 없습니다.',
                icon: "error",
                button: "확인"
              })
            }
            else if(response.status == "duplicated"){
              swal({
                title: '구매 오류',
                text: '이미 구매한 설문입니다.',
                icon: "error",
                button: "확인"
              })
            }
            else if(response.status == "request failure"){
              swal({
                title: '구매 오류',
                text: '네트워크가 불안정합니다.',
                icon: "error",
                button: "확인"
              })
            }
            else{
              swal({
                title: '구매 성공',
                text: '구매한 설문은 마이페이지에서 볼 수 있습니다!',
                icon: "success",
                button: "확인"
              })
            }
          })
          this.SET_IS_SURVEY_PURCHASE(false);
          this.$router.replace({name:'surveymarket'})
        }else {
          swal("이노가 부족합니다 !", `\n지금 바로 이노를 충전하시겠습니까 ? \n\n내 보유이노 : ${this.currentIno} 이노`,
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