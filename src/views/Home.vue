<template>
  <span>
    <HomeJumbotron></HomeJumbotron>
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
  import HomeJumbotron from '@/components/home/HomeJumbotron'
  import HomeContext from '@/components/home/HomeContext'
  import HomeIntroduce from '@/components/home/HomeIntroduce'
  import RequestDialog from '@/components/home/RequestDialog'
  import ResponseDialog from '@/components/home/ResponseDialog'

  export default {
    components: {
      HomeJumbotron,
      HomeContext,
      HomeIntroduce,
      RequestDialog,
      ResponseDialog
    }
  }
</script>
