/* 추가될 질문 */

<template>
	<v-container grid-list-sm class=" mt-4">
    <v-layout 
      column class="pa-5 hoverEvent" justify-center 
      v-for="(question,index) in form.list" :key="index"
      @mouseover="hover = true" @mouseleave="hover = false"
      :class="{ active: hover }"
    >
      <span v-if="hover==true" class="headline">
        <i class="fas fa-times grey--text" style="float:right;" @click="removeQuestion(index)"></i>
      </span>
      <span v-else class="mb-4"></span>
      <v-form v-if="question.question_bank == false">
        <v-layout row wrap>
          <v-flex sm12>
            <check 
            v-if="question.type == 7"
            :inputQuestion="inputQuestion"
            :question="question"
            />  
            <Single 
            v-if="question.type == 1"
            :inputQuestion="inputQuestion"
            :question="question"
            />  
            <Subjective 
            v-if="question.type == 2"
            :inputQuestion="inputQuestion"
            :question="question"
            />
            <Multiple 
            v-if="question.type == 3" 
            :inputQuestion="inputQuestion"
            :question="question"
            />
            <StarRating 
            v-if="question.type == 4"
            :inputQuestion="inputQuestion"
            :question="question"
            />
            <Opinion 
            v-if="question.type == 5"
            :inputQuestion="inputQuestion"
            :question="question"
            />
            <ImageSelect
            v-if="question.type == 6"
            :inputQuestion="inputQuestion"
            :question="question"
            />
          </v-flex>
        </v-layout>
      </v-form>
      <v-form v-if="question.question_bank == true">
        <v-layout row wrap>
          <v-flex sm12>
            <Bank 
              v-if="question.type == 1 
              && question.question_bank == true" 
              :inputQuestion="inputQuestion"
              :question="question"/>
          </v-flex>
        </v-layout>
      </v-form>
    </v-layout>
    <span v-if="formLength !== 0">
      <div class="mt-3 mb-5" style="float:right">
        <v-btn color="grey" @click="UpdateValues" dark>修正</v-btn>
        <v-btn color="info" @click="SaveValues" dark>確認</v-btn>
      </div>
      <v-btn 
      class="title font-weight-black" 
      :disabled="!inputQuestion" 
      color="info darken-1" @click="SubmitForm" 
      v-scroll-to="{ el: '#element',offset:-100,duration:1000}"
      large block>セーブ</v-btn>
    </span>
	</v-container>
</template>

<script>
  import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
  import Single      from './questionType/single/Single'
  import check      from './questionType/checking/check'
  import Subjective  from './questionType/Subjective'
  import Multiple    from './questionType/multiple/Multiple'
  import StarRating  from './questionType/StarRating'
  import Opinion     from './questionType/Opinion'
  import ImageSelect from './questionType/imageSelect/ImageSelect'
  import Bank        from './questionType/bank/Bank'
  import {EventBus}  from '@/utils/bus'

	export default {
    components: {
      check,
      Single,
      Subjective,
      Multiple,
      StarRating,
      Opinion,
      ImageSelect,
      Bank
    },
		data() {
			return {
        loading: false,
        hover: false,
        inputQuestion:false,
        bgColor:'#ffffff',
        SingleValues:''
			}
		},
		computed: {
			...mapState([
        'isSuccessFormData',
        'form',
        'formTitle',
        'formIntro'
        ]),
      ...mapGetters(['formLength'])
    },
    mounted() {
      EventBus.$on("ColorEventBus", value => this.bgColor = value)
    },
		methods: {
      ...mapMutations([
        'FORM_DATE_REQUEST',
        'REMOVE_QUESTION',
        'INPUT_FORM_HEAD',
        'INPUT_TESTNUMBER'
      ]),
      ...mapActions(['INPUT_ITEMS']),
      SaveValues() {
        this.inputQuestion = true
      },
      UpdateValues() {
        this.inputQuestion = false
      },
      removeQuestion(index) {
        this.REMOVE_QUESTION(index)
      },
      SubmitForm() {
        console.log(this.$store.state.testNumber)
        this.INPUT_FORM_HEAD({
          formTitle: this.formTitle,
          formIntro: this.formIntro,
          bgcolor: this.bgColor || '#ffffff',
          answer: this.$store.state.testNumber
        })
        this.FORM_DATE_REQUEST()
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
  .hoverEvent:first-child {
    border-radius: 20px;
    border:1px solid lightgray;
  }
  .list-enter-active, .list-leave-active {
  transition: all 1s;
  }
  .list-enter {
    opacity: 0;
    transform: translateX(-100px);
  }
  .list-leave-to{
    opacity: 0;
    transform: scale(0);
  }

</style>