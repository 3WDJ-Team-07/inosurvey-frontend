/* 설문요청페이지(타겟설정)
		1. 타겟지정 카드를 임시로 여러개 지정함 (후에는 반복문을 통해 리펙토링 필요)
		2. Duration 값 지정
*/

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
              :items="items" label="무관"
              solo hide-details>
						</v-select>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card style="border:1px solid gray">
						<v-card-text>연령</v-card-text>
						<v-img src="/static/write.png" class="img_center"></v-img>
						<v-select
              :items="items" label="무관"
              solo hide-details>
						</v-select>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card style="border:1px solid gray">
            <v-card-text>직업</v-card-text>
            <v-img src="/static/market.png" class="img_center"></v-img>
            <v-select
              :items="items" label="무관"
              solo  hide-details>
						</v-select>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card class="border_style pa-5">
      <div> <v-chip class="title ml-3 pa-1 mb-2" dark>2단계</v-chip><span class="title font-weight-bold"> 응답수 선택</span></div>
      <v-layout row wrap class="pa-2">
        <v-flex pa-5>
          <v-range-slider
            :tick-labels="age"
            always-dirty min="0" max="7"
            v-model="ageModel"
            thumb-label thumb-size="30" ticks="always">
            <template v-slot:thumb-label="props">
              <span>
                {{ season(props.value) }}
              </span>
            </template>
          </v-range-slider>
        </v-flex>
      </v-layout>
      <v-btn color="success" @click="asd">text</v-btn>
    </v-card>
  </v-container>
</template>

<script>
	export default {
		data() {
			return{
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        age: ['10','20','30','40','50','60','70','80'],  // 연령대 별로 나타내기
        ageModel: ['0','7']  // 연령대 배열간 숫자
			}
    },
    methods: {
      season (val) {
        return this.age[val]
      },
      asd(){
        console.log(this.age[this.ageModel[0]],this.age[this.ageModel[1]])  // 
      },
    }
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
