<template>
  <!-- <v-flex sm8 md5 class="ma-3" id="card_hover" style="background:white" v-for="(bank,index) in getPlayers" :key="bank.id">
		<v-card flat>
			<v-card-title primary-title>
				<span class="pa-3" style="line-height:30px; font-size:20px;">
          {{bank.title.split('()')[0]}}
          <select @change="value_chk" ref="select" class="pa-1 pr-2 pl-2 selectbox subheading" style='border:1px solid lightgrey'>
            <option v-for="(value, index) in bank.checks" :key="index" :value="value.value">{{ value.value }}</option>
          </select>
          <input type="text" ref="input" style="display:none; line-height:36px; border:1px solid lightgrey; width:140px;">
          {{bank.title.split('()')[1]}}
        </span>
			</v-card-title>
		</v-card>
    <v-btn style="float:right; border:1px solid grey" color="lightgrey" depressed small>저장</v-btn>
	</v-flex>
  <v-flex v-if="getPlayers.length === 0" sm8 md5>
    <div class="display-2 grey--text font-weight-thin" style="width:800px;">
      <span style="line-height:350px;">찾으시는 질문이 없습니다..</span>
    </div>
  </v-flex> -->
  <!-- 반댓점 -->
  <v-flex sm8 md5 class="ma-3" id="card_hover" style="background:white">
    <v-card flat @click="addQuestion">
      <v-card-title primary-title>
        <span class="pa-3" style="line-height:30px; font-size:20px;">
          {{this.bank.questions.survey_title.split('()')[0]}}
          <select @change="value_chk" ref="select" class="pa-1 pr-2 pl-2 selectbox subheading" style='border:1px solid lightgrey'>
            <option v-for="(value, index) in this.bank.questions.values" :selected="index === 0 ? 'select' : ''" :key="index" :value='value'>{{ value }}</option>
          </select>
          <input type="text" v-model="inputValue" ref="input" class="input_style subheading" style="display:none; line-height:36px; border:1px solid lightgrey; width:140px;">
          {{this.bank.questions.survey_title.split('()')[1]}}
        </span>
      </v-card-title>
    </v-card>
    <div ref="btns" style="float:right;display:none;">
      <v-btn @click="value_cancel" style="border:1px solid grey" color="lightgrey" depressed small>취소</v-btn>
      <v-btn @click="value_save" style="border:1px solid grey" color="lightgrey" depressed small>완료</v-btn>
    </div>
  </v-flex>
</template>

<script>
export default {
  props:{
    bank:Object
  },
  data(){
    return{
      inputValue:'',
      select:''
        // banks: [
        //   {title: 'blabla () blablablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : '기업은행', value:2},
        //   {name : '하나은행', value:"직접입력"},
        // ]},
        //   {title: 'asd () zㅁㄴㅇㅁㄴx',checks: [
        //   {name : 'asd', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : '하나은행', value:"직접입력"},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'dsdas  dasd () ffffffffffffffffff',checks: [
        //   {name : '국민은asd행', value:0},
        //   {name : 'asd', value:1},
        //   {name : '기업은행', value:2},
        //   {name : '하나은행', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},,
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},,
        //   {title: 'blaas dasbla () bczxaczxlablzablablabl',checks: [
        //   {name : '국민은행', value:0},
        //   {name : '신한은행', value:1},
        //   {name : 'asd', value:2},
        //   {name : 'asd', value:3},
        // ]},
        // ],
    }
  },
  methods: {
    value_chk(){
      if(this.$refs.select.value == "직접입력"){
        this.$refs.input.style.display=''
        this.$refs.btns.style.display=''
        this.$refs.select.style.display='none'
        this.$refs.input.focus()
      }
    },
    value_cancel(){
      this.$refs.input.style.display='none'
      this.$refs.btns.style.display='none'
      this.$refs.select.style.display=''
      this.$refs.select.options[0].selected = true
    },
    value_save(){
      // 입력하고 등록누를때
      console.log(this.bank.questions.survey_title.split('()')[0]+ this.inputValue +this.bank.questions.survey_title.split('()')[1])
    },
    addQuestion(e){
      // 체크박스 인풋박스 눌렀을때 폼등록 안되도록
      if (e.target.nodeName.toLowerCase() !== 'select' && e.target.nodeName.toLowerCase() !== 'input') { 
        console.log(this.bank.questions.survey_title.split('()')[0]+ this.$refs.select.value +this.bank.questions.survey_title.split('()')[1])
      }
    }
  },
}
</script>

