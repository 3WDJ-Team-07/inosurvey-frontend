/* 상품작성 폼(사이드바) */

<template>
  <div>
    <v-tabs 
      grow color="blue"
      icons-and-text hide-slider 
      fixed-tabs height="110"
      >
      <v-tab><v-img src="/static/question_create.png" alt="" width="70"></v-img></v-tab>
      <v-tab style="background:#535c68;" @click="SET_IS_QUESTION_BANK(true)"><v-img src="/static/question.png" alt="" width="70"></v-img></v-tab>

      <v-tab-item>
        <v-card flat class="headline">
          <v-expansion-panel>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class=" pb-2 pt-3">테마</div>
              </template>
              <v-card >
                <div class="color-picker">
                  <a href="" style="background-color:red;"></a>
                  <a href="" style="background-color:orange;"></a>
                  <a href="" style="background-color:gold;"></a>
                  <a href="" style="background-color:green;"></a>
                  <a href="" style="background-color:blue;"></a>
                  <a href="" style="background-color:purple;"></a>
                </div>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-card-text class=" border_bottom pa-4 card_hover" @click="text">객관식</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_hover" @click="2">주관식</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_hover" @click="3">확인란</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_hover" @click="4">별 등급</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_hover" @click="5">의견란</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_hover" @click="6">이미지선택 </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- <v-tab-item>
        <v-card flat @click="text">
          <v-card-text class="subheading border_bottom pa-4 card_hover" @click="text">asd</v-card-text>
          <v-card-text class="subheading border_bottom pa-4 card_hover" @click="text">asd</v-card-text>
          <v-card-text class="subheading border_bottom pa-4 card_hover" @click="text">asd</v-card-text>
          <v-card-text class="subheading border_bottom pa-4 card_hover" @click="text">asd</v-card-text>
          <v-card-text class="subheading border_bottom pa-4 card_hover" @click="text">asd</v-card-text>
          <v-card-text class="subheading border_bottom pa-4 card_hover" @click="text">asd</v-card-text>
          <v-card-text class="subheading border_bottom pa-4 card_hover" @click="text">asd</v-card-text>
          <v-card-text class="subheading border_bottom pa-4 card_hover" @click="text">asd</v-card-text>
        </v-card>
      </v-tab-item> -->
    </v-tabs>
    <questionBank/>
  </div>
</template>

<script>
  import questionBank from '@/components/dialog/questionBank'
  import { mapMutations } from 'vuex'

  export default {
    components: {
      questionBank
    },
    data() {
      return {
        
      }
    },
    methods: {
      text(){  // 클릭시 질문은행
        console.log('asdf')
      },
      ...mapMutations([
      'SET_IS_QUESTION_BANK'
      ])
    }
  }
</script>

<style scoped>
  .border_bottom{
    border-top: 1px solid #E0E0E0;
  }
  .card_hover:hover{
    transition: 2ms;
    background: #E0E0E0;
    cursor: pointer;
  }
  .color-picker {
  margin: 0 15px;
}
.color-picker a {
  display: inline-block;
  width: 50px;
  margin-left: 10px;
  height: 50px;
  border-radius: 5px;
}
</style>
