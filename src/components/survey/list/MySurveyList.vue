/* 내 설문보기 페이지 */

<template>
  <v-container grid-list-md class="pt-5 mt-5" text-sm-right>
    <v-card >
      <v-card-title>
        <v-chip class="caption mr-4 mb-4" color="info" dark>응답중..</v-chip>
        <v-layout>
          <v-flex xs5>
            <span class="headline">미세먼지 인식에 관한 설문조사</span>
            <div class="caption">작성일 : 2073</div>
          </v-flex>
          <v-flex xs3>
            <div><v-icon>person</v-icon>description</div>
            <div><v-icon>person</v-icon>description</div>
          </v-flex>
          <v-flex xs5>
            <v-tooltip bottom>
              <v-icon 
                class="mr-5" slot="activator" 
                size="70" @click="dfdf">shopping_cart
              </v-icon>
              <span>설문판매</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-icon 
                class="mr-5" slot="activator" 
                size="70" @click="dfdf">home
              </v-icon>
              <span>분석</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-icon 
                slot="activator" size="70" 
                @click="dfdf">home
              </v-icon>
              <span>삭제</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-card-title>
    </v-card>
    <v-btn 
      large color="info" 
      class="subheading 
      font-weight-bold mt-4">
      새 설문 만들기
    </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'mySurvey',
    methods: {
      dfdf(){  // 툴팁 적용한 v-icon을 클릭했을때 동작
        console.log('df')
      }
    }
  }
</script>

