<template>
	<v-container grid-list-sm class="mt-4">
		<v-layout column class="pa-5 hoverEvent" justify-center>
				<v-form ref="form">
          <span class="title font-weight-bold pl-5 ml-2">질문번호 </span>
					<input type="text" v-if="!inputQuestion" v-model="QuestionTitle" class="form-control title ml-4" name="name" label="label">
          <label v-else class="headline ml-4">[ {{QuestionTitle}} ]</label>
					<v-divider class="pa-3 mt-4"/>
					<v-layout row wrap>
						<v-flex sm12>
							<!-- 객관식 문제 -->
							<template>
								<div>
								  <ul>
                    <li>
                      <div class="ma-3">
                        <input class="ml-5 mr-4" type="radio">
                        <input v-if="!inputQuestion" 
                          v-model="FirstSingleValue"
                          type="text" 
                          class="form-control subheading" 
                          label="질문을 입력하세요."
                        >
                        <label v-else class="title">{{FirstSingleValue}}</label>
                        <v-icon 
                          v-if="!inputQuestion"
                          color="red" large 
                          class="ml-4" @click="addNewSingleChoice" 
                          style="line-height:20px;"
                        >add_box</v-icon>
                        <v-icon 
                          v-if="!inputQuestion"
                          color="grey" large
                          style="line-height:20px;"
                        >indeterminate_check_box</v-icon>
                      </div>
                    </li>
                    <li>
                      <div class="ma-3" v-for="(SingleValue, index) in SingleValues">
                        <input class="ml-5 mr-4" type="radio">
                        <input v-if="!inputQuestion" 
                          v-model="SingleValue.value" 
                          type="text" 
                          class="form-control subheading" 
                          label="질문을 입력하세요."
                        >
                        <label v-else class="title">{{SingleValue.value}}</label>
                        <v-icon 
                          v-if="!inputQuestion"
                          color="red" large
                          class="ml-4" 
                          @click="addNewSingleChoice" 
                          style="line-height:20px;"
                        >add_box</v-icon>
                        <v-icon 
                          v-if="!inputQuestion"
                          color="green" large
                          style="line-height:20px;"
                          @click="removeSingleChoice(index)"
                        >indeterminate_check_box</v-icon>
                      </div>
                    </li>
								  </ul>
								</div>
							</template>
							<v-divider class="pa-5 mt-5"></v-divider>

              <!-- 주관식 문제 -->
							<template>
                <v-layout row wrap justify-center>
                  <v-flex xs10>
                    <v-text-field
                      solo
                      flat
                      name="name" box
                      label="답을 입력하세요."
                    ></v-text-field>
                  </v-flex>
                </v-layout>
							</template>
							<v-divider class="pa-5"></v-divider>

              <!-- 확인란 문제 -->
							<template>
								<v-layout row wrap class="pl-5">
									<v-flex xs6 class="pb-4">
										<input class="mr-4" type="checkbox">
										<input v-if="!inputQuestion" 
                      v-model="FirstMultipleValue"
                      type="text" label="질문을 입력하세요."
                      class="form-control subheading"
                    >
										<label v-else class="title">{{FirstMultipleValue}}</label>
										<v-icon 
                      v-if="!inputQuestion"
                       color="red" 
                      class="ml-2" 
                      @click="addNewMultipleChoice" 
                      style="line-height:20px;"
                    >add_box</v-icon>
                    <v-icon 
                      v-if="!inputQuestion"
                       color="grey"
                      style="line-height:20px;"
                    >indeterminate_check_box</v-icon>
									</v-flex>
									<v-flex xs6 v-for="(MultipleValue, index) in MultipleValues" class="pb-4">
										<input class="mr-4" type="checkbox">
										<input v-if="!inputQuestion" 
                      v-model="MultipleValue.value" 
                      type="text" label="질문을 입력하세요."
                      class="form-control subheading"
                    >
										<label v-else class="title">{{MultipleValue.value}}</label>
										<v-icon 
                      v-if="!inputQuestion"
                      color="red" 
                      class="ml-2" 
                      @click="addNewMultipleChoice" 
                      style="line-height:20px;"
                    >add_box</v-icon>
                    <v-icon 
                      v-if="!inputQuestion"
                      color="green" 
                      @click="removeMultipleChoice(index)" 
                      style="line-height:20px;"
                    >indeterminate_check_box</v-icon>
									</v-flex>
								</v-layout>
							</template>
							<v-divider class="pa-5"></v-divider>

							<!-- 별등급 문제 -->
							<template>
                <v-layout row wrap justify-center>
                  <star-rating
									:increment="1"
									:max-rating="5"
									inactive-color="red"
									active-color="gold"
									:star-size="100"
									>
								  </star-rating>
                </v-layout>
							</template>
              <v-divider class="pa-5"></v-divider>

              <!-- 자유 의견란 -->
							<template>
                <v-layout row wrap justify-center>
                  <v-flex xs10>
                    <v-textarea
                      box
                      name="input-7-4"
                      label="나의 의견"
                      value="자신의 의견을 자유롭게 적어주세요."
                    ></v-textarea>
                  </v-flex>
                </v-layout>
							</template>

						</v-flex>
					</v-layout>
					<v-divider/>
					<div class="mt-3 mb-5" style="float:right">
						<v-btn color="grey" @click="UpdateValues" dark>수정</v-btn>
						<v-btn color="info" @click="SaveValues" dark >확인</v-btn>
					</div>
					<v-btn class="title font-weight-black" :disabled="!inputQuestion" color="success" large block>저장</v-btn>
				</v-form>
		</v-layout>	
	</v-container>
</template>

<script scoped>
  import Vue from 'vue'
	import StarRating from 'vue-star-rating'

	export default {
		components: {
			StarRating
		},
		data(){
			return{
        QuestionTitle:'' || "질문제목을 지정해주세요.",  // 질문제목
        inputQuestion:false,
        FirstSingleValue:'' || "질문을 지정해주세요.",  // 첫번째 보여주기 객관식
        SingleValue: {  // 객관식
          value: '' || "질문을 지정해주세요."
        },
        SingleValues: [],
        FirstMultipleValue:'' || "질문을 지정해주세요.",  // 첫번째 보여주기 다수선택
        MultipleValue: {  // 다수선택
          value: '' || "질문을 지정해주세요."
        },
        MultipleValues: [],
      }
    },
    methods: {
      test(){
        console.log('tet')
        },
      addNewSingleChoice() {
        this.SingleValues.push(Vue.util.extend({}, this.SingleValue))
      },
      removeSingleChoice(index) {
        Vue.delete(this.SingleValues, index)
      },
      addNewMultipleChoice() {
        this.MultipleValues.push(Vue.util.extend({}, this.MultipleValue))
      },
      removeMultipleChoice(index) {
        Vue.delete(this.MultipleValues, index)
      },
      sumbitForm() {},
      SaveValues(){
        this.inputQuestion = true
      },
      UpdateValues(){
        this.inputQuestion = false
      }
    },
	}
</script>
	
<style scoped>
	.hoverEvent{
		transition: background-color 0.5s ease;
	}
  .hoverEvent:hover{
    background-color: #ECEFF1;
    cursor: pointer;
  }
  ul li {
    list-style: none;
  }
</style>
