/* 상품작성 폼(사이드바) */

<template>
  <div>
    <v-tabs 
      grow color="blue"
      icons-and-text hide-slider 
      fixed-tabs height="110"
    >
      <v-tab>
        <v-img src="/static/question_create.png" alt="" width="70"></v-img>
      </v-tab>
      <v-tab 
        style="background:#535c68;" 
        @click="BankBtn_Click">
        <v-img src="/static/question.png" alt="" width="70"></v-img>
      </v-tab>
      <v-tab-item>
        <v-card flat class="headline">
          <v-expansion-panel>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class=" pb-2 pt-3 card_transition">테마</div>
              </template>
              <v-card >
                <div class="color-picker">
                  <swatches v-model="color" colors="text-advanced" swatchSize="35" inline style="line-height:1px;"></swatches>
                </div>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_single_question">객관식</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_subject_question">주관식</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_multiple_question">확인란</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_star_question">별 등급</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_opinion_question">의견란</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="">이미지선택 </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <questionBank/>
  </div>
</template>

<script>
  import questionBank from '@/components/dialog/quebank/questionBank'
  import { mapState, mapMutations, mapActions } from 'vuex'
  import Swatches from 'vue-swatches'
  import "vue-swatches/dist/vue-swatches.min.css"
  import {EventBus} from '@/utils/bus'

  export default {
    components: {
      questionBank,
      Swatches 
    },
    data(){
      return{
        color:'#ffffff',
        value: ['' || "질문을 지정해주세요."],
      }
    },
    updated(){
      EventBus.$emit('ColorEventBus',this.color)
    },
    computed: {
      ...mapState(['form'])
    },
    methods: {
      BankBtn_Click(){
        this.SET_IS_QUESTION_BANK(true)
        this.FETCH_QUESTION_BANK()
      },
      ...mapActions(['FETCH_QUESTION_BANK','INPUT_QUESTION']),
      ...mapMutations(['SET_IS_QUESTION_BANK']),  // 질문은행 모달 상태값 변이
      add_single_question() {
        let index = this.form.list.length + 1
        this.INPUT_QUESTION({
          index : index,
          type: 'single',
          question_title:'' || '질문제목을 지정해주세요',
          question_image: null,
          question_bank: false,
          items: this.value
        })
      },
      add_subject_question() {
        let index = this.form.list.length + 1
        this.INPUT_QUESTION({
          index : index,
          type: 'subjective',
          question_title:'' || '질문제목을 지정해주세요',
          question_image: null,
          question_bank: false,
          items: ""
        })
      },
      add_multiple_question() {
        let index = this.form.list.length + 1
        this.INPUT_QUESTION({
          index : index,
          type: 'multiple',
          question_title:'' || '질문제목을 지정해주세요',
          question_image: null,
          question_bank: false,
          items: this.value
        }) 
      },
      add_star_question() {
        let index = this.form.list.length + 1
        this.INPUT_QUESTION({
          index : index,
          type: 'starRating',
          question_title:'' || '질문제목을 지정해주세요',
          question_image: null,
          question_bank: false,
          items: ""
        }) 
      },
      add_opinion_question() {
        let index = this.form.list.length + 1
        this.INPUT_QUESTION({
          index : index,
          type: 'opinion',
          question_title:'' || '질문제목을 지정해주세요',
          question_image: null,
          question_bank: false,
          items: ""
        }) 
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
