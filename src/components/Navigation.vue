<template>
  <v-navigation-drawer
    v-model="inputValue"
    fixed
    right
    temporary
  >
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        @click="onClick(item)"
      >
        <v-list-tile-title v-text="item.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    computed: {
      inputValue: {
        get () {
          return this.$store.state.drawer
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
      ...mapMutations(['setDrawer', 'toggleDrawer']),
      onClick (item) {
        this.$vuetify.goTo(item.href, {
          offset: -100
        })
        this.inputValue = false
      }
    }
  }
</script>
