<template>
  <span>
    <Jumbotron></Jumbotron>
    <HomeContext></HomeContext>  
    <HomeIntroduce></HomeIntroduce>
    <v-btn color="info" dark fixed bottom right fab
    v-scroll-to="{ el: '#top', offset:-10,duration:1000}"
    data-aos="fade-left" data-aos-delay="600">
    <v-icon>expand_less</v-icon> </v-btn>
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
