<template>
  <v-app>
      <Navbar></Navbar> 
      <Navigation></Navigation>
      <v-content transition="slide-x-transition" class="ma-0 pa-0">
        <v-fade-transition name="page" mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-content>
      <Login></Login>
      <Footer></Footer>
      <apitest></apitest>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'
import Login from '@/views/Login'
import Footer from '@/components/Footer'
import apitest from '@/components/apitest'

export default {
    name: 'App',
    components:{
      Navbar,
      Navigation,
      Login,
      Footer,
      apitest
    },
    watch: {
      '$route': function () {
        this.$vuetify.goTo(0)
      }
    }
};
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
