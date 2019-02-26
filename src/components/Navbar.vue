<template>
  <v-toolbar v-scroll="onScroll" app :flat="!isScrolling"
  :color="!isScrolling ? 'transparent' : '#ffffff'">
    <router-link to="/"><img src="/static/logo.png"></router-link>
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp" >
      <v-btn :active-class="!isScrolling ? 'white--text' : undefined" to="/" flat class="title">Home</v-btn>
      <v-btn :active-class="!isScrolling ? 'white--text' : undefined" to="/survey" flat class="title">Survey</v-btn>
      <v-btn :active-class="!isScrolling ? 'white--text' : undefined" to="/market" flat class="title">Market</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'white--text' : undefined" @click="LoginDialogChange" flat outline class="subheading">Login</v-btn>
    <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'white--text' : undefined" to="/join" flat outline class="subheading">Sign Up</v-btn>
    <v-btn v-if="!$vuetify.breakpoint.mdAndUp" icon @click="toggleDrawer">
      <v-icon color="white">menu</v-icon>
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
      }
    },
    computed: {
      items () {
        return this.$t('View.items')
      }
    },
    methods: {
      ...mapMutations(['toggleDrawer','LoginDialogChange']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      },
    }
  }
</script>
