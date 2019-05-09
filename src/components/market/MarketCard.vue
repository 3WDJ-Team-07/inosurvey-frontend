<template>
  <v-card color="#FAFAFA" flat style="cursor:pointer;">
    <v-layout align-center>
      <v-flex xs9>
        <v-card flat color="#FAFAFA" class="my-4 px-2" >
          <div class="card-title 
          display-1 font-weight-bold pb-1">
          {{ card.title }}
          </div>
          <div class="card-text px-5 mx-5
          body-2 font-weight-black text-xs-left">
          ⦁  {{ card.description | substr(80,'...')}}
          </div>
        </v-card>
      </v-flex>
      <v-flex xs3 text-xs-left>
        <v-card flat color="#FAFAFA" class="py-4 subheading font-weight-bold">
          <div class="headline font-weight-bold">
            <span class="blue--text font-italic"> {{card.ino}} </span> 이노
            <!--  -->
          </div>
          <div>
            <i class="fas fa-user-alt">
              {{ card.respondent_number}} 명
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