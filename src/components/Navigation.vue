/* 작은창 네비게이션  */

<template>
  <v-navigation-drawer v-model="inputValue" temporary right fixed >
    <v-list>
      <v-list-tile>
        <v-spacer/>
        <v-btn icon @click="toggleDrawer">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to">
        <v-list-tile-title v-text="item.text"/>
      </v-list-tile>
      <v-list-tile @click="SET_IS_LOGIN(true)">
        <v-list-tile-title >LOGIN</v-list-tile-title>
      </v-list-tile>
      <v-list-tile router :to="{name: 'join'}">
        <v-list-tile-title>JOIN</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      // drawer상태값 체크
      ...mapState(['drawer']),
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
