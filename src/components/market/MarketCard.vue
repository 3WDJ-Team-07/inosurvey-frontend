<template>
  <v-card height="160px" style="cursor:pointer;">
    <v-layout>
      <v-flex xs9>
        <v-card flat class="px-2">
          <div class="card-title pt-3
          display-1 font-weight-bold ">
            {{ card.title }}
          </div>
          <div class="card-text pt-2 px-5 mx-5
          body-2 font-weight-black">
            {{ card.description }}
          </div>
        </v-card>
      </v-flex>
      <v-flex xs3 text-xs-left>
        <v-card flat class="subheading font-weight-bold">
          <div class="headline font-weight-bold py-3">
            <span class="blue--text font-italic">???</span> 이노
          </div>
          <div>
            <i class="fas fa-user-alt">
              {{ card.respondent_number}} 명
            </i>
          </div>
          <div>
            <i class="far fa-calendar-alt font-weight-bold">
            {{ card.started_at | substr }}
            ~{{card.closed_at | substr}}
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
      substr: function (date) {
        if (date) {
          return date.substr(0, 10)
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
