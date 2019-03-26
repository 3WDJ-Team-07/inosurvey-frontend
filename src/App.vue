/* 마스터 페이지 */

<template>
  <v-app>
    <Navbar/>
    <Navigation/>
    <v-content transition="slide-x-transition" class="ma-0 pa-0 pb-5">
      <v-fade-transition name="page" mode="out-in">
        <router-view/>
      </v-fade-transition>
    </v-content>
    <Login/>
    <Footer/>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Navigation from '@/components/Navigation'
  import Login from '@/views/auth/Login'
  import Footer from '@/components/Footer'

  export default {
    name: 'app',
    components:{
      Navbar,
      Navigation,
      Login,
      Footer,
    },
    watch: {
      '$route'() {
        this.$vuetify.goTo(0)
      }
    }
  };
</script>

<style>
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to  {
    opacity: 0;
  }
</style>
