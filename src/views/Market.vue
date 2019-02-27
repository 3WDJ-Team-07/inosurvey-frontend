<template>
  <span>
    <MarketJumbotron></MarketJumbotron>
    <MarketContext></MarketContext>
  </span>
</template>

<script>
  import MarketJumbotron from '@/components/market/MarketJumbotron'
  import MarketContext from '@/components/market/MarketContext'

  export default {
    components: {
      MarketJumbotron,
      MarketContext
    }
  }
</script>
