/* 네비게이션 */

<template>
  <v-toolbar 
    v-scroll="onScroll" app :flat="!isScrolling"
    :color="!isScrolling ? 'transparent' : '#FFFFFF'"
    style="z-index: 9999; "
    >
    <router-link to="/">
      <img src="/static/logo.png" id="top">
    </router-link>
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn 
        :active-class="!isScrolling ? 'info--text' : undefined" v-for="(item,i) in items"
        :key="i" :to="item.to" flat class="title"><span v-text="item.text"/>
      </v-btn>
    </v-toolbar-items>
    <v-spacer/>
    <template v-if="!isAuth">
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" @click="SET_IS_LOGIN(true)" flat outline class="subheading">Login</v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" :to="{name : 'join'}" flat outline class="subheading">sign up</v-btn>
    </template>
    <template v-else>
      <v-btn  v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" class="headline" flat fab>
        <i class="far fa-bell"></i>
      </v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" :to="{name : 'mypage'}" flat outline class="subheading">MyPage</v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp"  :active-class="!isScrolling ? 'blue--text' : undefined" 
      @click.prevent="logout" flat outline class="subheading">Logout</v-btn>
    </template>
    <v-btn v-if="!$vuetify.breakpoint.mdAndUp" icon @click="toggleDrawer">
      <v-icon color="blue">menu</v-icon>
    </v-btn>
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
      // isAuth Test Token
      ...mapGetters(['isAuth']),
      items () {
        return this.$t('View.items')
      },
    },
    methods: {
      ...mapMutations([
        'SET_IS_LOGIN', 
        'LOGOUT',
        'toggleDrawer',  
      ]),
      logout() {
        swal({
          text: "ログアウトしますか？",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("ログアウトしました！");
            this.LOGOUT()
            this.$router.push({name:'home'})
          }
        });
      },
      onScroll () {
        this.isScrolling = (window.pageYOffset || document.documentElement.scrollTop || 0) > 60
      }
    }
  }
</script>
