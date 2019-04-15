<template>
  <div fluid grid-list-md>
    <v-layout column wrap class="mt-3">
      <div class="display-1 font-weight-bold pt-3 ml-4" v-html="formTitle"></div> 
      <v-divider class="mt-2"></v-divider>
    </v-layout>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed:{
      ...mapState(['formTitle'])
    }
  }
</script>
