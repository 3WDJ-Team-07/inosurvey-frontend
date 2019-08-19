<template>
  <div>
    <span class="title white--text font-weight-bold pa-3" style="border:1px; border-radius:40px; background-color:#42A5F5; margin-left:20px;">一次調査</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4 font-weight-bold">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
		<div>
			<ul>
        <li>
          <item 
          v-for="(singleValue, index) in question.items"
          :key="index"
          :itemIndex = "index"
          :singleValue = "singleValue"
          :inputQuestion = "inputQuestion"
          :questionIndex="question.index"
          ></item>
        </li>
      </ul>
    </div>
    <v-divider class="pa-4 mt-5"></v-divider>
    <span style="float:left;" class="pa-3 title font-weight-black">※ 回答者一次調査番号</span>
    <v-flex xs2 style="float:left;">
      <input type="text" class="form-control title" v-model="getTestNumber"/>
    </v-flex>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import item             from './item'

  export default {
    props: [
      'question',
      'inputQuestion'
    ],
    components: { item },
    data() {
      return {
        SingleValues: { value: '' || "質問をご記入ください。" }
      }
    },
    computed: {
      getTestNumber: {
        get(){ return this.$store.state.testNumber },
        set(value) { this.$store.commit('UPDATE_TESTNUMBER', value) }
      }
    },
    created() {
      this.INPUT_ITEMS({
        items: this.SingleValues,
        questionIndex: this.question.index
      })
    },
    methods: {
      ...mapMutations(['INPUT_ITEMS']),
    },
  }
</script>