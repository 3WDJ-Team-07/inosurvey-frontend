<template>
  <v-app>
   <Navbar></Navbar> 
   <v-content transition="slide-x-transition" class="ma-0 pa-0">
      <v-fade-transition name="fade" mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
   </v-content>
   <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'

export default {
    name: 'App',
    components:{
      Navbar,
      Footer
    },
    watch: {
      '$route': function () {
        this.$vuetify.goTo(0)
      }
    }
};
</script>

<style>

</style>
