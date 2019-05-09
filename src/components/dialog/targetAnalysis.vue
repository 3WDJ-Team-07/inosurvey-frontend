/* 설문결제 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isTargetDialog" persistent fullscreen>
      <v-card class="pa-1 border_rounded">
        <v-layout column="" align-center class="pt-5 grey--text" style="margin-top:80px;">
          <div class="headline">전체 타겟 응답결과</div>
          <span>
            <v-btn color="red" dark small depressed @click="pieChart">pie</v-btn>
            <v-btn color="red" dark small depressed @click="donutChart">donut</v-btn>
          </span>
          
				</v-layout>
        <v-layout row wrap justify-center style="margin-left:100px;margin-top:80px;">
          <apexchart :type="chartSexOptions.responsive[0].options.chart.type" width=500 :options="chartSexOptions" :series="SexSeries"/>
          <apexchart :type="chartAgeOptions.responsive[0].options.chart.type" width=500 :options="chartAgeOptions" :series="AgeSeries"/>
          <apexchart :type="chartJobOptions.responsive[0].options.chart.type" width=530 :options="chartJobOptions" :series="JobSeries"/>
        </v-layout>
        
        <v-layout row wrap justify-center>
          <v-btn style="width:1000px;margin-left:10px;" block fixed bottom color="info" dark large @click="SET_IS_TARGET(false)">확인</v-btn>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    props: ['percentage'],
    components:{
      'apexchart': VueApexCharts,
    },
    name: 'targetanalysis',
    data() {
      return {
        SexSeries: [44, 22],
        chartSexOptions: {
          labels: ['남자', '여자'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                type: 'pie',
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        AgeSeries: [0, 0, 0, 40, 0, 60, 70, 80],
        chartAgeOptions: {
          labels: ['10대', '20대', '30대', '40대', '50대', '60대', '70대', '80대'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                type: 'pie',
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        JobSeries: [44, 55, 13, 43, 62, 0, 0, 0, 0],
        chartJobOptions: {
          labels: ['서비스/상담', '금융/무역', '연구/개발', 'IT/인터넷', '건설', '사무/경영', '의료', '교육', '생산/제조'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                type: 'pie',
                width: 300
              },
              legend: {
                position: 'bottom'
              },
            }
          }]
        }
      }
    },
    computed: {
      ...mapState(['isTargetDialog'])
    },
    methods: {
      ...mapMutations(['SET_IS_TARGET']),
      pieChart() {
        this.chartSexOptions.responsive[0].options.chart.type = 'pie'
        this.chartAgeOptions.responsive[0].options.chart.type = 'pie'
        this.chartJobOptions.responsive[0].options.chart.type = 'pie'
      },
      donutChart() {
        this.chartSexOptions.responsive[0].options.chart.type = 'donut'
        this.chartAgeOptions.responsive[0].options.chart.type = 'donut'
        this.chartJobOptions.responsive[0].options.chart.type = 'donut'
      },
    }
  }
</script>

<style scoped>
	* {
		overflow: hidden;
	}
</style>