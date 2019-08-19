/* 설문결제 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isDonatorDialog" persistent max-width="700px" style="z-index:1001">
      <v-card class="pb-5 pt-4 pl-5 pr-5" style="height:500px;">
		    <span 
          class="headline right grey--text" 
          @click="close">
          <i class="fas fa-times"></i>
        </span>
        <v-layout column align-center>
          <v-card-title>
          	<span class="display-1 font-weight-bold pa-5 info--text">寄付者の現況</span>
					</v-card-title>
          <v-select
            :items="donator_item"
            v-model="donator_item.value"
            style="border: 1px solid lightgrey; margin-left: 400px;"
            label="보기"
            class="mb-5"
            item-text="name"
            item-value="value"
            color="info"
            append-icon="arrow_drop_down"
            solo hide-details>
					</v-select>
          <v-flex v-for="(item, index) in SortdonatorItem" :key="index" class="donator_style pa-3">
            <v-card-text>
              <span class="title mr-3">{{item.nickname}}</span>
              <span class="title info--text mr-5">{{item.pivot.donation_amount}}<span class="grey--text"> Ino</span></span>
              <span class="grey--text">{{item.pivot.created_at}}</span>
            </v-card-text>
          </v-flex>
				</v-layout>
        <v-card-actions class="pr-4 pl-4 pb-4 mt-5">
          <v-btn block color="info" class="font-weight-black headline" dark large @click="close">確認</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    props: ['donationItems'],
    data() {
      return {
        donator_item: [
					{ name: '早い', value: 1},
					{ name: '遅い', value: 2},
					{ name: '多い', value: 3},
					{ name: '少ない', value: 4},
				],
      }
    },
    computed: {
      // 설문결제 모달 상태값
      ...mapState(['isDonatorDialog']),
      SortdonatorItem() {
        if(!this.donator_item.value){
          this.donationItems.users.sort((x,y) => { return y.pivot.id - x.pivot.id})
          return this.donationItems.users
        } else if(this.donator_item.value == 1){
          this.donationItems.users.sort((x,y) => { return y.pivot.id - x.pivot.id})
          return this.donationItems.users
        }else if(this.donator_item.value == 2) {
          this.donationItems.users.sort((x,y) => { return x.pivot.id - y.pivot.id})
          return this.donationItems.users
        }else if(this.donator_item.value == 3) {
          this.donationItems.users.sort((x,y) => { return y.pivot.donation_amount - x.pivot.donation_amount})
          return this.donationItems.users
        }else if(this.donator_item.value == 4) {
          this.donationItems.users.sort((x,y) => { return x.pivot.donation_amount - y.pivot.donation_amount})
          return this.donationItems.users
        }
      }
    },
    methods: {
      // 설문결제 모달 상태값 변이 
      ...mapMutations(['SET_IS_DONATOR']),
      // 결제시 모달 닫기/이동
      close(){
        this.SET_IS_DONATOR(false)
      }
    }
  }
</script>

<style scoped>
	*{
		overflow: hidden;
	}
  .donator_style {
    border-bottom: 1px solid lightgrey;
    width:100%;
  }
</style>