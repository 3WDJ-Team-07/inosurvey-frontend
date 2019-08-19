/* 기부 페이지 (수정필) */

<template>
  <span>
    <v-container grid-list-sm fluid class="mt-2" v-if="!this.$store.state.loading">
      <v-layout row wrap justify-end class="mr-2">
          <div v-for="(category, index) in category_item" :key="index">
            <v-btn depressed fab large>
              <img :src="`/static/category/${category.id}.png`" width="30"/>
            </v-btn>
          <v-layout justify-space-around>
            <div class="caption font-weight-bold grey--text">
            {{category.name}}
          </div>
          </v-layout>
        </div>
      </v-layout>
      <v-layout row wrap justify-end class="mt-4 mr-3">
        <v-flex xs3>
          <v-select
            v-model="donate_id"
            :items="donate_item"
            label="無関係"
            item-text="name"
            item-value="value"
            color="info"
            append-icon="arrow_drop_down"
            solo hide-details>
					</v-select>
        </v-flex>
      </v-layout>
      <v-layout
        row wrap
        class="pa-4 pl-5 pr-5">
        <v-flex
          py-4 mb-4 xs4
          v-for="(card,index) in SortdonationBox" :key="index"
          v-if="donate_id == 2 || card.is_achieved == donate_id && category_id==card.category[0].id"
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
					{ name: 'すべて', value: 2},
					{ name: '未達成', value: 0},
					{ name: '達成', value: 1},
        ],
        category_item: [
          {name: 'すべて', id: 0},
          {name: '児童 / 青少年', id: 1},
          {name: '老人', id: 2},
          {name: '障碍者', id: 3},
          {name: 'グローバル', id: 4},
          {name: '家族 / 女性', id: 5},
          {name: '市民社会', id: 6},
          {name: '動植物', id: 7},
          {name: 'その他', id: 8}
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

