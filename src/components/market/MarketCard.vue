<template>
    <v-card class="card pt-4" height="160px" style="cursor:pointer;">
      <div class="pt-3">
        <div class="card-title headline font-weight-bold mb-3">
          {{ card.title }}
        </div>
        <div class="card-text body-2 font-weight-black px-3">
          {{ card.description }}
        </div>
        <div class="card-hover subheading font-weight-bold mb-3 px-1">
          <i class="fas fa-user-alt px-4"> {{ card.respondent_number}} 명</i>
          <i class="far fa-calendar-alt font-weight-bold px-4"> {{ card.started_at | substr }}~{{card.closed_at | substr}}</i>
          <i class="fas fa-coins px-4"> ??? 이노</i>
        </div>
        <div class="card-hoversub body-2 font-weight-black"></div>
      </div>
    </v-card>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'MarketCard',
    props:['card','index'],
    filters:{
      substr:function(date){
        if(date){
          return date.substr(0,10)
        }
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

