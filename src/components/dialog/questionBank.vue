/* 설문은행 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isQuestionBank" persistent max-width="1400px">
      <v-card class="pr-5 pl-5 pt-4 pb-4 scroll_css" style="background:#FAFAFA; min-height:700px;max-height:700px;">
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
                v-model="filter"
								prepend-icon="search"
								label="질문검색"
								solo-inverted
								block
								flat
							></v-text-field>
						</v-flex>
						<v-flex sm8 md5 class="ma-3" v-for="(bank,index) in getPlayers" :key="bank.id">
							<v-card flat id="card_hover">
								<v-card-title primary-title>
										<!-- <h3 class="headline mb-0" v-html="bank.questions.survey_title"></h3> -->
									<span class="pa-3" style="line-height:30px; font-size:20px;">
                    {{bank.questions.survey_title.split('()')[0]}}
                    <select class="pa-1 pr-2 pl-2 selectbox subheading" style='border:1px solid lightgrey'>
                      <!-- <option v-for="(check, index) in bank.checks" :key="index" value='volvo'>{{ check.name }}</option> -->
                      <option v-for="(value, index) in bank.questions.values" :key="index" value='volvo'>{{ value }}</option>
                    </select>
                    {{bank.questions.survey_title.split('()')[1]}}
                  </span>
									<!-- <h3 class="headline" style="float:left;">{{bank.title.split('()')[0]}}</h3> -->
									<!-- <h3 class="headline" style="float:left;">{{bank.title.split('()')[1]}}</h3> -->
								</v-card-title>
							</v-card>
						</v-flex>
            <v-flex v-if="getPlayers.length === 0" sm8 md5>
              <div class="display-2 grey--text font-weight-thin" style="width:800px;">
                <span style="line-height:350px;">찾으시는 질문이 없습니다..</span>
              </div>
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
    data(){
      return{
        filter:'',
        // banks: [
        //   {title: 'blabla () blablablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : '기업은행', value:2},
        //   {name : '하나은행', value:3},
        // ]},
        //   {title: 'asd () zㅁㄴㅇㅁㄴx',checks: [
        //   {name : 'asd', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : '하나은행', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'dsdas  dasd () ffffffffffffffffff',checks: [
        //   {name : '국민은asd행', value:0},
        //   {name : 'asd', value:1},
        //   {name : '기업은행', value:2},
        //   {name : '하나은행', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},,
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},,
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        // ],
      }
    },
		computed: {
			// 설문은행 모달 상태값
			...mapState([
        'isQuestionBank',
        'banks'
      ]),
      getPlayers() {
        var banks = this.banks.filter((bank) => {
          return bank.questions.survey_title.toLowerCase().includes(this.filter.toLowerCase())
        })
        return banks
      }
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
  .scroll_css{
    overflow-y: auto;
  }
</style>
