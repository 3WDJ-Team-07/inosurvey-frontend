<template>
  <v-container grid-list-md class="pt-5 mt-5" >
    <v-flex sm9 class="center_card">
      <v-card>
        <v-card-title>
          <v-chip class="caption ml-3" color="info" dark>응답중..</v-chip>
          <v-layout text-sm-center>
            <v-flex xs5>
              <span class="headline">미세먼지 인식에 </span>
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
                  size="50" @click="dfdf">shopping_cart
                </v-icon>
                <span>설문판매</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-icon 
                  class="mr-5" slot="activator" 
                  size="50" @click="dfdf">insert_chart
                </v-icon>
                <span>분석</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-icon 
                  slot="activator" size="50" 
                  @click="dfdf">delete
                </v-icon>
                <span>삭제</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
      <v-flex xs12 right>
        <v-btn 
          large color="info"
          class="subheading
          font-weight-bold mt-4"
          @click="SET_IS_ADD_SURVEY(true)">
          새 설문 만들기
        </v-btn>
      </v-flex>
    </v-flex>
    <AddSurvey/>
  </v-container>
</template>

<script>
  import AddSurvey      from '@/components/survey/AddSurvey'
  import {mapMutations} from 'vuex'

  export default {
    name: 'mySurvey',
    components:{ AddSurvey },
    methods: {
      dfdf(){  
        console.log('df')
      },
      ...mapMutations(['SET_IS_ADD_SURVEY']),
    }
  }
</script>

<style scoped>
  .container_size{
    width: 70%;
  }
  .center_card{
    margin: 0 auto;
  }
</style>

