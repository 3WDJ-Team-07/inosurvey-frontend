<template>
  <v-flex pa-3 xs4 @click="toDetail()"> 
    <v-card class="rounded-card">
      <v-img :src="card.file" class="white--text" height="200px"></v-img>
      <v-card-text class="pt-2" >
        <div class="headline font-weight-bold mb-3">{{card.id}}.{{ card.title }}</div>
        <!-- <div class="sub-heading font-weight-black pb-2 px-3">{{ card.content }}</div> -->
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { EventBus }             from '@/utils/bus'
  
  export default {
    props: ['card','index'],
    methods:{
      toDetail(){
        EventBus.$emit('cardItem', this.card)
        EventBus.$emit('indexItem', this.index)
        this.$router.replace({name:'donationdetail'});
      }
    }
  }
</script>

<style scoped>
.rounded-card {
    border-radius: 20px;
    cursor: pointer;
  }
</style>