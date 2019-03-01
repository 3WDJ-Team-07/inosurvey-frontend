<template>
  <span>
    <HomeJumbotron></HomeJumbotron>
    <HomeContext></HomeContext>  
    <HomeIntroduce></HomeIntroduce>
    <v-btn color="info" dark fixed bottom right fab
    v-scroll-to="{ el: '#top', offset:-10,duration:1000}"
    data-aos="fade-left" data-aos-delay="600">
    <v-icon>expand_less</v-icon> </v-btn>
  </span>
</template>

<script>
  import HomeJumbotron from '@/components/home/HomeJumbotron'
  import HomeContext from '@/components/home/HomeContext'
  import HomeIntroduce from '@/components/home/HomeIntroduce'


  export default {
    components: {
      HomeJumbotron,
      HomeContext,
      HomeIntroduce,
    }
  }
</script>
