<template>
  <v-container fluid grid-list-md style="margin:0px;padding:0px;">
    <v-layout row>
      <v-flex xs12>
        <div class="display-1 font-weight-bold pa-3">설문조사1</div>
      </v-flex>
      <!-- <v-flex xs12>
        <div class="display-1 font-weight-bold mt-3 mr-5 ml-5" style="float:right;">설문조사1</div>
        <div class="display-1 font-weight-bold mt-3" style="float:right;">설문조사1</div>
      </v-flex> -->
    </v-layout>
    <v-layout row wrap>
      <v-flex xs3 class="border_style">
        <v-card height="180px" class="text-xs-center" flat style="background-color:#FAFAFA;" >
          <div class="headline font-weight-bold pt-3 pt-5 mt-5">설문 정보</div>
        </v-card>
      </v-flex>
      <v-flex xs9 class="border_style pa-4"> 
        <v-card height="180px" flat style="background-color:#FAFAFA;">
          <div class="title font-weight-bold pa-4">설문조사1 소개</div>
          <div class="title font-weight-bold pa-4">연령 50대 </div>
          <div class="title font-weight-bold pa-3">
            <v-icon large style="line-height:20px;">event</v-icon>
            <span class="ml-3 left_class">2019.02.18 ~ 2019.03.15</span>
            <div class="mr-5 pr-4" style="float:right;"><v-icon large style="line-height:20px;">person</v-icon><span class="ml-3">225 / 500 명</span></div>
          </div>
        </v-card>
      </v-flex>
      <v-layout row wrap justify-center>
        <v-flex xs8>
          <v-card 
          flat color="#FAFAFA" height="600px" 
          style="border-top:1px solid lightgrey;" 
          class="pa-5"
          >
            <v-layout 
            row wrap class="pb-5"
            justify-space-between 
            >
              <div class="headline font-weight-bold">Q1. 질문 1</div>
              <div class="headline font-weight-bold">
                <v-speed-dial v-model="fab" direction="left">
                  <template v-slot:activator>
                    <v-btn v-model="fab" color="#EEEEEE" depressed fab>
                      <v-icon size="40">bar_chart</v-icon>
                      <v-icon>close</v-icon>
                    </v-btn>
                  </template>
                  <v-btn fab color="white" @click="radarChart"><img src="/static/chart6.png" width="20"></v-btn>
                  <v-btn fab color="white" @click="heatChart"><img src="/static/chart5.png" width="20"></v-btn>
                  <v-btn fab color="white" @click="areaChart"><img src="/static/chart4.png" width="20"></v-btn>
                  <v-btn fab color="white" @click="lineChart"><img src="/static/chart3.png" width="20"></v-btn>
                  <v-btn fab color="white" @click="horizonChart"><img src="/static/chart2.png" width="20"></v-btn>
                  <v-btn fab color="white" @click="barChart"><img src="/static/chart1.png" width="20"></v-btn>
                </v-speed-dial>
              </div>
            </v-layout>
            <v-layout row wrap justify-center class="pa-4">
              <apexchart 
              width="750" height="400" 
              :type="chartOptions.chart.type" 
              :options="chartOptions" 
              :series="series"
              ></apexchart>
            </v-layout>
          </v-card>
        </v-flex>  
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: 'analysis',
    components:{
      'apexchart': VueApexCharts
    },
    data() {
      return {
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
            data: ''
          }
        ],
      }
    },
    created() {
      this.chartOptions.xaxis.categories = ['매우좋다', '좋다', '보통', '안좋다', '매우안좋다']
      this.series[0].data = [3,7,3,2,5]
    },
    methods: {
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
      radarChart() {
        this.chartOptions.chart.type = 'radar'
      }
    }
  }
</script>

<style scoped>
  .icon_color {
    color: grey;
    cursor: pointer;
		transition: color 0.3s ease;
  }
  .icon_color:hover {
    color: #42b883;
  }
  .left_class {
    margin-right: 200px; 
  }
  .border_style {
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
  }
  .border_style:nth-child(1) {
    border-right: 2px solid lightgrey;
  }
</style>
