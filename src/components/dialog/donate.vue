<template>
  <v-layout row justify-center>
    <v-dialog v-model="isDonateDialog" hide-overlay persistent max-width="500px">
      <v-card color="#1E88E5" class="pa-4 border_rounded">
		  <span
        class="pr-1 pt-1 right white--text" 
        @click="SET_IS_DONATE(false)">
        <i class="fas fa-times fa-2x"></i>
      </span>
      <v-layout column align-center>
        <v-card-title class="white--text font-weight-bold display-1" primary-title>
          {{ donationItems.title }}
        </v-card-title>
        <v-card-text class="subheading font-weight-bold white--text">
           <v-img :src="donationItems.image" class="white--text" height="50%"></v-img>
        </v-card-text>
        <v-card-text class="headline font-weight-bold white--text">
          <span>보유 이노 : {{ coin || '0' }} 이노</span>
        </v-card-text>
			</v-layout>
      <v-card-actions class="pb-4">
          <input type="number" class="form-control title" style="width:100%; height:50px;" ref="donateInput" @keyup.enter="donate">
        </v-card-actions>
        <v-card-actions class="pb-4">
          <v-btn block large color="white" class="font-weight-bold" @click="donate">기부하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import swal                                   from 'sweetalert'
  import { donation }                           from '@/api/index'


  export default {
    props: ['donationItems', 'inocoin'],
    name: 'donate',
    data() {
      return {
        // donationItems:{}
      }
    },
    computed: {
      ...mapState([ 'isDonateDialog', 'userinfo' ]),
      coin() {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        var ino = this.inocoin.current_ino + ""
        return ino.replace(regexp, ',')
      }
    },
    updated() {
      this.$refs.donateInput.focus()
      this.$refs.donateInput.value = ''
    },
    methods: {
      ...mapActions([ 'REQUEST_DONATE' ]),
      ...mapMutations([ 'SET_IS_DONATE', 'SET_IS_DONATE_COMPLETE' ]),
      donate(){
        if(Number(this.inocoin.current_ino) >= Number(this.$refs.donateInput.value)) {
          this.REQUEST_DONATE({
            user_id: this.userinfo.id,
            donation_id: this.$route.params.donation_id,
            ino: this.$refs.donateInput.value
          })
          .then(response=>{
            if(response.status=="end"){
              swal({
                title: '기부 오류',
                text: '이미 종료된 모금입니다.',
                icon: "error",
                button: "확인"
              })
            }
            else if(response.status =="excess"){
              swal({
                title: '기부 오류',
                text: '목표금액보다 초과한 금액을 기부할 수 없습니다.',
                icon: "error",
                button: "확인"
              })
            }
          })
          swal({
                title: '아름다운 기부',
                text: `\n${this.donationItems.title} 기부처에 ${this.$refs.donateInput.value} 이노를 기부하셨습니다 !
                \n내 보유이노 : ${(this.inocoin.current_ino - this.$refs.donateInput.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                icon: "success",
                button: "확인"
              })
          this.SET_IS_DONATE(false);
          this.$router.push({ name:'donation' })
        } else {
          swal("이노가 부족합니다 !", `\n지금 바로 이노를 충전하시겠습니까 ? \n\n내 보유이노 : ${this.coin} 이노`,
          {icon: "warning", buttons: true, dangerMode: true,})
          .then(response => {
            if(response) {
              //  이노충전하러가기 
            }
          })
        }
      }
    },
  }
</script>
