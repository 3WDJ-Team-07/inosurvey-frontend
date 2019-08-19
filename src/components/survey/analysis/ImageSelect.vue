<template>
  <span>
    <v-card 
    flat color="#FAFAFA" height="800px" 
    style="border-bottom:1px solid lightgrey;" 
    class="pa-5"
    >
      <v-layout 
      row wrap
      justify-space-between 
      >
        <span>
          <select v-model="gender" class="subheading pr-3 pl-3">
            <option :value="0">男女</option>
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
        <div class="headline font-weight-bold">
          <v-speed-dial v-model="fab" direction="left">
            <template v-slot:activator>
              <v-btn v-model="fab" color="#EEEEEE" depressed fab>
                <v-icon size="40">bar_chart</v-icon>
                <v-icon>close</v-icon>
              </v-btn>
            </template>
            <!-- <v-btn fab color="white" @click="radarChart"><img src="/static/chart6.png" width="20"></v-btn> -->
            <v-btn fab color="white" @click="heatChart"><img src="/static/chart5.png" width="20"></v-btn>
            <v-btn fab color="white" @click="areaChart"><img src="/static/chart4.png" width="20"></v-btn>
            <v-btn fab color="white" @click="lineChart"><img src="/static/chart3.png" width="20"></v-btn>
            <v-btn fab color="white" @click="horizonChart"><img src="/static/chart2.png" width="20"></v-btn>
            <v-btn fab color="white" @click="barChart"><img src="/static/chart1.png" width="20"></v-btn>
          </v-speed-dial>
        </div>
      </v-layout>
      <div class="title font-weight-bold pb-4">
        <span style="border-top:7px solid #42A5F5;padding-top:10px;">
          Q.{{chartItem[0].question_number-1}}&nbsp;&nbsp;{{ chartItem[0].question_title }}
        </span> 
      </div>
      <v-layout row wrap justify-center class="pa-4">
        <div class="mr-5 mb-5" v-for="(item, index) in chartItem[0].question_items" :key="index">
          <span class="title">{{item.content_number}}&nbsp;&nbsp;</span>
          <v-avatar
          size="130" 
          >
            <img :src="item.content_image" alt="alt">
          </v-avatar>
        </div>
        <apexchart 
        width="1000" height="400" 
        :type="chartOptions.chart.type" 
        :options="chartOptions" 
        :series="series"
        ></apexchart>
      </v-layout>
    </v-card>
    <v-layout 
      column wrap align-center class="pa-4 subheading" 
      style="border-bottom: 1px solid lightgrey"
    >
      <div style="width:800px;">
      <v-data-table
      :items="chartItem[3].responseResult"
      class="mt-2"
      :headers="headers"
      prev-icon="keyboard_arrow_left"
      next-icon="keyboard_arrow_right"
      >
        <template v-slot:items="props">
          <td class="subheading text-xs-center pa-1" style="background-color:#FAFAFA;">{{ props.item.itemTitle }}</td>
          <td class="subheading text-xs-center pa-1" style="background-color:#FAFAFA;">{{ props.item.percentage }} %</td>
        </template>
        </v-data-table>
      </div>
    </v-layout>
  </span>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'
  import { analysis }  from '@/api/index'

  export default {
    props: ['form_id', 'chartItem', 'targetData'],
    components:{
      'apexchart': VueApexCharts,
    },
    data() {
      return {
        headers: [
          {
            text: '項目',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { 
            text: '回答率',
            align: 'center',
            sortable: false,
            value: 'calories'
          },
        ],
        gender: 0,
        age: 0,
        job: 0,
        fab:'',
        chartOptions: {
          chart: {
          type: 'bar',
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 700,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              distributed: true,
            },
            radar: {
              size: 170,
              polygons: {
                strokeColors: 'lightgrey',
                connectorColors: 'lightgrey',
              }
            }
          },
          xaxis: {
            categories: ''
          }
        },
        series: [
          {
            name: '回答数 ',
            data: ''
          }
        ],
      }
    },
    created() {
      this.chartOptions.xaxis.categories = this.chartItem[1].itemArray
      this.series[0].data = this.chartItem[2].responseArray
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
          this.chartOptions.xaxis.categories = response.itemArray
          this.series[0].data = response.responseArray[0][0]
          this.chartItem[3].responseResult = response.responseArray[1]
        })
      },
      barChart() {
        this.chartOptions.plotOptions.bar.horizontal = false
        this.chartOptions.chart.type = 'bar'
      },
      horizonChart() {
        this.chartOptions.plotOptions.bar.horizontal = true
        this.chartOptions.chart.type = 'histogram'
      },
      lineChart() {
        this.chartOptions.chart.type = 'line'
      },
      areaChart() {
        this.chartOptions.chart.type = 'area'
      },
      heatChart() {
        this.chartOptions.chart.type = 'heatmap'
      },
      // radarChart() {
      //   this.chartOptions.chart.type = 'radar'
      // }
    },
  }
</script>

<style>

</style>
