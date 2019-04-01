<template>
	<v-container grid-list-sm>
		<v-layout row class="hoverEvent pa-5" justify-center align-center>
				<v-form ref="form">
      		<v-flex sm12>
						<span class="title font-weight-bold pa-4">질문번호. </span>
						<input type="text" class="form-control title"  name="name" label="label">
					</v-flex>
					<v-divider class="pa-3"/>
					<v-layout row wrap justify-center>
						<v-flex sm12>
							<!-- 객관식 문제 -->
							<template>
								<div style="width:600px">
									<ul>
										<li>
											<div style="padding: 25px 25px 25px 70px;">
												<input type="radio" id="a" name="selector" value="radio-1">
												<input v-if="!inputQuestion" type="text" class="form-control subheading" label="질문을 입력하세요">
												<label v-else for="a">질문을 입력하세요</label>
												<v-icon color="red" class="ml-4">add_box</v-icon>
												<v-icon color="green">indeterminate_check_box</v-icon>
												<div class="check"></div>
											</div>
  										</li>
										<li>
											<div style="padding: 25px 25px 25px 70px;">
												<input type="radio" id="b" name="selector" value="radio-1">
												<input v-if="!inputQuestion" type="text" class="form-control subheading" label="질문을 입력하세요">
												<label v-else for="b">질문을 입력하세요</label>
												<v-icon color="red" class="ml-4">add_box</v-icon>
												<v-icon color="green">indeterminate_check_box</v-icon>
												<div class="check"></div>
											</div>
  										</li>
									</ul>
								</div>
							</template>
							<!-- 확인란 문제 -->
							<v-divider class="pa-5"></v-divider>
							<template>
								<v-layout row wrap class="pl-5">
									<v-flex xs6 class="container">
										<input type="checkbox" id="check1" name="check1">
										<input v-if="!inputQuestion" type="text" class="form-control subheading checkbox" label="질문을 입력하세요">
										<label v-else for="check1" class="title checkmark"> Scales</label>
										<v-icon color="red">add_box</v-icon>
										<v-icon color="green">indeterminate_check_box</v-icon>
									</v-flex>
									<v-flex xs6>
										<input type="checkbox" id="check1" name="check1" >
										<input v-if="!inputQuestion" type="text" class="form-control subheading" label="질문을 입력하세요">
										<label v-else for="check1" class="title"> Scales</label>
										<v-icon color="red">add_box</v-icon>
										<v-icon color="green">indeterminate_check_box</v-icon>
									</v-flex>
									<v-flex xs6>
										<input type="checkbox" id="check1" name="check1" >
										<input v-if="!inputQuestion" type="text" class="form-control subheading" label="질문을 입력하세요">
										<label v-else for="check1" class="title"> Scales</label>
										<v-icon color="red">add_box</v-icon>
										<v-icon color="green">indeterminate_check_box</v-icon>
									</v-flex>
									<v-flex xs6>
										<input type="checkbox" id="check1" name="check1" >
										<input v-if="!inputQuestion" type="text" class="form-control subheading" label="질문을 입력하세요">
										<label v-else for="check1" class="title"> Scales</label>
										<v-icon color="red">add_box</v-icon>
										<v-icon color="green">indeterminate_check_box</v-icon>
									</v-flex>
								</v-layout>
							</template>
							<v-divider class="pa-5"></v-divider>
							<!-- 주관식 문제 -->
							<template>
								<div>
									<v-text-field
										name="name"
										label="답을 입력하세요"
										id="id"
										box
									></v-text-field>
								</div>
							</template>
							<v-divider class="pa-5"></v-divider>

							<!-- 별등급 문제 -->
							<template>
								<div class="pb-4 pl-5">
									<star-rating
										v-bind:increment="0.5"
										v-bind:max-rating="5"
										inactive-color="#F0F0F0"
										active-color="gold"
										v-bind:star-size="60"
										>
									</star-rating>
								</div>
							</template>
						</v-flex>
					</v-layout>
					<v-divider/>
					<div class="mt-3" style="float:right">
						<v-btn outline color="grey" dark>취소</v-btn>
						<v-btn outline color="info" dark>확인</v-btn>
					</div>
				</v-form>
		</v-layout>	
	</v-container>
</template>

<script scoped>
	import StarRating from 'vue-star-rating'

	export default {
		components: {
			StarRating
		},
		data(){
			return{
				inputQuestion:false
			}
		}
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
	ul li{
		display: block;
		position: relative;
	}
	ul li input[type=radio]{
		position: absolute;
		visibility: hidden;
	}
	ul li label{
		position: relative;
		font-weight: 300;
		font-size: 1.35em;
		z-index: 9;
		cursor: pointer;
	}	
	ul li .check{
		display: block;
		position: absolute;
		border: 5px solid #AAAAAA;
		border-radius: 100%;
		height: 25px;
		width: 25px;
		top: 26px;
		left: 20px;
		z-index: 5;
		transition: border .25s linear;
	}
	ul li .check::before {
		display: block;
		position: absolute;
		content: '';
		border-radius: 100%;
		height: 12px;
		width: 12px;
		top: 2px;
		left: 2.5px;
		transition: background 0.25s linear;
	}
	input[type=radio]:checked ~ .check {
		border: 5px solid grey;
	}
	input[type=radio]:checked ~ .check::before{
		background: gold;
	}
</style>
