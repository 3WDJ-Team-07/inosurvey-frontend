<template>
  <div>
    <v-dialog v-model="isSurveyDialog" persistent width="500">
      <v-card class="pb-5 pt-3 pl-3 pr-3">
        <v-card-title primary-title class="title font-weight-black">新しいアンケートの作成</v-card-title>
        <v-card-text justify-end>
          <v-text-field name="name" label="タイトル" outline id="id" v-model="getTitle" ref="input" @keyup.enter="onAddClick"></v-text-field>
          <div style="float:right">
            <v-btn color="grey" dark @click="SET_IS_ADD_SURVEY(false)">キャンセル</v-btn>
            <v-btn color="info" @click="onAddClick" :disabled="!valid">完了</v-btn>
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
      ...mapState(['isSurveyDialog']),
      // store에서 관리하기 위해 get/set 방식을 사용
      getTitle:{  
        get(){ return this.$store.state.formTitle },
        set(value){ this.$store.commit('UPDATE_TITLE', value) }
      }
    },
    watch: {
      // getTitle을 바라보다가 길이가 0이 아닐때 disable을 풀어준다
      getTitle(v) {  
        this.valid = v.trim().length > 0
      }
    },
    created() {
      this.$store.state.formTitle = ''
    },
    updated() {  
      this.$refs.input.focus()
    },
    methods: {
      ...mapMutations(['SET_IS_ADD_SURVEY']),
      onAddClick(){  
        this.SET_IS_ADD_SURVEY(false)
        this.$router.push({name: 'surveyform'})
      }
    }
  }
</script>