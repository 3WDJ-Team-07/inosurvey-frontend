<template>
  <div>
    <v-layout row wrap justify-space-around>
      <v-flex xs2>
        <myNav/>
      </v-flex>
      <v-flex xs9>
        <div class="display-2 pr-5 pl-5 pt-5 pb-4 mt-4 font-weight-bold">가용이노 7500 이노</div>
        <div class="pb-3 title font-weight-bold">총적립 이노 7500 이노</div>
        <div class="title font-weight-bold">기사용된 이노 7500 이노</div>
      </v-flex>
    <v-layout row wrap justify-end class="mr-5 pt-4 pr-4">
      <v-flex xs9>
      <v-data-table
      :headers="headers"
      :items="surveyInfo"
      :search="search"
      :pagination.sync="pagination"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="pa-3 subheading grey--text">{{ props.item.name }}</td>
        <td class="text-xs-center title font-weight-bold">{{ props.item.calories }}</td>
        <td class="text-xs-center font-weight-bold title">{{ props.item.fat }}</td>
      </template>
    </v-data-table>
    </v-flex>
    </v-layout>
    
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
            text: '날짜',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { 
            text: '내역', 
            align: 'center', 
            value:'calories'
          },
          { 
            text: '이노', 
            align: 'center', 
            value: 'fat'
          },
        ],
        surveyInfo: [
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 6.0,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 9.0,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 16.0,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 3.7,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 16.0,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 0.0,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 0.2,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 3.2,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
            fat: 25.0,
          },
          {
            name: '2019.03.21',
            calories: '설문조사 1 참여',
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