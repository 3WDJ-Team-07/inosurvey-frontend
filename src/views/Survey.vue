<template>
  <v-container fluid grid-list-md fill-height class="pa-5 mt-5">
    <v-layout row wrap align-center justify-center>
      <v-flex d-flex xs12 sm6 md5>
        <v-hover>
          <v-card slot-scope="{ hover }" color="grey lighten-4" max-width="600">
            <v-img :aspect-ratio="16/12" src="/static/respond.png">
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-2 white--text" style="height: 100%;"> 설문 작성하기 </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-4">
              <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
              <h3 class="headline font-weight-light blue--text">QW cooking utensils</h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex d-flex xs12 sm6 md5>
        <v-hover>
          <v-card slot-scope="{ hover }" color="grey lighten-4" max-width="600">
            <v-img :aspect-ratio="16/12" src="/static/request.png">
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-2 white--text" style="height: 100%;">내 설문조사 보기</div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-4">
              <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
              <h3 class="headline font-weight-light orange--text">QW cooking utensils</h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>
  
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
}
</style>