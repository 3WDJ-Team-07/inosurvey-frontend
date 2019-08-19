<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">質問 {{question.index-1}}.</span>
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
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import item             from './item'

  export default {
    props: [
      'question',
      'inputQuestion'
    ],
    components: { item },
    data() {
      return {
        SingleValues: { value: '' || "質問をご記入ください" }
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
