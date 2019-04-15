<template>
  <div fluid grid-list-md>
    <v-layout row wrap class="mt-3">
      <div 
        class="display-1 
        font-weight-bold pt-2 ml-4 pb-4"
        v-html="formTitle">
      </div> 
      <v-spacer/>
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
