/* 설문마켓 상품코너 */

<template>
  <v-fade-transition mode="out-in">
    <v-container fluid grid-list-xl>
      <v-layout text-xs-center row wrap class="pa-4">
        <v-flex pa-3 xs12 sm12 md6 xl6
          v-for="card in cardFeatures"
          :key="card.title" @click="toDetail"> 
            <v-card class="card pt-4" height="160px" style="cursor:pointer;">
              <div class="pt-4">
              <div class="card-title headline font-weight-bold mb-3">{{ card.title }}</div>
              <div class="card-text body-2 font-weight-black">{{ card.text }}</div>
              <div class="card-hover headline font-weight-bold mb-3">{{ card.hover }}</div>
              <div class="card-hoversub body-2 font-weight-black">{{ card.hoversub }}</div>
              </div>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-fade-transition>
</template>

<script>
export default {
  computed: {
    cardFeatures () {
      return this.$t('Market.cardFeatures')
    }
  },
  methods:{
    toDetail(){
      this.$router.push("detail")
    }
  }
}
</script>

<style>
  .card>div>.card-hover, .card>div>.card-hoversub{
    display: none;
  }
  .card:hover>div>.card-title, .card:hover>div>.card-text{
    display: none;
  }
  .card:hover>div>.card-hover, .card:hover>div>.card-hoversub{
    display:block;
  }
  .card:hover{
    background-color: #ececec;
  }
</style>
