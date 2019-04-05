/* 설문은행 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isQuestionBank" persistent max-width="1400px">
      <v-card class="pr-5 pl-5 pt-4 pb-4" style="background:#FAFAFA">
		    <span 
          class="headline right grey--text mouse_pointer" 
          @click="SET_IS_QUESTION_BANK(false)">
          <i class="fas fa-times"></i>
        </span>
				<v-container grid-list-xs>
					<v-layout row wrap justify-center>
						<v-flex xs12>
							<div class="display-1 mb-4">질문은행</div>
						</v-flex>
						<v-flex xs12>
							<v-text-field
									prepend-icon="search"
									label="질문검색"
									solo-inverted
									block
									flat
							></v-text-field>
						</v-flex>
						<v-flex sm8 md5 class="ma-3" v-for="bank in banks" :key="bank.id">
							<v-card flat id="card_hover">
								<v-card-title primary-title>
									<div class="ma-3" >
										<h3 class="headline mb-0">{{bank.questions.survey_title}}</h3>
										<div>description</div>
									</div>
								</v-card-title>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex';

	export default {
    name: 'questionBank',
		computed: {
			// 설문은행 모달 상태값
			...mapState([
        'isQuestionBank',
        'banks'
			])
    },
		methods: {
			// 설문은행 모달 상태값 변이
			...mapMutations([
				'SET_IS_QUESTION_BANK'
      ]),
		}
	}
</script>

<style scoped>
	#card_hover{
		border: 2px solid #EAEAEA;
		transition: border 0.5s ease;
	}
	#card_hover:hover{
		border: 2px solid #2196F3;
		cursor: pointer;
	}
	.mouse_pointer{
		cursor: pointer;
	}
</style>
