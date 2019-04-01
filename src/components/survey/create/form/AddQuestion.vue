<template>
	<v-container grid-list-xs fill-height>
		<v-layout column justify-center align-center class="boxColor">
			<v-flex xs12 class="ma-5">
				<v-btn 
					color="primary" flat large dark @click="addBoard"
					class="pb-5 pt-4 pr-5 pl-5 display-1 font-weight-bold">
          <v-icon large class="mr-3">add_circle_outline</v-icon>
          새 질문
        </v-btn>
			</v-flex>
		</v-layout>	
	</v-container>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		methods: {
			...mapActions([
				'ADD_BOARD',
				'FETCH_BOARDS'
			]),
				addBoard() {
					this.ADD_BOARD({title: this.input}).then(_=> {
					this.FETCH_BOARDS()
      	})
		}	,
		}
	}
</script>

<style scoped>
  .boxColor{
    background-color: #EAEAEA;
  }
</style>
