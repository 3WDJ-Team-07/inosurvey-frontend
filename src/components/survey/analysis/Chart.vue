<template>
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
          <div class="headline font-weight-bold" style="border-top:7px solid #42A5F5; padding-top:10px;">Q1. 질문 1</div>
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
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
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
    computed: {
      // rate() {
      //   return (this.donationItems.current_amount / this.donationItems.target_amount*100).toFixed(1) + ' %'
      // }
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
    },
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
</style>
