<template>
  <span>
    <Jumbotron></Jumbotron>
    <HomeContext></HomeContext>  
    <HomeIntroduce></HomeIntroduce>
    <RequestDialog></RequestDialog>
    <ResponseDialog></ResponseDialog>
  </span>
</template>

<script>
  import Jumbotron from '@/components/Jumbotron'
  import HomeContext from '@/components/HomeContext'
  import RequestDialog from '@/components/RequestDialog'
  import ResponseDialog from '@/components/ResponseDialog'
  import HomeIntroduce from '@/components/HomeIntroduce'

  export default {
    components: {
      Jumbotron,
      HomeContext,
      HomeIntroduce,
      RequestDialog,
      ResponseDialog
    }
  }
</script>
