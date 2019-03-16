<template>
  <div class="text-xs-center">
    <v-dialog v-model="isSurveyDialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
      </template>
      <v-card>
        <v-card-title primary-title class="title" >
          새로운 설문조사 작성하기
        </v-card-title>
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
        'isSurveyDialog',
        'surveyTitle',
      ]),
      getTitle:{
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
        onAddClick(){
          this.SET_IS_ADD_SURVEY(false)
          this.$router.replace("/SurveyForm")
        }
    }
}
</script>