/* 설문제목을 정하는 모달창 
    1. 모달창을 끄는 버튼
    2. 다른 곳을 누르면 false된 상태에라서 버튼 클릭안되는 문제점
*/

<template>
  <div class="text-xs-center">
    <v-dialog v-model="isSurveyDialog" width="500">
      <v-card>
        <span class="headline right grey--text mr-2 mt-2">
          <i class="far fa-times-circle"></i>
        </span>
        <v-card-title primary-title class="title">새로운 설문조사 작성하기</v-card-title>
        <v-card-text>
          <v-text-field name="name" label="설문제목" outline id="id" v-model="getTitle"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" large block @click="onAddClick">완료</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'AddSurvey',
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