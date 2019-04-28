<template>
  <div v-if="this.$route.name == 'surveymarket'">
    <MarketJumbotron/>
    <MarketContext/>
  </div>
  <div v-else>
    <router-view/>
  </div>
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
