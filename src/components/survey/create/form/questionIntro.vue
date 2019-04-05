/* 설문폼 소개글 */

<template>
	<v-container grid-list-xs class="blue-grey lighten-5">
		<v-layout column class="hoverEvent">
			<v-flex xs12 class="ma-1">
        <v-textarea
          v-if="isEditTitle"
          v-model="input"
          ref="inputTitle"
          @blur="onSubmitTitle" 
          @keyup.enter="onSubmitTitle"
          solo
          class="title"
          name="input-7-4"
          label="Solo textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
				<!-- <input class="form-control title" v-if="isEditTitle" type="text" v-model="input" ref="inputTitle" @blur="onSubmitTitle" @keyup.enter="onSubmitTitle"> -->
				<div v-else class="title" @click="onClickTitle">{{ input }}</div>
			</v-flex>
		</v-layout>	
	</v-container>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		data(){
			return{
				input: "소개글을 입력하세요",
				isEditTitle: false
			}
		},
		methods: {
			// 클릭시 input box, 포커스
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
    background-color: white;
    cursor: pointer;
  }
</style>