/* 객관식 */

<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">질문 {{question.index}}.</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
		<div>
			<ul>
        <li>
          <item 
            v-if="question.type=='single'
            && question.question_bank==false"
            v-for="(singleValue, index) in question.items"
            :key="index"
            :inputQuestion="inputQuestion"
            :singleValue="singleValue"
            :itemIndex="index"
            :questionIndex="question.index"
          />
        </li>
      </ul>
    </div>
    <v-divider class="pa-4 mt-5"></v-divider>
  </div>
</template>

<script>
  import item from './item'

  export default {
    props:['question','inputQuestion'],
    components:{
      item
    },
  }
</script>
