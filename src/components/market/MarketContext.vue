<template>
  <v-fade-transition mode="out-in">
    <v-container fluid grid-list-xl  class="mt-3 mb-3">
      <v-layout 
        text-xs-center 
        fill-height 
        wrap class="pa-4"
      >
        <v-flex 
          pa-3 xs12 sm12 md6 xl6
          v-for="card in cardFeatures"
          :key="card.title"
          @click="toDetail"
        > 
          <v-card class="pa-5"  style="cursor:pointer;">
            <div class="headline font-weight-bold mb-4">{{ card.title }}</div>
            <div class="caption font-weight-black">{{ card.text }}</div>  
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
