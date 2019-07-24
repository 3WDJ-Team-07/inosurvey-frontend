/* 설문은행 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog 
    v-model="isQuestionBank" 
    persistent max-width="1400px"
    >
      <v-card class="pr-5 pl-5 pt-4 pb-4 scroll_css" style="background:#FAFAFA; min-height:700px;max-height:700px;">
		    <span 
          class="headline right grey--text mouse_pointer" 
          @click="SET_IS_QUESTION_BANK(false)">
          <i class="fas fa-times"></i>
        </span>
				<v-container grid-list-xs>
					<v-layout row wrap justify-center>
						<v-flex xs12>
							<div class="display-1 mb-4">質問銀行</div>
						</v-flex>
						<v-flex xs12>
							<v-text-field
              v-model="filter"
							prepend-icon="search"
							label="Search"
							solo-inverted block flat
							></v-text-field>
						</v-flex>
            <template v-if="!this.$store.state.loading">
              <!-- 질문 카드 컴포넌트 -->
              <questionCard
                v-for="(bank, index) in getPlayers" 
                :key="bank.id" :bank="bank" 
              />
              <v-flex v-if="getPlayers.length === 0" sm8 md5>
                <div class="display-2 grey--text font-weight-thin" style="width:800px;">
                  <span style="line-height:350px;">見つかりません。</span>
                </div>
              </v-flex>
            </template>
            <Spinner3 v-else/>
					</v-layout>
				</v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
  import questionCard               from './questionCard'
  import Spinner3                    from '@/components/Spinner3'

	export default {
    name: 'questionBank',
    components:{ questionCard, Spinner3 },
    data(){
      return{
        filter:''
      }
    },
		computed: {
      // 설문은행 모달 상태값, 추가한 질문
			...mapState(['isQuestionBank','banks']),
      // 설문조회기능
      getPlayers() {
        var banks = this.banks.filter((bank) => {
          return bank.questions.survey_title.toLowerCase().includes(this.filter.toLowerCase())
        })
        return banks
      }
    },
		methods: {
			// 설문은행 모달 상태값 변이
			...mapMutations(['SET_IS_QUESTION_BANK'])
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
  .scroll_css{
    overflow-y: auto;
  }
</style>
