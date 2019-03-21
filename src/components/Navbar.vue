/* 네비게이션 */

<template>
  <v-toolbar 
    v-scroll="onScroll" app :flat="!isScrolling"
    :color="!isScrolling ? 'transparent' : '#FFFFFF'"
    >
    <router-link to="/">
      <img src="/static/logo.png" id="top">
    </router-link>
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn 
        :active-class="!isScrolling ? 'blue--text' : undefined" v-for="(item,i) in items" 
        :key="i" :to="item.to" flat class="title"><span v-text="item.text"/>
      </v-btn>
    </v-toolbar-items>
    <v-spacer/>
    <template v-if="!currentUser">
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" @click="SET_IS_LOGIN(true)" flat outline class="subheading">Login</v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" :to="{name : 'join'}" flat outline class="subheading">Join</v-btn>
    </template>
    <template v-else>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" :to="{name : 'myPage'}" flat outline class="subheading">MyPage</v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" 
      @click.prevent="logout" flat outline class="subheading">Logout</v-btn>
    </template>
    <v-btn v-if="!$vuetify.breakpoint.mdAndUp" icon @click="toggleDrawer">
      <v-icon color="blue">menu</v-icon>
    </v-btn>
    {{this.$store.state.currentUser}}
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
      },
      currentUser(){
        return this.$store.getters.currentUser  // 로그인 여부 체크
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
      logout() {
        this.$store.commit('LOGOUT')
        //this.$store.push('')
      }
    }
  }
</script>
