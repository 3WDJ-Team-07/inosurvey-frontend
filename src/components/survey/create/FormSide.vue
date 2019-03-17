<template>
    <div>
   <v-tabs grow color="blue"
    icons-and-text hide-slider fixed-tabs height="120" >
     <v-tab><v-img src="/static/desktop.png" alt="" width="150"></v-img></v-tab>
     <v-tab><v-img src="/static/desktop.png" alt="" width="150"></v-img></v-tab>
     <v-tab-item v-for="tab of tabs" :key="tab.index">
        <v-card flat @click="text">
          <v-card-text v-for="tab in tabs" :key="tab.index"
          class="subheading borderBottom pa-4 cardHover"
          @click="text"
          >
           {{ tab.name }}
          </v-card-text>
        </v-card>
      </v-tab-item>
   </v-tabs>
  </div>
</template>

<script>
export default {
  data () {
      return {
      tabs: [
        { name: '객관식' },
        { name: '주관식' },
        { name: 'tab2' },
        { name: 'tab2' },
        { name: 'tab2' },
        { name: 'tab2' },
      ]
      }
    },
    methods: {
      text(){
        console.log('asdf')
      }
    },
}
</script>

<style scoped>
  .borderBottom{
    border-top: 1px solid lightgray;
  }
  .cardHover:hover{
    background: lightgrey;
  }
  .center{
    margin:0 auto;
}
</style>
