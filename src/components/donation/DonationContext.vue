/* 기부 페이지 (수정필) */

<template>
  <span>
    <v-container grid-list-xl  class="mt-2" v-if="!this.$store.state.loading">
      <v-layout row wrap class="pr-2" style="margin-right:50px;" justify-end>
        <v-flex xs3>
          <v-select
            v-model="donate_id"
            :items="donate_item"
            label="무관"
            item-text="name"
            item-value="value"
            color="info"
            append-icon="arrow_drop_down"
            solo hide-details>
					</v-select>
        </v-flex>
      </v-layout>
      <!-- <v-layout>
        <v-flex v-for="(category, index) in category_item" :key="index">
          <v-layout justify-space-around>
            <v-btn fab large color="info" :category_id="category.id" v-model="category_id">
              {{category.name}}
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout> -->
      <v-layout
        row wrap
        class="pa-4 pl-5 pr-5">
        <v-flex
          py-4 mb-4 xs4
          v-for="(card,index) in SortdonationBox" :key="index"
          v-if="donate_id == 2 || card.is_achieved == donate_id || card.category == category_id"
        >
            <router-link
            :to="{
              name: 'donationdetail',
              params: { donation_id: card.id }
            }">
              <DonationCard
              :card = "card"
              :index = "index"/>
            </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <Spinner2 v-else/>
  </span>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import DonationCard             from '@/components/donation/DonationCard'
  import Spinner2                 from '@/components/Spinner2'

  export default {
    name: 'DonationContext',
    components: { DonationCard, Spinner2 },
    data() {
      return {
        donate_id: 2,
        category_id:'',
        donate_item: [
					{ name: '모든 모금함', value: 2},
					{ name: '미달성 모금함', value: 0},
					{ name: '달성 모금함', value: 1},
        ],
        category_item: [
          {name: '전체', id: 0},
          {name: '아동 / 청소년', id: 1},
          {name: '어르신', id: 2},
          {name: '장애인', id: 3},
          {name: '다문화', id: 4},
          {name: '지구촌', id: 5},
          {name: '가족 / 여성', id: 6},
          {name: '시민사회', id: 7},
          {name: '동물', id: 8},
          {name: '환경', id: 9},
          {name: '기타', id: 10}
        ],
      }
    },
    computed: {
      ...mapState([ 'donationBox' ]),
      SortdonationBox() {
        this.donationBox.sort((x,y) => { return y.id - x.id})
        return this.donationBox
      },
      
    },
    mounted() {
      this.FETCH_DONATION()
    },
    methods: {
      ...mapActions([
        'FETCH_DONATION'
      ])
    }
  }
</script>
