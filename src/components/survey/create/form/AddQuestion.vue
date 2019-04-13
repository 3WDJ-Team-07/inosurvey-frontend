/* 새질문 추가하기 */

<template>
	<v-container grid-list-xs fill-height>
		<v-layout column align-center class="boxColor">
			<v-flex xs12 class="ma-5">
				<v-btn 
					color="primary" 
          flat large dark 
          @click="add_single_question"
					class="pb-5 pt-4 pr-5 pl-5 
          display-1 font-weight-bold"
        ><v-icon large class="mr-3">add_circle_outline</v-icon>새 질문
        </v-btn>
        <pre>{{form}}</pre>
			</v-flex>
		</v-layout>	
	</v-container>
</template>

<script>
  import { mapState, mapMutations ,mapActions } from 'vuex';

	export default {
    data(){
      return{
        SingleValues: [ '' || "질문을 지정해주세요." ],
      }
    },
    computed: {
      ...mapState(['form'])
    },
		methods: {
      ...mapActions(['INPUT_QUESTION']),
			add_single_question() { 
        let index = this.form.list.length + 1
        this.INPUT_QUESTION({
          index : index,
          type: 'single',
          question_title: '' || '질문제목을 지정해주세요',
          question_image: null,
          question_bank: false,
          items: this.SingleValues
        })
      }
		}
	}
</script>

<style scoped>
  .boxColor{
    background-color: #EAEAEA;
  }
</style>
