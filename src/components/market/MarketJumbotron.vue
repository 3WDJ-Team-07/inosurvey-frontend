<template>
<div>
  <v-img src="/static/market-hero.png" height="40vh"
    gradient="to top,  rgba(0, 0, 0, .3), rgba(0, 0, 0, .1)">
      <v-container fill-height>
        <v-layout align-center row wrap>
          <v-flex xs9 pl-5>
            <h1 class="display-2 white--text font-weight-bold">
              {{$t('Market.jumbotronTitle')}}
            </h1>
            <div class="title white--text mt-1 ml-1">
              {{$t('Market.jumbotronSubTitle')}}
            </div>
          </v-flex>
          <v-flex xs3 pl-4>
            <v-btn color="info" large @click="SET_IS_SURVEY_SALE(true)">설문판매</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <surveySale
    :sellSurvey="sellSurvey"
    :userinfo="userinfo"
    />
  </div>
</template>
<script>
  import { mapMutations, mapState, mapActions }   from 'vuex'
  import surveySale                               from '@/components/dialog/surveySale'
	export default {
    name:'maketJumbotron',
    components: { surveySale },
    computed: {
      ...mapState(['sellSurvey','userinfo']),
    },
    methods: {
      ...mapActions(['FETCH_SELL']),
      ...mapMutations([ 'SET_IS_SURVEY_SALE' ]),
    },
    created(){
      this.FETCH_SELL({
        id: this.userinfo.id  
      })
    },
	}
</script>

<style scoped>
  .v-btn{
    min-width: 200px;
  }
  .display-2, title{
    text-shadow: 2px 2px 4px #00000048;
  }
</style>