/* 모금함 등록페이지 */

<template>
  <v-container>
    <v-layout class="ma-5 display-4">
      <div fluid grid-list-md>
        <v-layout row wrap>
          <div class="display-1 font-weight-bold pt-3 ml-5 xs-12">
            모금함등록
          </div>
        </v-layout>
      </div>
    </v-layout>
    <div>
      <v-btn color="info" block @click="boxregister">등록하기</v-btn>
    </div>
    <v-alert
    :value="true" outline
    color="info" icon="check_circle"
    >모금함이 성공적으로 등록되었습니다.</v-alert>
  </v-container>
</template>

<script>
  import DonationJumbotron from '@/components/donation/DonationJumbotron'
  
  export default {
    name: 'adddonationbox',
    components: { DonationJumbotron },
    methods:{
      boxregister(){
        this.$router.replace("donation");
      }
    }
  }
</script>
