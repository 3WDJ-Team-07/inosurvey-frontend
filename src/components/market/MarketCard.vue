<template>
  <v-card color="#FAFAFA" style="cursor:pointer;" elevation="8" class="my-3 marketcard">
    <v-layout align-center>
      <v-flex xs9>
        <v-card flat color="#FAFAFA">
          <div v-if="card.isBuy==true" class="text-xs-left red--text ml-4">もう購入したアンケートです。</div>
          <div class="card-title 
          display-1 font-weight-bold pb-2">
          {{ card.title }}
          </div>
          <div class="card-text px-5 mx-5 font-weight-black">
          {{ card.description | substr(80,'...')}}
          </div>
        </v-card>
      </v-flex>
      <v-flex xs3 text-xs-left>
        <v-card flat color="#FAFAFA" class="py-4 subheading font-weight-bold">
          <div class="headline font-weight-bold">
           <span class="info--text font-italic"> {{card.price}} </span> INO
          </div>
          <div>
            <i class="fas fa-user-alt">
              {{ card.respondent_number}} 人
            </i>
          </div>
          <div>
            <i class="far fa-calendar-alt font-weight-bold">
            {{ card.created_at | substr(10,'') }}
            ~ {{card.closed_at | substr(10,'') }}
            </i>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'MarketCard',
    props: ['card', 'index'],
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
.marketcard{
  border-radius: 8px;
}
</style>
