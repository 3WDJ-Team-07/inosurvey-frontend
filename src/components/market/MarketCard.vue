<template>
  <v-card max-height="160px" color="#FAFAFA" flat style="cursor:pointer;">
    <v-layout align-center>
      <v-flex xs9>
        <v-card flat color="#FAFAFA" class="py-4" >

          <div class="card-title 
          display-1 font-weight-bold ">
            ㅇㅇㅇㅇ{{ card.title }}
          </div>
          <div class="card-text px-5 mx-5
          body-2 font-weight-black">
          <!-- {{ card.description }} -->
          {{ text | sub}}
          </div>
        </v-card>
      </v-flex>
      <v-flex xs3 text-xs-left>
        <v-card flat color="#FAFAFA" class="py-4 subheading font-weight-bold">
          <div class="headline font-weight-bold">
            <span class="blue--text font-italic">???</span> 이노
          </div>
          <div>
            <i class="fas fa-user-alt">
              {{ card.respondent_number}} 명
            </i>
          </div>
          <div>
            <i class="far fa-calendar-alt font-weight-bold">
            {{ card.started_at | substrDate }}
            ~{{card.closed_at | substrDate }}
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
    data(){
      return{
         text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab modi repellendus labore facere, fugiat ipsam quae accusantium commodi voluptas nesciunt dolor similique ipsum accusamus earum eligendi susr sit amet, consectetur adipisicing elit. Non ab modi repellendus labore facere, fugiat ipsam quae accusantium commodi voluptas nesciunt dolor similique ipsum accusamus earum eligendi susr sit amet, consectetur adipisicing elit. Non ab modi repellendus labore facere, fugiat ipsam quae accusantium commodi voluptas nesciunt dolor similique ipsum accusamus earum eligendi susr sit amet, consectetur adipisicing elit. Non ab modi repellendus labore facere, fugiat ipsam quae accusantium commodi voluptas nesciunt dolor similique ipsum accusamus earum eligendi suscipit laborum quod.'
      }
     
    },
    props: ['card', 'index'],
    filters: {
      substrDate: function (date) {
        if (date) {
          return date.substr(0, 10)
        }
      },
      sub: function(tt){
        if(tt){
          return tt.substr(0,170)
        }
      }
    }
  }
</script>

<style scoped>
.border_style {
    border-right: 2px solid lightgrey;
}
</style>
