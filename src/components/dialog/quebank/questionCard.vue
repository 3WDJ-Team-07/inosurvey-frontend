<template>
  <v-flex sm8 md5 class="ma-3" id="card_hover" style="background:white">
    <v-card flat @click="addQuestion">
      <v-card-title primary-title>
        <span class="pa-3" style="line-height:30px; font-size:20px;">
          {{this.bank.questions.survey_title.split('()')[0]}}
          <select 
            @change="value_click" ref="select" 
            class="pa-1 pr-2 pl-2 selectbox subheading" 
            style='border:1px solid lightgrey'
          >
            <option 
              v-for="(value, index) in this.bank.questions.values" 
              :selected="index === 0 ? 'select' : ''" :key="index" 
              :value='value'>{{ value }}
            </option>
          </select>
          <input 
          type="text" v-model="inputValue" ref="input"
          @keyup.enter="value_save" class="input_style subheading" 
          style="display:none; line-height:36px;border:1px solid lightgrey; width:140px;">
          {{this.bank.questions.survey_title.split('()')[1]}}
        </span>
      </v-card-title>
    </v-card>
    <div ref="btns" style="float:right;display:none;">
      <v-btn @click="value_cancel" style="border:1px solid grey" color="lightgrey" depressed small>キャンセル</v-btn>
      <v-btn @click="value_save" style="border:1px solid grey" color="lightgrey" depressed small>完了</v-btn>
    </div>
  </v-flex>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex';

  export default {
    props:{
      bank:Object
    },
    data(){
      return{
        inputValue:'',
        select:''
      }
    },
    computed: {
      ...mapState(['form'])
    },
    methods: {
      ...mapActions(['INPUT_QUESTION']),
      ...mapMutations(['SET_IS_QUESTION_BANK']),
      // 직접입력을 클릭할시 입력란작성가능
      value_click(){
        if(this.$refs.select.value == "직접입력"){
          this.$refs.input.style.display=''
          this.$refs.btns.style.display=''
          this.$refs.select.style.display='none'
          this.$refs.input.focus()
        }
      },
      // 취소버튼 누를경우 셀렉트박스
      value_cancel(){
        this.$refs.input.style.display='none'
        this.$refs.btns.style.display='none'
        this.$refs.select.style.display=''
        this.$refs.select.options[0].selected = true
      },
      value_save(){
        let index = this.form.list.length + 1
        // 입력하고 등록누를때 선택된 타이틀값 반환
        this.INPUT_QUESTION({
          index : index,
          type: 1, 
          question_title:this.bank.questions.survey_title.split('()')[0]+ this.inputValue +this.bank.questions.survey_title.split('()')[1],
          question_image:'',
          question_bank:true,
          items:this.bank.questions.items
        })
        this.SET_IS_QUESTION_BANK(false)
      },
      addQuestion(e){
        // 체크박스 인풋박스 눌렀을때 폼등록 안되도록
        if (e.target.nodeName.toLowerCase() !== 'select' && e.target.nodeName.toLowerCase() !== 'input') { 
          let index = this.form.list.length + 1
          this.INPUT_QUESTION({
            index : index,
            type: 1, 
            question_title:this.bank.questions.survey_title.split('()')[0]+ this.$refs.select.value +this.bank.questions.survey_title.split('()')[1],
            question_image:'',
            question_bank:true,
            items:this.bank.questions.items
          })
          this.SET_IS_QUESTION_BANK(false)
        }
      }
    }
  }
</script>

