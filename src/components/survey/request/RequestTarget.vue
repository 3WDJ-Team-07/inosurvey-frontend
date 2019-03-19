/* 설문요청페이지(타겟설정)
		1. 타겟지정 카드를 임시로 여러개 지정함 (후에는 반복문을 통해 리펙토링 필요)
		2. Duration 값 지정
*/

<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="display-1 pb-4">타겟 설정</div>
    </v-layout>
    <v-container fluid grid-list-md class="border_style pa-5" >
      <div class="title">1단계 대상설정</div>
      <v-layout row wrap class="pa-3" text-sm-center>
        <v-flex xs3>
          <v-card class="mr-3" flat style="border:1px solid gray">
            <v-card-text>성별</v-card-text>
            <v-img src="/static/respond.png" class="img_center"></v-img>
            <v-select
              :items="items" label="무관"
              solo hide-details>
						</v-select>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card class="mr-3" dark>
						<v-card-text>연령</v-card-text>
						<v-img src="/static/respond.png" class="img_center"></v-img>
						<v-select
              :items="items" label="무관"
              solo hide-details>
						</v-select>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card class="mr-3" dark>
            <v-card-text>직업</v-card-text>
            <v-img src="/static/respond.png" class="img_center"></v-img>
            <v-select
              :items="items" label="무관"
              solo  hide-details>
						</v-select>
          </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card class="mr-3" dark>
						<v-card-text>소득</v-card-text>
						<v-img src="/static/respond.png" class="img_center"></v-img>
						<v-select
							:items="items" label="무관"
              solo hide-details>
						</v-select>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md class="border_style pa-5">
      <div class="title">2단계 응답수 선택</div>
      <v-layout row wrap class="pa-2">
        <v-flex>
          <v-slider min="0" max="1000" label="Duration" thumb-label></v-slider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
	export default {
		data() {
			return{
				items: ['Foo', 'Bar', 'Fizz', 'Buzz']
			}
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
