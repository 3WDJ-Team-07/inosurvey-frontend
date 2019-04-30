<template>
  <v-fade-transition mode="out-in">
    <v-img src="/static/donation-hero.png" height="40vh"
      gradient="to top,  rgba(0, 0, 0, .3), rgba(0, 0, 0, .1)">
      <v-fade-transition mode="out-in">
        <v-container fill-height>
          <v-layout align-center row wrap>
            <v-flex xs9 pl-5>
              <h1 class="display-2 white--text font-weight-bold">
                {{$t('Donation.jumbotronTitle')}}
              </h1>
              <div class="title white--text mt-1"> {{$t('Donation.jumbotronSubTitle')}}</div>
            </v-flex>
            <v-flex xs3 pl-4>
              <router-link :to="{ name: 'adddonationbox' }">
                <v-btn color="#333333" class="white--text">모금함 등록</v-btn>
              </router-link>
            </v-flex>
          </v-layout>
        </v-container>
      </v-fade-transition>
    </v-img>
  </v-fade-transition>
</template>

<script>
  export default {
    methods:{
      addbox(){
        this.$router.push("adddonationbox");
      }
    }
  }
</script>

<style scoped>
  .v-btn{
    min-width: 200px;
  }
  .display-2, title{
    text-shadow: 2px 2px 4px #00000048;
  }
</style>
