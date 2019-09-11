<template>
  <v-container fluid grid-list-md style="margin:0px;padding:0px;">
    <span v-if="!loading">
      <targetAnalysis 
      :age = "age"
      :gender = "gender"
      :job = "job"
      />
      <v-layout row>
        <v-flex xs12>
          <div class="display-1 font-weight-bold pa-3">{{chartData.form[0].formData.title}}</div>
        </v-flex>
        <v-flex xs12>
          <div class="mt-3">
            <v-btn class="font-weight-bold" flat style="float:right;">エクセルファイルで変換</v-btn>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs3 class="border_style">
          <v-card height="180px" class="text-xs-center" flat style="background-color:#FAFAFA;" >
            <div class="headline font-weight-bold pt-3 pt-5 mt-5">アンケート情報</div>
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
            <div class="title font-weight-bold pa-4">{{chartData.form[0].formData.description}}</div>
            <div class="title font-weight-bold pa-1">
              <v-btn color="success" depressed round @click="SET_IS_TARGET(true)" large class="subheading">全体ターゲットの回答結果</v-btn>

                <span v-if="chartData.form[0].formData.target.gender !== 0">
                  <v-chip close large v-if="chartData.form[0].formData.target.gender == 1">男性</v-chip>
                  <v-chip close large v-if="chartData.form[0].formData.target.gender == 2">女性</v-chip>
                </span>
                <span v-else>
                  <v-chip close large>男女</v-chip>
                </span>
                <span v-if="chartData.form[0].formData.target.age.length !== 10">
                  <span v-for="(item, index) in chartData.form[0].formData.target.age" :key="item">
                    <v-chip close large>{{item}}代</v-chip>
                  </span>
                </span>
                <span v-else>
                  <v-chip close large>すべての年齢</v-chip>
                </span>
                <span v-if="chartData.form[0].formData.target.job.length !== 9">
                  <span v-for="(item, index) in chartData.form[0].formData.target.job" :key="index">
                    <v-chip close large>{{item.name}}</v-chip>
                  </span>
                </span>
                <span v-else>
                  <v-chip close large>すべての職業</v-chip>
                </span>

            </div>
            <div class="title font-weight-bold pa-3">
              <v-icon large style="line-height:20px;">event</v-icon>
              <span class="ml-3 left_class">{{started}} ~ {{closed}}</span>
              <div class="mr-5 pr-4" style="float:right;"><v-icon large style="line-height:20px;">person</v-icon>
              <span class="ml-3">{{chartData.form[0].formData.respondent_count}} / {{chartData.form[0].formData.respondent_number}} 人</span></div>
            </div>
          </v-card>
        </v-flex>
        <v-layout 
        column wrap align-center class="pa-4 subheading" 
        style="border-bottom: 1px solid lightgrey"
        >
          <div style="width:800px;">
            <v-data-table
            :items="chartData.question"
            :headers="headers"
            class="mt-2"
            prev-icon="keyboard_arrow_left"
            next-icon="keyboard_arrow_right"
            >
              <template v-slot:items="props">
                <td class="subheading text-xs-center pa-1" style="background-color:#FAFAFA;">{{ props.item[0].question_number-1 }}</td>
                <td class="subheading text-xs-center pa-1" style="background-color:#FAFAFA;">{{ props.item[0].question_title }}</td>
                <td class="subheading text-xs-center pa-1" style="background-color:#FAFAFA;">
                  <span v-if="props.item[0].type_id == 1">客観式</span>
                  <span v-else-if="props.item[0].type_id == 2">記述式</span>
                  <span v-else-if="props.item[0].type_id == 3">複数選択</span>
                  <span v-else-if="props.item[0].type_id == 4">星評価</span>
                  <span v-else-if="props.item[0].type_id == 5">コメント</span>
                  <span v-else-if="props.item[0].type_id == 6">画像タイプ</span>
                </td>
              </template>
            </v-data-table>
          </div>
        </v-layout>
      </v-layout>
      <Chart 
        v-for="(chartItem, index) in chartData.question" :key="index"
        :form_id = "form_id"
        :chartItem = "chartItem"
        :targetData = "chartData.form[0].formData.target"
        />
    </span>
    <Spinner v-else/>
  </v-container>
</template>

<script>
  import Chart            from './Chart'
  import { analysis }     from '@/api/index'
  import Spinner          from '@/components/Spinner'
  import { mapMutations } from 'vuex'
  import targetAnalysis   from '@/components/dialog/targetAnalysis'

  export default {
    props: ['form_id'],
    name:'analysis',
    components:{ Chart, Spinner, targetAnalysis },
    data() {
      return {
        age: [],
        gender: [],
        job: [],
        headers: [
          {
            text: '番号',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { 
            text: '質問内容',
            align: 'center',
            sortable: false,
            value: 'calories'
          },
          { 
            text: 'タイプ',
            align: 'center',
            sortable: false,
            value: 'calories'
          }
        ],
        loading: false,
        chartData: {
          form: [
            {
              formData: {
                title: 'a', 
                target: {
                  gender: 0
                }
              }
            },
            {
              percentage: [], 
            }
          ],
        },
      }
    },
    computed: {
      started() {
        let start = this.chartData.form[0].formData.created_at+""
        return start.slice(0,10)
      },
      closed() {
        let close = this.chartData.form[0].formData.closed_at+""
        return close.slice(0,10)
      },
      rate() {
        return (this.chartData.form[0].formData.respondent_count / this.chartData.form[0].formData.respondent_number*100).toFixed(1) + ' %'
      }
    },
    mounted() {
      this.fetchAnalysis()
    },
    methods: {
      ...mapMutations(['SET_IS_TARGET']),
      fetchAnalysis() {
        this.loading = true
        return analysis.Fetchanalysis({ form_id: this.form_id })
        .then(response => {
          this.chartData = response
          this.chartData.question.splice(0,1)
          this.age = response.form[1].percentage[0].age
          this.gender = response.form[1].percentage[1].gender
          this.job = response.form[1].percentage[2].job
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
