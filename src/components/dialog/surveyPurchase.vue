/* 설문구매 모달창 */
<template>
  <v-layout row justify-center>
    <v-dialog v-model="isPurchaseDialog" hide-overlay persistent max-width="350px">
      <v-card color="info" class="pa-3 border_rounded">
		  <span
        class="pr-1 pt-1 right white--text"
        @click="SET_IS_SURVEY_PURCHASE(false)">
        <i class="fas fa-times"></i>
      </span>
      <v-layout column align-center>
        <v-card-text class="subheading font-weight-bold  white--text">
          <span>{{marketItems.title}}</span>를 <span>{{ino}}</span></span>이노에 구매하시겠습니까?
        </v-card-text>
			</v-layout>
        <v-card-actions class="pb-4">
          <v-btn block color="white" class="info--text font-weight-bold" @click="purchase">결제하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { market } from '@/api/index'
  import swal                                   from 'sweetalert'
  import { mapState, mapMutations,mapActions } from 'vuex';
  export default {
    name: 'surveyPurchase',
    props:['marketItems','ino'],
    computed: {
      ...mapState(['isPurchaseDialog','userinfo'])
    },
    methods: {
      ...mapMutations([
      'SET_IS_SURVEY_PURCHASE'
      ]),
      ...mapActions(['MARKET_PURCHASE']),
      purchase(){
        this.MARKET_PURCHASE({
           id:this.marketItems.id,
           user_id : this.userinfo.id
        })
        .then(response => {
          console.log('구매하기',response)
          if(response.status==202){
            swal({
          title: '구매 오류',
          text: '자신이 만든 설문조사는 구매할 수 없습니다.',
          icon: "error",
          button: "확인"
        })
          }
        })
        // return market.marketPurchaseTest({

        // })

        this.SET_IS_SURVEY_PURCHASE(false);
        this.$router.replace({name:'surveymarket'})
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