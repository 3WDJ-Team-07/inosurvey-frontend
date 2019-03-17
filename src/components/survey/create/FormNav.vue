<template>
    <v-container fluid grid-list-md >
    <v-layout row wrap>
        <div 
        class="display-1 
        font-weight-bold" 
        v-html="surveyTitle"
        ></div> 
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
// 빈값일때는 받지않기 구현하기
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState([
      'surveyTitle'
    ])
  }
}
</script>

<style>

</style>
