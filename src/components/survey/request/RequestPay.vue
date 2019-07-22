<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="display-1 pb-4">アンケートの見積もり</div>
    </v-layout>
    <v-card fluid grid-list-sm class="border_style pa-5">
      <v-layout column wrap>
        <div class="pa-3 mt-2 font-weight-bold display-2">
          <v-layout row wrap justify-space-between>
            <span>お支払い金額</span>
            <span>{{total}} イノ</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-5"/>
        <div justify-space-between class="pa-4 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>予想応答者数</span>
            <span ref="targetNumber">{{responseNumber}} 人</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-2"/>
        <div justify-space-between class="pa-4 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>質問数</span>
            <span>{{this.$store.state.form.list.length}} 質問</span>
          </v-layout>
        </div>
        <v-divider class="pa-2 mt-2"/>
        <div justify-space-between class="pa-4 mb-5 font-weight-bold title grey--text">
          <v-layout row wrap justify-space-between>
            <span>質問当たりの料金</span>
            <span>{{questionNumberPay}} イノ</span>
          </v-layout>
        </div>
      </v-layout>
      <v-divider class="mt-5"/>
      <v-btn 
        class="mt-5 title font-weight-bold" 
        large color="info" block 
        @click="targetSave">
        確認 ( 決済 )
      </v-btn>
    </v-card>
    <surveyPayment
    :responseNumber = "responseNumber"
    :total = "total"
    :numberTotal = "numberTotal"/>
  </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import surveyPayment    from '@/components/dialog/surveyPayment'
  import { EventBus }     from '@/utils/bus'

	export default {
    name: 'requestPay',
    components: { surveyPayment },
		data(){
			return{
        responseNumber:50,    // 응답자수
        questionNumberPay:10, // 문제당 요금,
        gender:0,
        age:[],
        job:[]
			}
    },
    // 이상하게 마운트될때 값을 바꿔줘야 v-model 값이 변동가능 
    mounted() {
      this.responseNumber = 100
    },
    computed: { 
      ...mapState(['userinfo']),
      total(){
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return (this.responseNumber * this.questionNumberPay * this.$store.state.form.list.length).toString().replace(regexp, ',');
      },
      numberTotal() {
        return this.responseNumber * this.questionNumberPay * this.$store.state.form.list.length
      }
    },
    updated() {
      EventBus.$on('responseNumber', response => this.responseNumber = response)
      EventBus.$on('gender', response => this.gender = response)
      EventBus.$on('age', response => this.age = response)
      EventBus.$on('job', response => this.job = response)
    },  
    methods: {
      ...mapMutations([
        'SET_IS_PAYMENT_SURVEY',
        'INPUT_FORM_TARGET',
        'INPUT_SURVEY_USER_ID'
      ]),
      targetSave(){
        this.INPUT_FORM_TARGET({
          gender: this.gender,
          age: this.age,
          job: this.job,
          responseNumber: this.responseNumber
        })
        this.SET_IS_PAYMENT_SURVEY(true)
        this.INPUT_SURVEY_USER_ID({ user_id: this.userinfo.id })
      }
    }
	}
</script>

<style scoped>
  .border_style {
    border: 1px solid lightgray;
  }
</style>
