<template>
  <v-toolbar v-scroll="onScroll" app :flat="!isScrolling"
  :color="!isScrolling ? 'transparent' : '#ffffff'">
    <img src="/static/logo.png">
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn v-for="(item,i) in items" :key="i"
        :active-class="!isScrolling ? 'secondary--text' : undefined"
        :to="item.to" flat>
        <span v-text="item.text" />
      </v-btn>
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
