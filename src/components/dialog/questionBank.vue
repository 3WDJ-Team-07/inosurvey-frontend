/* 설문 은행 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isQuestionBank" persistent max-width="1400px">
      <v-card class="pr-5 pl-5 pt-4 pb-4" style="background:#FAFAFA">
		    <span 
          class="headline right grey--text" 
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
						<v-flex xs5 class="ma-3">
							<v-card flat class="card_hover">
								<v-card-title primary-title>
									<div class="ma-3" >
										<h3 class="headline mb-0">headline</h3>
										<div>description</div>
									</div>
								</v-card-title>
							</v-card>
						</v-flex>
						<v-flex xs5 class="ma-3">
							<v-card flat class="card_hover">
								<v-card-title primary-title>
									<div class="ma-3" >
										<h3 class="headline mb-0">headline</h3>
										<div>description</div>
									</div>
								</v-card-title>
							</v-card>
						</v-flex>
						<v-flex xs5 class="ma-3">
							<v-card flat class="card_hover">
								<v-card-title primary-title>
									<div class="ma-3" >
										<h3 class="headline mb-0">headline</h3>
										<div>description</div>
									</div>
								</v-card-title>
							</v-card>
						</v-flex>
						<v-flex xs5 class="ma-3">
							<v-card flat class="card_hover">
								<v-card-title primary-title>
									<div class="ma-3" >
										<h3 class="headline mb-0">headline</h3>
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
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'questionBank',
  computed: {
    ...mapState([
      'isQuestionBank'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_IS_QUESTION_BANK'
		]),
		payment(){
			this.SET_IS_QUESTION_BANK(false)
		}
  }
}
</script>

<style scoped>
	.card_hover{
		border: 2px solid #EAEAEA;
		transition: border 0.5s ease;
	}
	.card_hover:hover{
		border: 2px solid #2196F3;
		cursor: pointer;
	}
</style>
