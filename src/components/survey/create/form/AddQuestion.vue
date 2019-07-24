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
        ><v-icon large class="mr-3">add_circle_outline</v-icon>質問作成
        </v-btn>
			</v-flex>
		</v-layout>	
    <v-snackbar color="primary" v-model="loading" bottom multi-line right>
      <v-progress-circular
        indeterminate
        color="white"
      ></v-progress-circular>
      <span class="subgeading pa-3">質問製造中</span><v-btn flat>Close</v-btn>
    </v-snackbar>
	</v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

	export default {
    data() {
      return {
        loading: false,
      }
    },
    computed: {
      ...mapState(['form'])
    },
		methods: {
      ...mapActions(['INPUT_QUESTION']),
			add_single_question() { 
        this.loading=true
        setTimeout(() => {
          let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 1,
            question_title: '' || 'タイトルを指定してください。',
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
  .boxColor{
    background-color: #EAEAEA;
  }
  .v-progress-circular{
    margin: 1rem
  }
</style>
