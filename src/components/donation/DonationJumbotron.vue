<template>
  <v-fade-transition mode="out-in">
        <v-container fill-height>
          <v-layout align-center row wrap style="z-index:1">
            <v-flex xs9>
              <div class="title white--text ml-2"> {{$t('Donation.jumbotronSubTitle')}}</div>
               <div class="white--text mt-2 mb-5 page-title">
                {{$t('Donation.jumbotronTitle')}}
              </div>
              <v-btn
              :to="{ name: 'adddonationbox' }"
              v-if="userinfo.is_donator==1"
               large class="info--text px-5 title font-weight-bold dona-but" 
              >
              募金箱登録
              </v-btn>
            </v-flex>
            <v-flex xs3 pl-4>
              
            </v-flex>
          </v-layout>
        </v-container>
      </v-fade-transition>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['userinfo']),
    },
    methods:{
      addbox(){
        this.$router.push("adddonationbox");
      }
    }
  }
</script>

<style scoped>
  .page-title{
    font-size:3em;
    font-weight: bold;
    text-shadow: 2px 2px 4px #00000048;
  }
  .dona-but{
    padding-top:30px;
    padding-bottom:30px;
    border-radius: 50px
  }
</style>
