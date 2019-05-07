<template>
  <span>
    <div v-show="!loading">
      <v-layout row wrap justify-space-around>
        <v-flex xs2>
          <myNav/>
        </v-flex>
      <v-flex xs9>
        <v-data-table
        :headers="headers"
        :items="surveyInfo"
        :search="search"
        :pagination.sync="pagination"
        class="elevation-1 click_event"
      >
        <template v-slot:items="props">
          <td class="pa-5 title font-weight-bold">{{ props.item.name }}</td>
          <td class="text-xs-center grey--text subheading">
            <div>
              <v-icon>person</v-icon>
              200명
              <v-chip color="light-blue lighten-1" class="ml-3 mb-2 pr-4 pl-4" dark>직종: IT</v-chip>
            </div>
            <div>
              <v-icon>event</v-icon>
              {{ props.item.calories }} ~ {{ props.item.calories }}
            </div>
          </td>
        </template>
      </v-data-table>
      </v-flex>
      </v-layout>
      <div class="text-xs-center pt-5">
        <v-pagination 
        v-model="pagination.page" 
        :length="pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </div>
    <Spinner v-show="loading"/>
  </span>
</template>

<script>
  import myNav      from './myNav'
  import { mypage } from '@/api/index'
  import { mapState }  from 'vuex'
  import Spinner                     from '@/components/Spinner'

  export default {
    components:{ myNav, Spinner },
    data () {
      return {
        loading: false,
        buyInfo: [],
        search: '',
        pagination: {},
        headers: [
          {
            text: '설문조사 제목',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { 
            text: '설문정보', 
            align: 'center', 
            value:'calories'
          },
        ],
        surveyInfo: [
          {
            name: '설문조사 Frozen Yogurt',
            calories: '2019.03.22',
          },
          {
            name: '설문조사 Ice cream sandwich',
            calories: '2019.03.21',
          },
          {
            name: '설문조사 Eclair',
            calories: '2019.03.20',
          },
          {
            name: '설문조사 Cupcake',
            calories: '2019.03.19',
          },
          {
            name: '설문조사 Gingerbread',
            calories: '2019.03.18',
          },
          {
            name: '설문조사 Jelly bean',
            calories: '2019.03.17',
          },
          {
            name: '설문조사 Lollipop',
            calories: '2019.03.16',
          },
          {
            name: '설문조사 Honeycomb',
            calories: '2019.03.15',
          },
          {
            name: '설문조사 Donut',
            calories: '2019.03.14',
          },
          {
            name: '설문조사 KitKat',
            calories: '2019.03.13',
          }
        ]
      }
    },
    mounted() {
      this.FetchSurveyBuy()
    },
    computed: {
      ...mapState([ 'userinfo' ]),
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    methods: {
      FetchSurveyBuy() {
        this.loading = true
        return mypage.FetchSurveyBuy({ id: this.userinfo.id })
        .then(response => {
          console.log(response)
          // this.buyInfo = response.list
          this.loading = false
        })
      }
    },
  }
</script>

<style scoped>
  .click_event {
    cursor: pointer;
  }
</style>