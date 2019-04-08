/* 추가될 질문 */

<template>
	<v-container grid-list-sm class=" mt-4">
		<v-layout column class="pa-5 hoverEvent" justify-center v-for="question in boards" :key="question.id">
      {{question}}
      <v-form ref="form">
          <span class="title font-weight-bold pl-5 ml-2">질문 {{ question.id }} .</span>
					<input type="text" v-if="!inputQuestion" v-model="QuestionTitle" class="form-control title ml-4" name="name" label="label">
          <label v-else class="headline ml-4">[ {{QuestionTitle}} ]</label>
					<v-divider class="pa-3 mt-4"/>
					<v-layout row wrap>
						<v-flex sm12>
              <Single :inputQuestion="inputQuestion"/>
              <Subjective/>
              <Multiple :inputQuestion="inputQuestion"/>
              <StarRating/>
              <Opinion/>
					</v-flex>
				</v-layout>
      </v-form>
		</v-layout>
    <span v-if="boards.length !== 0">
      <div class="mt-3 mb-5" style="float:right">
        <v-btn color="grey" @click="UpdateValues" dark>수정</v-btn>
        <v-btn color="info" @click="SaveValues" dark >확인</v-btn>
      </div>
      <v-btn class="title font-weight-black" :disabled="!inputQuestion" color="success" @click="FORM_DATE_REQUEST" large block>저장</v-btn>
    </span>
	</v-container>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import Single from './questionType/Single'
  import Subjective from './questionType/Subjective'
  import Multiple from './questionType/Multiple'
  import StarRating from './questionType/StarRating'
  import Opinion from './questionType/Opinion'

	export default {
    components:{
      Single,
      Subjective,
      Multiple,
      StarRating,
      Opinion
    },
		data(){
			return{
        loading: false,
        // 추가
        QuestionTitle:'' || "질문제목을 지정해주세요.",  // 질문제목
        inputQuestion:false
			}
		},
		computed:{
			...mapState([
        'boards',
        'isSuccessFormData'
			])
		},
		methods: {
			...mapActions([
        'FETCH_BOARDS',
      ]),
      ...mapMutations([
        'FORM_DATE_REQUEST'
      ]),
			fetchData(){
				this.loading = true
				this.FETCH_BOARDS()
				 .finally(_ => {
					 this.loading = false
				 })
      },
      sumbitForm() {},
      SaveValues(){
        this.inputQuestion = true
      },
      UpdateValues(){
        this.inputQuestion = false
      }
		},
	}
</script>

<style>
	.hoverEvent{
		transition: background-color 0.5s ease;
	}
  .hoverEvent:hover{
    background-color: #ECEFF1;
    cursor: pointer;
  }
  ul li {
    list-style: none;
  }
</style>