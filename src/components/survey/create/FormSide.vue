/* 상품작성 폼(사이드바) */

<template>
  <div>
    <v-tabs 
      grow color="blue"
      icons-and-text hide-slider 
      fixed-tabs height="120">
      <v-tab><v-img src="/static/market.png" alt="" width="100"></v-img></v-tab>
      <v-tab><v-img src="/static/write.png" alt="" width="100"></v-img></v-tab>
      <v-tab-item v-for="tab of tabs" :key="tab.index">
        <v-card flat @click="text">
          <v-card-text 
            v-for="tab in tabs" :key="tab.index"
            class="subheading border_bottom pa-4 card_hover"
            @click="text">
           {{ tab.name }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          { name: '객관식' },
          { name: '주관식' },
          { name: 'tab2' },
          { name: 'tab2' },
          { name: 'tab2' },
          { name: 'tab2' },
        ],
      }
    },
    methods: {
      text(){  // 클릭시 질문은행
        console.log('asdf')
      }
    },
  }
</script>

<style scoped>
  .border_bottom{
    border-top: 1px solid lightgray;
  }
  .card_hover:hover{
    background: lightgrey;
  }
</style>
