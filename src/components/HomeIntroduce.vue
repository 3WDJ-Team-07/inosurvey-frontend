<template>
  <v-fade-transition mode="out-in">
    <v-layout row wrap v-if="namespace" :key="$route.path" :src="heroImage">
      <v-flex xs12 sm12 md6>
        <v-card dark tile flat color="primary" height="70vh">
          <v-card-text>응답자</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card dark tile flat color="grey" height="70vh">
          <v-card-text>요청자</v-card-text>
        </v-card>
      </v-flex>
      <v-flex md12>
            <v-card tile flat height="40vh">
                <v-card-text>궁금하지않으세요?</v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
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
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    }
  }
</script>
 <style scoped>

 </style>