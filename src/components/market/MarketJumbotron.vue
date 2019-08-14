<template>
<div>
      <v-container fill-height>
        <v-layout align-center row wrap style="z-index:1">
          <v-flex xs9 >
            <div class="title white--text ml-2">
              {{$t('Market.jumbotronSubTitle')}}
            </div>
            <div class="white--text mt-2 mb-5 page-title">
              {{$t('Market.jumbotronTitle')}}
            </div>
            <v-btn large class="info--text px-5 title font-weight-bold sell-but" @click="SET_IS_SURVEY_SALE(true)">アンケート販売</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<script>
  import { mapMutations, mapState, mapActions }   from 'vuex'
  
  export default {
    name:'maketJumbotron',
    methods: {
      ...mapMutations([ 'SET_IS_SURVEY_SALE' ])
    },
    
	}
</script>

<style scoped>

  .page-title{
    font-size:3em;
    font-weight: bold;
    text-shadow: 2px 2px 4px #00000048;
  }

  .sell-but{
    padding-top:20px;
    padding-bottom:40px;
    border-radius: 50px
  }
</style>