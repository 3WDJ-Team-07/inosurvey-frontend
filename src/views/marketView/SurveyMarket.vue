<template>
  <span>
    <MarketJumbotron/>
    <MarketContext/>
  </span>
</template>

<script>
  import MarketJumbotron from '@/components/market/MarketJumbotron'
  import MarketContext   from '@/components/market/MarketContext'

  export default {
    name: 'surveyMarket',
    components: {
      MarketJumbotron,
      MarketContext
    }
  }
</script>
