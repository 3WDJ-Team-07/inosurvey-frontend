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
    <template v-if="!isAuth">
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" @click="SET_IS_LOGIN(true)" flat outline class="subheading">Login</v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" :to="{name : 'join'}" flat outline class="subheading">sign up</v-btn>
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
  import { mapMutations, mapGetters } from 'vuex'
  import { setAuthInHeader } from '../api';

  export default {
    data(){
      return{
        isScrolling: false,
      }
    },
    computed: {
      ...mapGetters([  // isAuth Test Token
        'isAuth'
      ]),
      items () {
        return this.$t('View.items')
      },
    },
    methods: {
      ...mapMutations([
        'SET_IS_LOGIN',  // 로그인 모달
        'LOGOUT',  // 로그아웃 
        'toggleDrawer',  
      ]),
      logout() {
        this.LOGOUT()
        this.$router.push('/')
      },
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      }
    }
  }
</script>
