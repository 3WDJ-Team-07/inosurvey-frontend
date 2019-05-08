<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="display-1 pb-4">타겟 설정</div>
    </v-layout>
    <v-card class="border_style pa-5" >
      <div> <v-chip class="title ml-3 pa-1 mb-2" dark>1단계</v-chip><span class="title font-weight-bold"> 대상설정</span></div>
      <v-layout row wrap class="pa-3" text-sm-center>
        <v-flex xs4>
          <v-card style="border:1px solid gray">
            <v-card-text>성별</v-card-text>
            <v-img src="/static/market.png" class="img_center"></v-img>
            <v-select
              :items="gender_item"
              v-model="gender"
              label="무관"
              item-text="name"
              item-value="value"
              append-icon="arrow_drop_down"
              solo hide-details>
						</v-select>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card style="border:1px solid gray">
						<v-card-text>연령</v-card-text>
						<v-img src="/static/write.png" class="img_center"></v-img>
						<v-select
              :items="age_item"
              v-model="age"
              label="무관"
              item-text="name"
              multiple
              color="info"
              item-value="value"
              append-icon="arrow_drop_down"
              solo hide-details>
						</v-select>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card style="border:1px solid gray">
            <v-card-text>직업</v-card-text>
            <v-img src="/static/market.png" class="img_center"></v-img>
            <v-select
              :items="job_item"
              v-model="job"
              label="무관"
              item-text="name"
              item-value="value"
              multiple
              color="info"
              append-icon="arrow_drop_down"
              solo  hide-details>
						</v-select>
          </v-card>
        </v-flex>
        <!-- <v-flex xs3>
          <v-card style="border:1px solid gray">
            <v-card-text>직업</v-card-text>
            <v-img src="/static/market.png" class="img_center"></v-img>
            <v-select
              :items="job_item"
              v-model="job"
              label="무관"
              item-text="name"
              item-value="value"
              multiple
              color="info"
              append-icon="arrow_drop_down"
              solo  hide-details>
						</v-select>
          </v-card>
        </v-flex> -->
      </v-layout>
    </v-card>
    <v-card class="border_style pl-5 pr-5">
      <div> <v-chip class="title ml-3 pa-1 mb-2" dark>2단계</v-chip><span class="title font-weight-bold"> 응답수 선택</span></div>
      <v-layout row wrap class="pa-2">
        <v-flex pl-5 pr-5 pb-3 pt-5>
          <v-slider
            v-model="responseNumber"
            always-dirty
            thumb-label="always" 
            hint="응답수는 비용에 비례합니다."
            class="title"
            max="1000"
            min="1"
            tick-size="20"
            thumb-size="50">
          </v-slider>
          <v-text-field style="float:right;width:80px;" v-model="responseNumber"></v-text-field>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card class="border_style pl-5 pr-5 pb-5">
      <v-layout row wrap>
        <v-flex xs6>
          <div><v-chip class="title ml-3 pa-1 mb-2" dark>3단계</v-chip><span class="title font-weight-bold"> 마감일 선택</span></div>
        </v-flex>
        <v-flex xs6>
          <div><v-chip class="title ml-3 pa-1 mb-2" dark>4단계</v-chip><span class="title font-weight-bold"> 판매여부 선택</span></div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs6 pl-5 pr-5 pt-5>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="250"
            :nudge-top="250"
            lazy
            offset-y
            min-width="300px"
          >
            <template v-slot:activator>
              <v-text-field
                v-model="date"
                label="Deadline"
                prepend-icon="event"
                readonly
              ></v-text-field>
            </template>
            <v-date-picker
              landscape
              ref="picker"
              v-model="date"
              max="2024-12-31"
              :min="todayData"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs6 pl-5 pr-5 pt-5>
          <div v-if="isToggled == 1">
            <v-btn class="subheading" color="primary" block round large :class="{toggled: isToggled}" @click="isToggled = 0">
            <span>판매합니다.</span>
            </v-btn>
          </div>
          <div v-if="isToggled == 0">
            <v-btn class="subheading" depressed color="grey lighten-3" block round large :class="{toggled: isToggled}" @click="isToggled = 1">
            <span>판매하지 않습니다.</span>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
    <pre>{{form}}</pre>
  </v-container>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import {EventBus}               from '@/utils/bus'

	export default {
		data() {
			return{
        isToggled: 0,
				gender: 0,  // 성별
				age: 0,  // 연령대
				job: 0,  // 직업
        gender_item: [
          {name: '무관', value: 0},
          {name: '남성', value: 1},
          {name: '여성', value: 2}
        ],
        // age_item: [
        //   { name: '1950년도생', value: 1950},
				// 	{ name: '1960년도생', value: 1960},
				// 	{ name: '1970년도생', value: 1970},
				// 	{ name: '1980년도생', value: 1980},
				// 	{ name: '1990년도생', value: 1990},
				// 	{ name: '2000년도생', value: 2000},
				// 	{ name: '2010년도생', value: 2010}
        // ],
        age_item: [
          { name: '10대', value: 10},
					{ name: '20대', value: 20},
					{ name: '30대', value: 30},
					{ name: '40대', value: 40},
					{ name: '50대', value: 50},
					{ name: '60대', value: 60},
					{ name: '70대', value: 70}
        ],
        job_item: [
					{ name: '서비스/상담', value: 1},
					{ name: '금융/무역', value: 2},
					{ name: '연구/개발', value: 3},
					{ name: 'IT/인터넷', value: 4},
					{ name: '건설', value: 5},
					{ name: '사무/경영', value: 6},
					{ name: '의료', value: 7},
					{ name: '교육', value: 8},
					{ name: '생산/제조', value: 9},
				],
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        responseNumber: 100,  // 응답수,
        date: null,
        menu: false
			}
    },
    watch: {
      menu(val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    computed: {
      ...mapState(['form']),
      todayData(){
        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth()+1
        var yyyy = today.getFullYear()
        if(dd<10) dd='0'+dd
        if(mm<10) mm='0'+mm
        return yyyy+'-'+mm+'-'+dd
      }
    },
    updated() {
      EventBus.$emit('responseNumber',this.responseNumber)
      EventBus.$emit('gender',this.gender)
      EventBus.$emit('age',this.age)
      EventBus.$emit('job',this.job)
      this.INPUT_SURVEY_SALE_BOOLEAN({
        is_sale: this.isToggled
      })
    },
    methods: {
      ...mapMutations(['INPUT_SURVEY_DEADLINE', 'INPUT_SURVEY_SALE_BOOLEAN']),
      save (date) {
        this.$refs.menu.save(date)
        this.INPUT_SURVEY_DEADLINE({
          closed_at: this.date
        })
      }
    },
	}
</script>

<style scoped>
  .border_style{
    border: 1px solid lightgray;
  }
  .img_center {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>
