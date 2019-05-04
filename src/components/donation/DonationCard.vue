<template>
  <v-layout row wrap justify-center>
    <v-card class="rounded-card" style="width:90%;" :class="achieved">
      <v-img :src="card.image"  height="250px">
        <v-flex mt-2 ml-2>
        <v-chip color="#555555" dark class="daychip subheading">D {{dDay}}</v-chip>
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
            <div class="pa-3 subheading">목표금액을 달성했습니다</div>
          </v-tooltip>
        </v-btn>
      </v-card-text>
      <v-card-text class="px-4">
        <div class="headline font-weight-bold mb-2">{{ card.title }}</div>
        <div>{{card.content | substr(80,' .... ')}}</div>
         <v-progress-linear
          color="info"
          height="20"
          class="rounded-bar"
          :value="rate"
        >
          <span
            class="font-weight-bold"
            style="color:white; margin-left:2%;"
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
    data() {
      return {
        achieved:''
      }
    },
    computed: {
      rate() {
        return (this.card.current_amount / this.card.target_amount*100).toFixed(1) + ' %'
      },
      dDay() {
        var startDate = new Date().toISOString().substr(0,10)
        var closeDate = this.card.closed_at.substr(0,10)
        var arr1 = startDate.split('-')
        var arr2 = closeDate.split('-')
        var day1 = new Date(arr1[0],arr1[1],arr1[2])
        var day2 = new Date(arr2[0],arr2[1],arr2[2])
        var dday= (day2-day1)/86400000
        var plusday = (dday.toString()).substr(1,1)
        if(dday==0){
          return '- day'
        }
        else if(dday<0){
          return '+ '+plusday
        }
        return '-'+dday
      }
    },
    created(){
       if(this.card.is_achieved){
         this.achieved='achieved'
      }
    },
    filters: {
      substr: function(msg,length,endmsg){
        if(msg.length<80){
          return msg.substr(0,length)
        }
        else if(msg.length){
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
  .rounded-bar {
    border-radius: 10px;
  }
  .achieved{
    filter: grayscale(90%) brightness(60%)
  }
  .daychip{
    box-shadow: 0 0 10px #555555
  }
</style>
