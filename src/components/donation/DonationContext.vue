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
      <v-layout
        row wrap
        class="pa-4 pl-5 pr-5">
        <v-flex
          py-4 mb-4 xs4
          v-for="(card,index) in SortdonationBox" :key="index"
          v-if="donate_id == 2 || card.is_achieved == donate_id"
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
        donate_item: [
					{ name: '모든 모금함', value: 2},
					{ name: '미달성 모금함', value: 0},
					{ name: '달성 모금함', value: 1},
				],
      }
    },
    computed: {
      ...mapState([ 'donationBox' ]),
      SortdonationBox() {
        this.donationBox.sort((x,y) => { return y.id - x.id})
        return this.donationBox
      }
    },
    mounted() {
      this.FETCH_DONATION()
    },
    methods: {
      ...mapActions([
        'FETCH_DONATION'
      ]),
    }
  }
</script>
