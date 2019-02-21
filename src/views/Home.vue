<template>
  <span>
    <Jumbotron></Jumbotron>
    <HomeContext></HomeContext>  
    <HomeIntroduce></HomeIntroduce>
  </span>
</template>

<script>
  import Jumbotron from '@/components/Jumbotron'
  import HomeContext from '@/components/HomeContext'
  import HomeIntroduce from '@/components/HomeIntroduce'

  export default {
    components: {
      Jumbotron,
      HomeContext,
      HomeIntroduce
    }
  }
</script>
