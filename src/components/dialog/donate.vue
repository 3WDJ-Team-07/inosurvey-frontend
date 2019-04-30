<template>
  <v-layout row justify-center>
    <v-dialog v-model="isDonateDialog" hide-overlay persistent max-width="500px">
      <v-card color="#1E88E5" class="pa-4 border_rounded">
		  <span
        class="pr-1 pt-1 right white--text" 
        @click="SET_IS_DONATE(false)">
        <i class="fas fa-times"></i>
      </span>
      <v-layout column align-center>
        <v-card-title class="white--text font-weight-bold display-2" primary-title>
          {{ donationItems.title }}
        </v-card-title>
        <v-card-text class="subheading font-weight-bold white--text">
          {{ donationItems.content }}
        </v-card-text>
        <v-card-text class="headline font-weight-bold white--text">
          <span>보유 이노 : {{ coin || '0' }}</span>
        </v-card-text>
			</v-layout>
      <v-card-actions class="pb-4">        
          <input type="number" class="form-control title" style="width:100%; height:50px;" ref="donateInput">
        </v-card-actions>
        <v-card-actions class="pb-4">        
          <v-btn block large color="white" class="font-weight-bold" @click="donate">기부하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    props: ['donationItems', 'inocoin'],
    name: 'donate',
    computed: {
      ...mapState([ 'isDonateDialog' ]),
      coin() {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return this.inocoin.current_ino.toString().replace(regexp, ',')
      }
    },
    updated() {
      this.$refs.donateInput.focus()
      this.$refs.donateInput.value = ''
    },
    methods: {
      ...mapMutations([ 'SET_IS_DONATE' ]),
      donate(){
        this.SET_IS_DONATE(false);
        this.$router.push({ name:'donation' })
      }
    },
  }
</script>

<style>

</style>
