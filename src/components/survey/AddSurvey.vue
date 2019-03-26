/* 설문제목을 정하는 모달창 
    1. 모달창을 끄는 버튼
    2. 다른 곳을 누르면 false된 상태에라서 버튼 클릭안되는 문제점
*/

<template>
  <div>
    <v-dialog v-model="isSurveyDialog" persistent width="500">
      <v-card class="pb-5 pt-3 pl-3 pr-3">
        <v-card-title primary-title class="title font-weight-black">새로운 설문조사 작성하기</v-card-title>
        <v-card-text justify-end>
          <v-text-field name="name" label="설문제목" outline id="id" v-model="getTitle" ref="input"></v-text-field>
          <div style="float:right">
            <v-btn color="grey" dark @click="SET_IS_ADD_SURVEY(false)">취소</v-btn>
            <v-btn color="primary" @click="onAddClick" :disabled="!valid">완료</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'AddSurvey',
    data() {
      return {
        valid: false
      }
    },
    computed: {
      ...mapState([
        'isSurveyDialog',  // 설문제목지정 모달창 체크 
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
    watch: {
      getTitle(v) {  // getTitle을 바라보다가 길이가 0이 아닐때 disable을 풀어준다
        this.valid = v.trim().length > 0
      }
    },
    updated() {  // 모달을 열때 제목입력에 포커스를 맞춘다
      this.$refs.input.focus()
    },
    methods: {
      ...mapMutations([
        'SET_IS_ADD_SURVEY',
      ]),
      onAddClick(){  // 클릭시 모달창을 끄고 surveyForm으로 리다이렉트
        this.SET_IS_ADD_SURVEY(false)
        this.$router.replace("/SurveyForm")
      }
    }
  }
</script>