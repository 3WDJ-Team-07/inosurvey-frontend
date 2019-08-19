/* 설문결제 모달창 */

<template>
  <v-layout row justify-center> 
    <v-dialog v-model="isTargetDialog" persistent fullscreen style="z-index:10000;">
      <v-card class="pa-1 border_rounded">
        <v-layout column align-center class="pt-2 grey--text" style="margin-top:60px;">
          <div class="display-1 mb-4">ターゲット別の回答結果</div>
          <span>
            <v-btn color="red" dark large fab depressed @click="pieChart">pie</v-btn>
            <v-btn color="red" dark large fab depressed @click="donutChart">donut</v-btn>
          </span>
				</v-layout>
        <v-layout row wrap justify-center style="margin-left:100px;margin-top:80px;">
          <apexchart
            :type="chartSexOptions.responsive[0].options.chart.type" width=550 :options="chartSexOptions" :series="SexSeries"/>
          <apexchart 
            :type="chartAgeOptions.responsive[0].options.chart.type" width=550 :options="chartAgeOptions" :series="AgeSeries"/>
          <apexchart 
            :type="chartJobOptions.responsive[0].options.chart.type" width=580 :options="chartJobOptions" :series="JobSeries"/>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-btn 
          style="width:1000px;margin-left:10px; margin-bottom:60px;" 
          block absolute bottom color="info" dark 
          large @click="SET_IS_TARGET(false)">OK</v-btn>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    props: ['age', 'gender', 'job'],
    components:{
      'apexchart': VueApexCharts,
    },
    name: 'targetanalysis',
    data() {
      return {
        a: [0, 0],
        b: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        c: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        SexSeries: [44, 22],
        chartSexOptions: {
          labels: ['男性', '女性'],
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
        AgeSeries: [0, 0, 0, 40, 0, 60, 70, 80, 23, 23],
        chartAgeOptions: {
          labels: ['10代', '20代', '30代', '40代', '50代', '60代', '70代', '80代', '90代', '100代'],
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
          labels: ['サービス / 相談', '金融 / 貿易', '研究 / 開発', 'IT / インターネット', '建設', '事務 / 経営', '医療', '教育', '生産 / 製造'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                type: 'pie',
                width: 100
              },
              legend: {
                position: 'bottom'
              },
            }
          }]
        }
      }
    },
    mounted() {
      if(this.age == this.b){
        this.AgeSeries = [0, 0, 0, 40, 0, 60, 70, 80, 23, 23]
      }else{
        this.AgeSeries = this.age
      }
      if(this.gender == this.a){
        this.SexSeries = [22, 51]
      }else{
        this.SexSeries = this.gender
      }
      if(this.job == this.c){
        this.JobSeries = [44, 55, 13, 43, 62, 0, 0, 0, 0]
      }else{
        this.JobSeries = this.job
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