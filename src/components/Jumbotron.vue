<template>
  <v-fade-transition mode="out-in">
    <v-img src="/static/main.png" v-if="namespace" :key="$route.path"  height="100vh"
    gradient="to bottom,  rgba(128, 128, 128, .9),rgba(128, 128, 128, .8),rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)">
      <v-fade-transition mode="out-in">
        <v-container v-if="isBooted" :key="$route.path" fill-height>
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-flex :key="$route.path" text-xs-center>
                <h1 class="display-2 white--text font-weight-bold" v-html="title"/>
                <div v-if="subTitle" class="subheading white--text" v-html="subTitle"/>
                <v-btn color="info" large class="headline font-weight-bold mt-4" >설문조사 요청하기</v-btn>
              </v-flex>
            </v-fade-transition>
            <v-btn class="floating" absolute flat fab bottom right >
              <v-icon class="grey--text" x-large>expand_more</v-icon>
            </v-btn>
          </v-layout>
        </v-container>
      </v-fade-transition>
    </v-img>
  </v-fade-transition>
</template>

<script>
  export default {
    data: () => ({
      isBooted: false
    }),

    computed: {
      isHome () {
        return this.$route.path === '/'
      },
      namespace () {
        return this.$route.name
      },
      title () {
        return this.$t(`${this.namespace}.jumbotronTitle`)
      },
      subTitle () {
        return this.$t(`${this.namespace}.jumbotronSubTitle`)
      },
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    }
  }
</script>
 <style scoped>
 .floating{
   left:49%;
   bottom: 5%;
 }
 </style>
