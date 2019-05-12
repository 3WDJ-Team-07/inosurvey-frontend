<template>

  <div
    class="mx-3 pa-3 my-3 questions"
    style="cursor:pointer" 
    @click="show =! show"
  >
    <div class="font-weight-bold">
      <span>
        Q{{question.question_number}}.{{question.question_title}}
      </span>
      <v-slide-y-transition>
      <div class="body-1" v-show="show">
        <span 
        class="ml-3"
        v-for="(coo, index) in question.question_items"
        :key="index">
          <span class="circle mr-1">
            {{coo.content_number}}
          </span>
        {{coo.content}}
        </span>
      </div>
   </v-slide-y-transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['question'],
    data(){
      return{
        show: false
      }
    },
  }
</script>

<style>

</style>
