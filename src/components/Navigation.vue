<template>
  <v-navigation-drawer v-model="inputValue" temporary right fixed >
    <v-list>
      <v-list-tile>
        <v-spacer/>
      </v-list-tile>
      <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to">
        <v-list-tile-title v-text="item.text"/>
      </v-list-tile>
      <template v-if="!isAuth">
      <v-list-tile @click="SET_IS_LOGIN(true)">
        <v-list-tile-title >LOGIN</v-list-tile-title>
      </v-list-tile>
      <v-list-tile router :to="{name: 'join'}">
        <v-list-tile-title>JOIN</v-list-tile-title>
      </v-list-tile>
      </template>
      <template v-else>
      <v-list-tile router :to="{name: 'mypage'}">
        <v-list-tile-title>MYPAGE</v-list-tile-title>
      </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapState(['drawer']),
      ...mapGetters(['isAuth']),
      inputValue: {
        get () {
          return this.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      },
      items () {
        return this.$t('View.items')
      }
    },
    methods: {
      ...mapMutations([
        'setDrawer',
        'toggleDrawer',
        'SET_IS_LOGIN'
      ])
    }
  }
</script>
