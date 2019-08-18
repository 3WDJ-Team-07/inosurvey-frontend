<template>
  <div fluid grid-list-md>
    <v-layout row wrap class="mt-3">
      <img src="/static/logo_bl.png" class="ml-5"/>
      <div class="display-1 font-weight-bold pt-2 ml-2" v-html="formTitle"></div> 
    </v-layout>
    <v-divider class="mt-2" style="border-color:grey; width:94%; margin:0 auto; box-shadow:1px;" ></v-divider>
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
