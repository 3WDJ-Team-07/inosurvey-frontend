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
        <div style="padding-top:10px;">
          <span class="headline font-weight-bold" style="border-top:7px solid #42A5F5;padding-top:10px;">
            Q.{{chartItem[0].question_number}}&nbsp;&nbsp;{{ chartItem[0].question_title }}
          </span> 
          <select v-model="gender" class="subheading ml-5 pr-3 pl-3">
            <option :value="0">모든 성별</option>
            <span v-if="tagetData.gender == 0">
              <option :value="1">남성</option>
              <option :value="2">여성</option>
            </span>
            <option :value="1" v-if="tagetData.gender == 1">남성</option>
            <option :value="2" v-if="tagetData.gender == 2">여성</option>
          </select>
          <select v-model="age" class="subheading pr-3 pl-3">
            <option :value="0">모든 연령</option>
            <option :value="item" v-for="(item, index) in tagetData.age" :key="index">{{item}}대</option>
          </select>
          <select v-model="job" class="subheading pr-3 pl-3">
            <option :value="0">모든 직업</option>
            <option :value="item.id" v-for="(item, index) in tagetData.job" :key="index">{{item.name}}</option>
          </select>
        </div>
      </v-layout>
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
    props: ['form_id', 'chartItem', 'tagetData'],
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
