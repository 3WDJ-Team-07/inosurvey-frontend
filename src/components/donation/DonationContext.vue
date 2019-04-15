/* 기부 페이지 (수정필) */

<template>
  <v-fade-transition mode="out-in">
    <v-container fluid grid-list-xl  class="mt-3 mb-3">
      <v-layout
        justify-center text-xs-center
        fill-height row wrap
        class="pa-4 pl-5 pr-5">
        <v-flex pa-3 xs12 sm12 md3 xl3
          v-for="(card) in donationBox"
          :key="card.id"
          @click="toDetail(card.id,card.title,card.content,card.started_at,card.closed_at,card.current_amount,card.target_amount)"> 
          <!-- 아이디만 받게 수정할것 -->
          <v-card class="rounded-card" style="cursor:pointer">
            <v-img :src="card.file" class="white--text" height="200px"></v-img>
            <v-card-text class="pt-2" ></v-card-text>
              <div class="headline font-weight-bold mb-3">{{card.id}}.{{ card.title }}</div>
              <div class="sub-heading font-weight-black pb-2 px-3">{{ card.content }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-fade-transition>    
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([ 'donationBox' ])
    },
    created() {
      this.fetchDonation()
    },
    methods: {
      ...mapActions(['FETCH_DONATION']),
      fetchDonation() {
        this.FETCH_DONATION()
      },
      toDetail(id,title,content,started_at,closed_at,current_amount,target_amount){
        //id만 넘기는걸로 수정 필요
        this.$router.push({
          name: 'donationdetail', 
          params: {
            id: id, title: title, content: content, started_at: started_at,
            closed_at: closed_at, current_amount: current_amount, target_amount: target_amount
          }
        })
      }
    }
  }
</script>

<style>
  .rounded-card{
    border-radius:20px;
  }
</style>
