<template>
  <v-toolbar v-scroll="onScroll" app :flat="!isScrolling"
  :color="!isScrolling ? 'transparent' : '#ffffff'">
    <router-link to="/">
      <img src="/static/logo.png">
    </router-link>
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp" >
      <v-btn :active-class="!isScrolling ? 'grey--text' : undefined" to="/" flat>Home</v-btn>
      <v-btn :active-class="!isScrolling ? 'grey--text' : undefined" to="/service" flat>Survey</v-btn>
      <v-menu offset-y>
        <v-btn slot="activator" flat>Market</v-btn>
        <v-list>
          <v-list-tile v-for="(link, index) in links" :key="index" :to="link.to">
            <v-list-tile-title>{{ link.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn :active-class="!isScrolling ? 'grey--text' : undefined" to="/login" flat>Login</v-btn>
      <v-btn :active-class="!isScrolling ? 'grey--text' : undefined" to="/join" flat>Sign Up</v-btn>
    </v-toolbar-items>
    <v-btn v-else icon @click="toggleDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data(){
      return{
       isScrolling: false,
       links: [
        { title: '설문마켓', to: '/surveyMarket' },
        { title: '상품마켓', to: '/market' },
      ]
        }
    },
    computed: {
      items () {
        return this.$t('View.items')
      }
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      }
    }
  }
</script>
