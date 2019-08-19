<template>
  <span>
    <v-card 
    flat color="#FAFAFA" height="600px" class="pa-5" 
    style="border-bottom: 1px solid lightgrey;width: 1150px;"
    >
      <v-layout 
      row wrap class="pb-5"
      justify-space-between 
      >
        <span>
          <select v-model="gender" class="subheading pr-3 pl-3">
            <option :value="0"></option>男女</option>
            <option v-if="targetData.gender == 0" :value="1">男性</option>
            <option v-if="targetData.gender == 0" :value="2">女性</option>
            <option :value="1" v-if="targetData.gender == 1">男性</option>
            <option :value="2" v-if="targetData.gender == 2">女性</option>
          </select>
          <select v-model="age" class="subheading pr-3 pl-3">
            <option :value="0">すべての年齢</option>
            <option :value="item" v-for="(item, index) in targetData.age" :key="index">{{item}}代</option>
          </select>
          <select v-model="job" class="subheading pr-3 pl-3">
            <option :value="0">すべての職業</option>
            <option :value="item.id" v-for="(item, index) in targetData.job" :key="index">{{item.name}}</option>
          </select>
        </span>
      </v-layout>
      <div style="padding-top:10px;" class="mb-4">
        <span class="title font-weight-bold" style="border-top:7px solid #42A5F5; padding-top:10px;">
          Q.{{chartItem[0].question_number-1}}&nbsp;&nbsp;{{ chartItem[0].question_title }}
        </span> 
      </div>
      <v-layout row wrap justify-center>
        <div style="width:800px;">
          <v-data-table
            :items="chartItem[1].responseArray"
            class="mt-2"
            hide-headers
            prev-icon="keyboard_arrow_left"
            next-icon="keyboard_arrow_right"
          >
            <template v-slot:items="props">
              <td class="title text-xs-center pa-4" style="background-color:#FAFAFA;">{{ props.item }}</td>
            </template>
          </v-data-table>
        </div>
      </v-layout>
    </v-card>
  </span>
</template>

<script>
  import { analysis }  from '@/api/index'

  export default {
    props: ['form_id', 'chartItem', 'targetData'],
    data() {
      return {
        gender: 0,
        age: 0,
        job: 0,
      }
    },
     watch: {
      age(v) {
        this.fetchTarger()
      },
      gender(v) {
        this.fetchTarger()
      },
      job(v) {
        this.fetchTarger()
      }
    },
    methods: {
      fetchTarger() {
        return analysis.FetchTargetAnalyis({
          question_id: this.chartItem[0].id,
          target: {
            gender: this.gender,
            age: this.age,
            job: this.job
          }
        })
        .then(response => {
          this.chartItem[1].responseArray = response.responseArray[0]
        })
      },
    },
  }
</script>

<style>

</style>
