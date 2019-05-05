<template lang="html">
  <span>
    <div v-show="!loading">
      <v-layout row wrap justify-space-around>
        <v-flex xs2>
          <myNav/>
        </v-flex>
        <v-flex xs9>
          <div
          class="display-2 font-weight-bold"
          style="margin-top:150px; padding:30px;"
          >가용이노 
            <span>{{inocoin.current_ino}}</span> 이노</div>
          <div class="pb-3 title font-weight-bold">총적립 이노 {{inocoin.total_ino}} 이노</div>
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
            <td class="pa-3 subheading grey--text">{{ props.item.title }} {{props.item.method}}</td>
            <td class="pa-3 subheading grey--text">{{ props.item.date }}</td>
            <td class="text-xs-center title font-weight-bold">{{ props.item.content }}</td>
            <td class="text-xs-center font-weight-bold title">{{ props.item.sign }} {{ props.item.price }}</td>
          </template>
        </v-data-table>
        </v-flex>
        </v-layout>
      </v-layout>
      <div class="text-xs-center pt-5">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </div>
    <Spinner v-show="loading"/>
  </span>
</template>

<script>
  import myNav                       from './myNav'
  import { userInformation, mypage } from '@/api/index'
  import { mapState }                from 'vuex'
  import Spinner                     from '@/components/Spinner'

  export default {
    name: 'wallethistory',
    components:{ myNav, Spinner },
    data () {
      return {
        loading: false,
        search: '',
        inocoin:{},
        pagination: {},
        headers: [
          {
            text: '내용',
            align: 'center',
            sortable: false,
            value: 'state'
          },
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
        surveyInfo: []
      }
    },
    computed: {
      ...mapState(['userinfo']),
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    mounted() {
      this.fetchCoin()
      this.coinHistory()
    },
    methods: {
      fetchCoin() {
        return userInformation.userCoin({ id: this.userinfo.id })
        .then(response => {
          this.inocoin = response
        })
      },
      coinHistory() {
        this.loading = true
        return mypage.FetchCoinHistory({ id: this.userinfo.id })
        .then(response => {
          this.surveyInfo = response.list
          this.loading = false
        })
      }
    },
  }
</script>