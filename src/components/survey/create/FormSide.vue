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
          <v-card-text style="text-align: center;" class="grey lighten-1 white--text pa-4 card_transition" @click="add_check_question">事前調査追加</v-card-text>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="pb-2 pt-3 card_transition">テーマ</div>
              </template>
              <v-card >
                <div class="color-picker">
                  <swatches v-model="color" colors="text-advanced" swatchSize="35" inline style="line-height:1px;"></swatches>
                </div>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_single_question">単一回答</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_subject_question">記述式</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_multiple_question">複数選択</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_star_question">星評価</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_opinion_question">意見書き</v-card-text>
          <v-card-text class="border_bottom pa-4 card_transition" @click="add_image_question">画像タイプ</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <questionBank/>
    <v-snackbar outline color="primary" v-model="loading" bottom multi-line right>
      <v-progress-circular
        indeterminate
        color="white"
      ></v-progress-circular>  
      <span class="subgeading pa-3">質問製造中
      </span><v-btn flat>Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import questionBank                           from '@/components/dialog/quebank/questionBank'
  import { mapState, mapMutations, mapActions } from 'vuex'
  import Swatches                               from 'vue-swatches'
  import { EventBus }                           from '@/utils/bus'
  import "vue-swatches/dist/vue-swatches.min.css"

  export default {
    components: {
      questionBank,
      Swatches,
    },
    data(){
      return{
        color:'#ffffff',
        loading: false,
      }
    },
    updated() {
      EventBus.$emit('ColorEventBus',this.color)
    },
    computed: {
      ...mapState(['form'])
    },
    methods: {
      BankBtn_Click() {
        this.SET_IS_QUESTION_BANK(true)
        this.FETCH_QUESTION_BANK()
      },
      ...mapActions(['FETCH_QUESTION_BANK','INPUT_QUESTION']),
      ...mapMutations(['SET_IS_QUESTION_BANK']),  // 질문은행 모달 상태값 변이
      add_single_question() {
        this.loading=true
        setTimeout(() => {
          let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 1,
            question_title:'' || 'タイトルを指定してください。',
            question_image: null,
            question_bank: false,
            items: []
          })
          this.loading=false
        }, 1000)
      },
      add_subject_question() {
        this.loading=true
        setTimeout(() => {
        let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 2,
            question_title:'' || 'タイトルを指定してください。',
            question_image: null,
            question_bank: false,
            items: ""
          })
        this.loading=false
        }, 1000)
      },
      add_multiple_question() {
        this.loading=true
        setTimeout(() => {
        let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 3,
            question_title:'' || 'タイトルを指定してください。',
            question_image: null,
            question_bank: false,
            items: []
          }) 
        this.loading=false
        }, 1000)
      },
      add_star_question() {
        this.loading=true
        setTimeout(() => {
        let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 4,
            question_title:'' || 'タイトルを指定してください。',
            question_image: null,
            question_bank: false,
            items: ""
          }) 
        this.loading=false
        }, 1000)
      },
      add_opinion_question() {
        this.loading=true
        setTimeout(() => {
        let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 5,
            question_title:'' || '意見を書いてください。',
            question_image: null,
            question_bank: false,
            items: ""
          }) 
        this.loading=false
        }, 1000)
      },
      add_image_question() {
        this.loading=true
        setTimeout(() => {
        let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 6,
            question_title:'' || 'タイトルを指定してください。',
            question_image: null,
            question_bank: false,
            items: []
          }) 
        this.loading=false
        }, 1000)
      },
      add_check_question() {
        this.loading=true
        setTimeout(() => {
          let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 7,
            question_title:'' || 'タイトルを指定してください。',
            question_image: null,
            question_bank: false,
            items: []
          })
          this.loading=false
        }, 1000)
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
  .v-progress-circular{
    margin: 1rem
  }
</style>
