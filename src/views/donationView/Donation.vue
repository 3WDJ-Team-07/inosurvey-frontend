/* 기부 페이지 */

<template lang="html">
  <span>
    <div v-if="this.$route.name == 'donation'">
       <v-img src="/static/donation-hero.png" style="z-index:0"></v-img>
      <DonationJumbotron style="margin-top:-500px;"/> 
      <DonationContext/> 
    </div>
    <div v-else>
      <transition>
      
      <router-view/>
      </transition>
    </div>
  </span>
</template>

<script>
  import DonationJumbotron from '@/components/donation/DonationJumbotron'
  import DonationContext   from '@/components/donation/DonationContext'
  
  export default {
    name: 'donation',
    components: {
      DonationJumbotron,
      DonationContext,
    }
  }
</script>
