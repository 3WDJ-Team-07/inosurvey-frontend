/* 기부 페이지 */

<template>
  <span>
    <DonationJumbotron/> 
    <DonationContext/> 
  </span>
</template>

<script>
  import DonationJumbotron from '@/components/donation/DonationJumbotron'
  import DonationContext from '@/components/donation/DonationContext'
  export default {
    name: 'donation',
    components: {
      DonationJumbotron,
      DonationContext
    }
  }
</script>
