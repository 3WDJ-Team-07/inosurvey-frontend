/* 기부 페이지 */

<template>
  <span>
    <div v-if="this.$route.name == 'donation'">
      <DonationJumbotron/> 
      <DonationContext/> 
    </div>
    <div v-else>
      <router-view/>
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
      DonationContext
    }
  }
</script>
