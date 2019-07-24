<template>
  <div>
    <span class="title font-weight-bold pl-5 ml-2">質問 {{question.index-1}}.</span>
    <input type="text" v-if="!inputQuestion" v-model="question.question_title" class="form-control title ml-4" name="name" label="label">
    <label v-else class="headline ml-4 font-weight-bold">[ {{question.question_title}} ]</label>
    <v-divider class="pa-3 mt-4"/>
    <div>
      <v-layout row wrap justify-center>
        <star-rating
        :increment="1"
        :max-rating="5"
        inactive-color="grey"
        active-color="gold"
        :star-size="100"
        ></star-rating>
      </v-layout>
      <v-divider class="pa-5"/>
    </div>
  </div>
</template>

<script>
	import StarRating from 'vue-star-rating'

  export default {
    props:{
      question: {type:Object},
      inputQuestion: {type:Boolean},
    },
    components: { StarRating },
  }
</script>
