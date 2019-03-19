/* 설문판매 점보트론 */

<template>
  <v-fade-transition mode="out-in">
    <v-img :key="$route.path"  src="/static/market-hero.png" height="60vh"
    gradient="to top,  rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)">
      <v-fade-transition mode="out-in">
        <v-container :key="$route.path" fill-height>
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-flex :key="$route.path" text-xs-center>
                <h1 class="display-2 white--text font-weight-bold">
                  {{$t('Services.jumbotronTitle')}}
                </h1>
                <div class="subheading white--text">
                  {{$t('Services.jumbotronSubTitle')}}
                </div>
              </v-flex>
            </v-fade-transition>
          </v-layout>
        </v-container>
      </v-fade-transition>
    </v-img>
  </v-fade-transition>
</template>

<script>
  export default {

  }
</script>
 <style scoped>

 </style>
