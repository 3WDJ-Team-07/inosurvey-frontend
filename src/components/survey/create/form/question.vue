/* 추가될 질문 */

<template>
	<v-container grid-list-xs>
		<v-layout column class="hoverEvent" v-for="b in boards" :key="b.id">
			<v-flex xs12 class="ma-1">
				<div>
 					<div>{{b}}</div>
				</div>
			</v-flex>
		</v-layout>	
	</v-container>
</template>

<script>
	import {mapState, mapActions} from 'vuex'

	export default {
		data(){
			return{
				loading: false,
			}
		},
		computed:{
			...mapState([
				'boards'
			])
		},
		methods: {
			...mapActions([
				'FETCH_BOARDS'
			]),
			fetchData(){
				this.loading = true
				this.FETCH_BOARDS()
				 .finally(_ => {
					 this.loading = false
				 })
			}
		},
	}
</script>

