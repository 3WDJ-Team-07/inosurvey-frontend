<template>
  <div>
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
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="pa-5 title font-weight-bold">{{ props.item.name }}</td>
        <td class="text-xs-center grey--text subheading">{{ props.item.calories }}</td>
        <td class="text-xs-center font-weight-bold title">{{ props.item.fat }}</td>
      </template>
    </v-data-table>
    </v-flex>
    </v-layout>
   <div class="text-xs-center pt-5">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </div>
</template>

<script>
  import myNav from './myNav'

  export default {
    components:{ myNav },
    data () {
      return {
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
            text: '응답일', 
            align: 'center', 
            value:'calories'
          },
          { 
            text: '획득 이노', 
            align: 'center', 
            value: 'fat'
          },
        ],
        surveyInfo: [
          {
            name: '설문조사 Frozen Yogurt',
            calories: '2019.03.22',
            fat: 6.0,
          },
          {
            name: '설문조사 Ice cream sandwich',
            calories: '2019.03.21',
            fat: 9.0,
          },
          {
            name: '설문조사 Eclair',
            calories: '2019.03.20',
            fat: 16.0,
          },
          {
            name: '설문조사 Cupcake',
            calories: '2019.03.19',
            fat: 3.7,
          },
          {
            name: '설문조사 Gingerbread',
            calories: '2019.03.18',
            fat: 16.0,
          },
          {
            name: '설문조사 Jelly bean',
            calories: '2019.03.17',
            fat: 0.0,
          },
          {
            name: '설문조사 Lollipop',
            calories: '2019.03.16',
            fat: 0.2,
          },
          {
            name: '설문조사 Honeycomb',
            calories: '2019.03.15',
            fat: 3.2,
          },
          {
            name: '설문조사 Donut',
            calories: '2019.03.14',
            fat: 25.0,
          },
          {
            name: '설문조사 KitKat',
            calories: '2019.03.13',
            fat: 26.0,
          }
        ]
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  }
</script>