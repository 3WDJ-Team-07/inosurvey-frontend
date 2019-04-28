<template>
    <v-card class="rounded-card">
      <v-img :src="card.image" class="white--text" height="200px"></v-img>
      <v-card-text class="pt-2" >
        <div class="headline font-weight-bold mb-3">{{card.id}}.{{ card.title }}</div>
        <div class="sub-heading font-weight-black pb-2 px-3">{{ card.content }}</div>
      </v-card-text>
    </v-card>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { EventBus }             from '@/utils/bus'
  
  export default {
    props: ['card','index']
  }
</script>

<style scoped>
  .rounded-card {
    border-radius: 20px;
    cursor: pointer;
  }
</style>
