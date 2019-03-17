<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <div class="display-1 pb-4">타겟 설정</div>
        </v-layout>
        <v-container fluid grid-list-md class="borderStyle pa-5" >
            <div class="title">1단계 대상설정</div>
            <v-layout row wrap class="pa-3" text-sm-center>
                <v-flex xs3>
                    <v-card class="mr-3" flat style="border:1px solid gray  ">
                    <v-card-text>성별</v-card-text>
                     <v-img src="/static/respond.png" class="center"></v-img>
                      <v-select
                        :items="items"
                        label="무관"
                        solo
                        hide-details
                      ></v-select>
                </v-card>
                </v-flex>
                <v-flex xs3>
                    <v-card class="mr-3" dark>
                    <v-card-text>연령</v-card-text>
                     <v-img src="/static/respond.png" class="center"></v-img>
                     <v-select
                        :items="items"
                        label="무관"
                        solo
                        hide-details
                      ></v-select>
                </v-card>
                </v-flex>
                <v-flex xs3>
                    <v-card class="mr-3" dark>
                    <v-card-text>직업</v-card-text>
                     <v-img src="/static/respond.png" class="center"></v-img>
                     <v-select
                        :items="items"
                        label="무관"
                        solo
                        hide-details
                      ></v-select>
                </v-card>
                </v-flex>
                <v-flex xs3>
                    <v-card class="mr-3" dark>
                    <v-card-text>소득</v-card-text>
                     <v-img src="/static/respond.png" class="center"></v-img>
                     <v-select
                        :items="items"
                        label="무관"
                        solo
                        hide-details
                      ></v-select>
                </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluid grid-list-md class="borderStyle pa-5" >
            <div class="title">2단계 응답수 선택</div>
            <v-layout row wrap class="pa-2">
                <v-flex >
                    <v-slider v-model="duration" min="0" max="1000" label="Duration" thumb-label></v-slider>
                    </v-flex>
            </v-layout>
        </v-container>
  </v-container>
</template>

<script>
// 빈값일때는 받지않기 구현하기
export default {
    data(){
        return{
            items: ['Foo', 'Bar', 'Fizz', 'Buzz']
        }
    }
}
</script>

<style scoped>
    .borderStyle{
        border: 1px solid lightgray;
    }
    .center {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    }
</style>
