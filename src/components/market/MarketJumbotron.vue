/* 설문판매 점보트론 */

<template>
  <v-fade-transition mode="out-in">
    <v-img src="/static/market-hero.png" height="35vh"
    gradient="to top,  rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)">
      <v-fade-transition mode="out-in">
        <v-container fill-height>
          <v-layout align-center row wrap>
              <v-flex xs9 pl-5>
                <h1 class="display-2 white--text font-weight-bold"> {{$t('Market.jumbotronTitle')}}</h1>
                <div class="subheading white--text">{{$t('Market.jumbotronSubTitle')}}</div>
              </v-flex>
               <v-flex xs3 pl-5>
                <div><v-btn color="info">설문판매</v-btn></div>
                <div><v-btn color="grey" class="white--text" normal>상품등록</v-btn></div>
              </v-flex>
          </v-layout>
        </v-container>
      </v-fade-transition>
    </v-img>
  </v-fade-transition>
</template>


<style scoped>
  .v-btn{
    min-width: 150px;
  }
</style>
