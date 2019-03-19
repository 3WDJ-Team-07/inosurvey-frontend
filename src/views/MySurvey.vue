<template>
    <v-container grid-list-md class="pt-5 mt-5">
        <v-card class="pa-3">
            <v-card-title primary-title>
                <v-chip class="caption mr-4 mb-4" color="info" dark>응답중..</v-chip>
                <v-layout xs4>
                    <v-flex xs7>
                      <span class="headline font-weight-medium">미세먼지 인식에 관한 설문조사</span>
                      <div class="caption">작성일 : 2073</div>
                    </v-flex>
                    <v-flex xs4>
                      <div><v-icon>person</v-icon> description</div>
                      <div><v-icon>person</v-icon> description</div>
                    </v-flex>
                    <v-flex xs5>
                      <v-tooltip bottom>
                        <v-icon class="mr-4" slot="activator" size="70" @click="dfdf">home</v-icon>
                        <span>설문판매</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <v-icon class="mr-4" slot="activator" size="70">home</v-icon>
                        <span>분석</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <v-icon  slot="activator" size="70">home</v-icon>
                        <span>삭제</span>
                      </v-tooltip>
                    </v-flex>
                </v-layout>
            </v-card-title>
        </v-card>
      <v-btn large color="info" >새 설문 만들기</v-btn>
    </v-container>
</template>

<script>

  export default {
    components: {
    },
    methods: {
      input(){
        this.$router.replace("/SurveyRequest")
      },
      dfdf(){
        console.log('df')
      }
    },
  }
</script>

<style scoped>
  .boxStyle{
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
</style>
