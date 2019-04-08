/* 스타 레이팅 */

<template>
  <div>
    <v-layout row wrap justify-center>
      <star-rating
      :increment="1"
      :max-rating="5"
      inactive-color="red"
      active-color="gold"
      :star-size="100"
      ></star-rating>
    </v-layout>
    <v-divider class="pa-5"></v-divider>
  </div>
</template>

<script>
	import StarRating from 'vue-star-rating'

  export default {
    components: {
      StarRating
    },
  }
</script>

<style>

</style>
