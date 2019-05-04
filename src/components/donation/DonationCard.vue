<template>
  <v-layout row wrap justify-center>
    <v-card class="rounded-card" style="width:90%;">
      <v-img :src="card.image" class="white--text" height="250px">
        <v-flex mt-2 ml-2>
        <v-chip color="#444444" text-color="white" class="subheading">D - 50</v-chip>
        </v-flex>
      </v-img>
       <v-card-text
          style="position: relative;"
        >
          <v-btn
            v-if="card.current_amount == card.target_amount"
            absolute
            color="info"
            dark fab large
            right top
          >
          <v-tooltip left>
            <v-icon slot="activator">thumb_up</v-icon>
            <div class="pa-3 subheading">목표응답수를 달성했습니다</div>
          </v-tooltip>
        </v-btn>
      </v-card-text>
      <v-card-text class="px-4">
        <div class="headline font-weight-bold mb-2">{{ card.title }}</div>
        <div>{{card.content | substr(80,' .... ')}}</div>
         <v-progress-linear
          color="info"
          height="20"
          :value="rate"
        >
          <span
            class="font-weight-bold"
            style="color:white; margin-left:6px;"
          >
            {{rate}}
          </span>
        </v-progress-linear>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { EventBus }             from '@/utils/bus'
  
  export default {
    props: ['card','index'],
    computed: {
      rate() {
        return (this.card.current_amount / this.card.target_amount*100).toFixed(1) + ' %'
      }
    },
    filters: {
      substr: function(msg,length,endmsg){
        if(msg){
          return msg.substr(0,length)+endmsg
        }
      }
    }
  }
</script>

<style scoped>
  .rounded-card {
    border-radius: 10px;
    cursor: pointer;
  }
</style>
