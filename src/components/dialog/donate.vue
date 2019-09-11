<template>
  <v-layout row justify-center>
    <v-dialog v-model="isDonateDialog" persistent max-width="500px">
      <v-card color="#1E88E5" class="pa-4 border_rounded">
		  <span
        class="pr-1 pt-1 pb-3 right white--text" 
        @click="SET_IS_DONATE(false)">
        <i class="fas fa-times fa-2x"></i>
      </span>
      <v-layout column align-center>
        <v-card-title class="mt-4 white--text text-xs-center font-weight-bold display-1" primary-title>
          {{ donationItems.title }}
        </v-card-title>
        <v-card-text class="subheading font-weight-bold white--text">
           <v-img :src="donationItems.image" class="white--text" height="50%"></v-img>
        </v-card-text>
        <v-card-text class="headline font-weight-bold white--text">
          <span>保有しているINO : {{ coin || '0' }} INO</span>
        </v-card-text>
			</v-layout>
      <v-card-actions class="pb-4">
          <input type="number" class="form-control title" style="width:100%; height:50px;" ref="donateInput" @keyup.enter="donate">
        </v-card-actions>
        <v-card-actions class="pb-4">
          <v-btn block large color="white" class="font-weight-bold" @click="donate">寄付します。</v-btn>
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
      ...mapActions([ 'REQUEST_DONATE', 'FETCH_DONATION' ]),
      ...mapMutations([ 'SET_IS_DONATE', 'SET_IS_DONATE_COMPLETE' ]),
      async donate(){
        if(Number(this.inocoin.current_ino) >= Number(this.$refs.donateInput.value)) {
          let response
          try {
            response = await this.REQUEST_DONATE({
              user_id: this.userinfo.id,
              donation_id: this.$route.params.donation_id,
              ino: this.$refs.donateInput.value
            })
          } catch (error) {
            console.log(error)
          }
          this.SET_IS_DONATE(false);
          this.$router.push({ name:'donation' })
          this.FETCH_DONATION()
          if(response.status == "success") {
            await swal({
              title: '世界を変える寄付',
              text: `\n${this.donationItems.title} という所に ${this.$refs.donateInput.value} INOを寄付しました！
              \n保有しているINO : ${(this.inocoin.current_ino - this.$refs.donateInput.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
              icon: "success",
              button: "OK"
            })
          }
          if(response.status=="end"){
            await swal({
              title: '寄付失敗',
              text: 'もう機関が過ぎました。',
              icon: "error",
              button: "OK"
            })
          }
          if(response.status =="excess"){
            await swal({
              title: '寄付失敗',
              text: '満額より超える価格を寄付できません。',
              icon: "error",
              button: "OK"
            })
          }
        } else {
          swal("INOが足りないです！", `\n今、INOを充塡しますか？ \n\n保有INO : ${this.coin} INO`,
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

<style >
  .v-dialog:not(.v-dialog--fullscreen) {
    max-height: 70%;
  }
</style>