<template>
  <v-layout row wrap justify-center>
    <v-card class="rounded-card" style="width:90%;" :class="achieved">
      <v-img :src="card.image"  height="250px">
        <v-flex mt-2 ml-2>
        <v-chip color="white" class="daychip subheading info--text">D {{dDay}}</v-chip>
        </v-flex>
        <div class="px-2">
          <v-progress-linear
          color="info"
          height="20"
          class="rounded-bar  pbar"
          :value="rate"
        >
          <span
            class="font-weight-bold"
            style="color:white; margin-left:2%;"
          >
            {{rate}}
          </span>
        </v-progress-linear>
        </div>
      </v-img>
       <v-card-text
          style="position: relative;"
        >
          <v-btn
            v-if="card.current_amount >= card.target_amount"
            absolute
            color="info"
            dark fab large
            right top
          >
          <v-tooltip left>
            <!-- <i slot="activator" color="#ffd700" class="fas fa-crown fa-4x"></i> -->
            <v-icon slot="activator" color="#ffd700" x-large>thumb_up</v-icon>
            <div class="pa-3 subheading">目標金額を達成しました！</div>
          </v-tooltip>
        </v-btn>
      </v-card-text>
      <v-card-text class="px-4">
        <div class="title font-weight-bold mb-2" style="margin-top:-1%">{{ card.title }}</div>
        <div>{{card.content.replace(/(<([^>]+)>)/gi, "") | substr(30,'.....')}}</div>
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
      substr(msg,length,endmsg){
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
    filter: grayscale(80%) brightness(100%) contrast(50%)
  }
  .daychip{
    box-shadow: 0 0 5px #55555555
  }
  .pbar{
    margin-top: 45%;
  }
</style>
