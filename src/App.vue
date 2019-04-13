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
  .form-control {
    box-sizing: border-box;
    background-color: #e2e4e6;
    border: 1px solid #cdd2d4;
    border-radius: 3px;
    margin-bottom: 12px;
    width: 70%;
    padding: 6px 8px;
    transition: background-color .3s;
  }
  .form-control:focus {
    background-color: #fff;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to  {
    opacity: 0;
  }
</style>
