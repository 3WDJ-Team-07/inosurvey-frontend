<template>
  <v-toolbar v-scroll="onScroll" app :flat="!isScrolling"
  :color="!isScrolling ? 'transparent' : '#FFFFFF'">
    <router-link to="/"><img src="/static/logo.png" id="top"></router-link>
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp" >
      <v-btn :active-class="!isScrolling ? 'blue--text' : undefined" v-for="(item,i) in items" :key="i" :to="item.to" flat class="title"><span v-text="item.text"/></v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" @click="SET_IS_LOGIN(true)" flat outline class="subheading">Login</v-btn>
    <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" :to="{name : 'Join'}" flat outline class="subheading">Join</v-btn>
    <v-btn v-if="!$vuetify.breakpoint.mdAndUp" icon @click="toggleDrawer">
      <v-icon color="blue">menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
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
      ...mapMutations([
        'SET_IS_LOGIN',
        'toggleDrawer',
        ]),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      },
    }
  }
</script>
