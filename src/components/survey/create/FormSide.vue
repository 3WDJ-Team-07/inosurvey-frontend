/* 상품작성 폼(사이드바) */

<template>
  <div>
    <v-tabs 
      grow color="blue"
      icons-and-text hide-slider 
      fixed-tabs height="110">
      <v-tab><v-img src="/static/question_create.png" alt="" width="70"></v-img></v-tab>
      <v-tab style="background:#535c68;" @click="BankBtn_Click"><v-img src="/static/question.png" alt="" width="70"></v-img></v-tab>
      <v-tab-item>
        <v-card flat class="headline">
          <v-expansion-panel>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class=" pb-2 pt-3 card_transition">테마</div>
              </template>
              <v-card >
                <div class="color-picker">
                  <a href="" data-value="rgb(0,121,191)"></a>
                  <a href="" style="background-color:orange;"></a>
                  <a href="" style="background-color:gold;"></a>
                  <a href="" style="background-color:green;"></a>
                  <a href="" style="background-color:blue;"></a>
                  <a href="" style="background-color:purple;"></a>
                </div>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-card-text class=" border_bottom pa-4 card_transition" @click="text">객관식</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_transition" @click="2">주관식</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_transition" @click="3">확인란</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_transition" @click="4">별 등급</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_transition" @click="5">의견란</v-card-text>
          <v-card-text class=" border_bottom pa-4 card_transition" @click="6">이미지선택 </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <questionBank/>
  </div>
</template>

<script>
  import questionBank from '@/components/dialog/questionBank'
  import { mapMutations, mapActions } from 'vuex'

  export default {
    components: {
      questionBank
    },
    methods: {
      // 객관식, 주관식 ...
      text(){
        console.log('asdf')
      },
      ...mapMutations([
      // 질문은행 모달 상태값 변이
      'SET_IS_QUESTION_BANK'
      ]),
      // 질문은행 나열
      ...mapActions([
        'FETCH_QUESTION_BANK'
      ]),
      BankBtn_Click(){
        this.SET_IS_QUESTION_BANK(true)
        this.FETCH_QUESTION_BANK()
      }
    }
  }
</script>

<style scoped>
  .border_bottom{
    border-top: 1px solid #E0E0E0;
  }
  .card_transition{
    transition: font-size 0.2s ease;
  }
  .card_transition:hover{
    font-size: 30px;
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
