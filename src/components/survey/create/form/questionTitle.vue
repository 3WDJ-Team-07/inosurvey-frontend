<template>
	<v-container grid-list-xs>
		<v-layout column class="hoverEvent">
			<v-flex xs12 class="ma-1">
				<input class="form-control headline" v-if="isEditTitle" type="text" v-model="getTitle" ref="inputTitle" @blur="onSubmitTitle" @keyup.enter="onSubmitTitle">
				<div v-else class="headline" @click="onClickTitle" v-html="surveyTitle"/>
			</v-flex>
		</v-layout>	
	</v-container>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		data(){
			return{
				isEditTitle: false,
			}
		},
		computed:{
			...mapState([
				'surveyTitle'  // 설문제목을 받는다
			]),
			getTitle:{  // store에서 관리하기 위해 get/set 방식을 사용
        get(){
          return this.$store.state.surveyTitle 
        },
        set(value){
          this.$store.commit('UPDATE_TITLE', value)
        }
      }
		},
		methods: {
			onClickTitle(){
				this.isEditTitle = true
				this.$nextTick(() => this.$refs.inputTitle.focus())
			},
			onSubmitTitle(){
				this.isEditTitle = false
			}
		},
	}
</script>

<style scoped>
	.hoverEvent{
		transition: background-color 0.5s ease;
	}
  .hoverEvent:hover{
    background-color: #EAEAEA;
    cursor: pointer;
  }
</style>
