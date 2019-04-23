<template>
        <v-flex pa-3 xs4 @click="toDetail()"> 
          <v-card class="rounded-card" style="cursor:pointer">
            <v-img :src="card.image" class="white--text" height="200px"></v-img>
            <v-card-text class="pt-2" ></v-card-text>
              <div class="headline font-weight-bold mb-3">{{card.id}}.{{ card.title }}</div>
              <div class="sub-heading font-weight-black pb-2 px-3">{{ card.content }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { EventBus }             from '@/utils/bus'
  
  export default {
    name: 'DonationCard',
    props: ['card','index'],
    methods:{
        toDetail(){
            EventBus.$emit('cardItem', this.card)
            EventBus.$emit('indexItem', this.index)
            console.log(this.card)
            this.$router.replace({name:'donationdetail'});
        }
    }
  }
</script>

<style scoped>
.rounded-card{
    border-radius:20px;
  }
