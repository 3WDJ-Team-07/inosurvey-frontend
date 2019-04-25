/* 기부 페이지 */

<template lang="html">
  <span>
    <Spinner/>
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
  import Spinner from '@/components/Spinner'
  
  export default {
    name: 'donation',
    components: {
      DonationJumbotron,
      DonationContext,
      Spinner
    }
  }
</script>
