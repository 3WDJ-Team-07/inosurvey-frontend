<template>
  <v-layout row wrap justify-center>
    <v-flex xs8 v-if="chartItem[0].type_id == 2 || chartItem[0].type_id == 5">
      <Subjected
      :form_id = "form_id"
      :chartItem = "chartItem"
      :targetData = "targetData"
      />
    </v-flex>
    <v-flex xs8 v-else-if="chartItem[0].type_id == 6">
      <ImageSelect
      :form_id = "form_id"
      :chartItem = "chartItem"
      :targetData = "targetData"
      />
    </v-flex>
    <v-flex xs8 v-else>
      <Choice
      :form_id = "form_id"
      :chartItem = "chartItem"
      :targetData = "targetData"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import { analysis }  from '@/api/index'
  import Subjected     from './Subjected'
  import ImageSelect   from './ImageSelect'
  import Choice        from './Choice'

  export default {
    props: ['form_id', 'chartItem', 'targetData'],
    components:{
      Subjected,
      ImageSelect,
      Choice
    },
  }
</script>
