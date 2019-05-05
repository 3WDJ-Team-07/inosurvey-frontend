<template>
  <v-container fluid grid-list-md style="margin:0px;padding:0px;">
    <span v-if="!loading">
      <v-layout row>
        <v-flex xs12>
          <div class="display-1 font-weight-bold pa-3">{{chartData.form[0].title}}</div>
        </v-flex>
        <v-flex xs12>
          <div class="mt-3">
            <v-btn class="font-weight-bold" flat style="float:right;">PDF파일 변환</v-btn>
            <v-btn class="font-weight-bold" flat style="float:right;">엑셀파일 변환</v-btn>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs3 class="border_style">
          <v-card height="180px" class="text-xs-center" flat style="background-color:#FAFAFA;" >
            <div class="headline font-weight-bold pt-3 pt-5 mt-5">설문 정보</div>
          </v-card>
        </v-flex>
        <v-flex xs9 class="border_style pa-4"> 
          <v-card height="180px" flat style="background-color:#FAFAFA;">
            <v-progress-circular
                style="float:right; margin-right:100px;"
                :rotate="360"
                :size="120"
                :width="20"
                :value="rate"
                color="teal"
              >
                {{rate}}
              </v-progress-circular>
            <div class="title font-weight-bold pa-4">{{chartData.form[0].description}}</div>
            <div class="title font-weight-bold pa-4">
              연령대 : <span v-for="(item, index) in chartData.form[0].target.age" :key="index">
                {{item}}대&nbsp;
              </span>
            </div>
            <div class="title font-weight-bold pa-3">
              <v-icon large style="line-height:20px;">event</v-icon>
              <span class="ml-3 left_class">{{started}} ~ {{closed}}</span>
              <div class="mr-5 pr-4" style="float:right;"><v-icon large style="line-height:20px;">person</v-icon>
              <span class="ml-3">{{chartData.form[0].respondent_count}} / {{chartData.form[0].respondent_number}} 명</span></div>
            </div>
          </v-card>
        </v-flex>
        <v-layout 
        row wrap justify-center class="pa-4" 
        style="border-bottom: 1px solid lightgrey"
        >
          <div>설문분석내용</div>
        </v-layout>
      </v-layout>
      <Chart 
        v-for="(chartItem, index) in chartData.question" :key="index"
        :form_id = "form_id"
        :chartItem = "chartItem"
        />
    </span>
    <Spinner v-else/>
  </v-container>
</template>

<script>
  import Chart         from './Chart'
  import { analysis }  from '@/api/index'
  import Spinner       from '@/components/Spinner'

  export default {
    props: ['form_id'],
    name:'analysis',
    components:{ Chart, Spinner },
    data() {
      return {
        loading: false,
        chartData: {},
      }
    },
    computed: {
      started() {
        return this.chartData.form[0].started_at.slice(0,10)
      },
      closed() {
        return this.chartData.form[0].closed_at.slice(0,10)
      },
      rate() {
        return (this.chartData.form[0].respondent_count / this.chartData.form[0].respondent_number*100).toFixed(1) + ' %'
      }
    },
    mounted() {
      this.fetchAnalysis()
    },
    methods: {
      fetchAnalysis() {
        this.loading = true
        return analysis.Fetchanalysis({ form_id: this.form_id })
        .then(response => {
          this.chartData = response
          console.log(this.chartData)
        this.loading = false
        })
      },
    },
  }
</script>

<style scoped>
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
