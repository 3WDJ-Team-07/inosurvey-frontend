<template>
  <v-container grid-list-md class="pt-5 mt-5">
    <div v-if="this.$route.name == 'mysurvey'">
      <div v-if="!this.$store.state.loading">
        <v-flex xs12 sm12 md12 xl10 class="center_card">
          <v-card 
          v-for="(form, index) in mySurveyForm" 
          :key="index" class="pa-2 mt-5">
            <v-card-title>
              <v-chip 
              v-if="form.is_completed == 0" 
              class="body-2 ml-3 pa-2" color="info" dark>응답중..</v-chip>
              <v-chip v-else class="subheading ml-3 pa-2 pr-4 pl-4" color="success" dark>완료</v-chip>
              <v-layout>
                <v-flex xs5 class="mt-3" style="margin-left:150px">
                  <span class="headline font-weight-bold">{{form.title}}</span>
                  <div class="grey--text pt-1">작성일 : {{form.started_at}}</div>
                </v-flex>
                <v-flex xs3>
                  <v-layout row wrap justify-start>
                    <div class="pb-2"><v-icon large style="line-height:20px;">person</v-icon><span class="ml-3">{{form.respondent_count}} / {{form.respondent_number}} 명</span></div>
                    <div class="pb-2 mt-4"><v-icon large style="line-height:20px;">event</v-icon><span class="ml-3">{{form.started_at}} ~ {{form.closed_at || '설문마감 미정'}}</span></div>
                  </v-layout>
                </v-flex>
                <v-flex xs5 style="margin-left:100px">
                  <v-tooltip bottom>
                    <v-icon
                      class="mr-5"
                      @click="surveySales(index,form.id)" 
                      slot="activator" 
                      size="65"
                    >
                      shopping_cart
                    </v-icon>
                    <span>설문판매</span>
                  </v-tooltip>
                  <router-link 
                    v-if="form.respondent_count == 0"
                    :to="{
                      name: 'analysis', 
                      params: { form_id: index }
                    }">
                    <v-tooltip bottom>
                      <v-icon 
                        class="mr-5" 
                        slot="activator" 
                        size="65">insert_chart
                      </v-icon>
                      <span>분석</span>
                    </v-tooltip>
                  </router-link>
                  <v-tooltip bottom v-else>
                      <v-icon 
                        class="mr-5" 
                        color="#BDBDBD"
                        slot="activator"
                        @click="noRedirectAnalysis"
                        size="65">insert_chart
                      </v-icon>
                    <span>분석</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <v-icon 
                      slot="activator" size="65" @click="surveyRemove"
                    >delete
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
        <div class="mt-4" style="margin-left:140px; margin-bottom:100px;">
          <v-pagination
            v-model="page"
            :length="5"
            prev-icon="keyboard_arrow_left"
            next-icon="keyboard_arrow_right"
          ></v-pagination>
        </div>
      </div>
      <Spinner v-else/>
    </div>
    <div v-if="this.$route.name == 'analysis'"><router-view/></div>
  </v-container>
</template>

<script>
  import AddSurvey                              from '@/components/survey/AddSurvey'
  import { mapState, mapMutations, mapActions } from 'vuex'
  import Spinner                                from '@/components/Spinner'
  import swal                                   from 'sweetalert'
  import { mySurvey }                           from '@/api/index'
  
  export default {
    props: ['form_id'],
    name: 'mysurvey',
    data() {
      return {
        page : 1,
        is_completed: 0
      }
    },
    components: { AddSurvey, Spinner },
    computed: {
      ...mapState([ 'mySurveyForm', 'userinfo' ]),
    },
    mounted() {
      // this.FETCH_MY_SURVEY_FORM_TEST()
      this.FETCH_MY_SURVEY_FORM({
        id: this.userinfo.id
      })
    },
    methods: {
      ...mapMutations(['SET_IS_ADD_SURVEY']),
      ...mapActions([
        'FETCH_MY_SURVEY_FORM_TEST',
        'FETCH_MY_SURVEY_FORM',
        'REMOVE_MY_SURVEY'
      ]),
      updateComplete(id) {
        return mySurvey.mySurveyComplete({ id: id })
        .then(response => {
          this.FETCH_MY_SURVEY_FORM({
            id: this.userinfo.id
          })
        }) 
      },
      surveySales(index,id) {
        if(this.mySurveyForm[index].is_completed == 0){
          if(this.mySurveyForm[index].respondent_number >= this.mySurveyForm[index].respondent_count || 
          this.mySurveyForm[index].closed_at >= this.mySurveyForm[index].started_at){
            swal(
              "조건이 충족되지 않았습니다",
              "이대로 판매를 하시겠습니까 ?",
            {
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then(response => {
              if(response) {
                this.updateComplete(id)
                setTimeout(() => {
                  swal(
                    "판매등록 완료",
                    "마켓에 설문상품이 등록되었습니다 !",
                    "success",
                    {button:"확인"}
                  );
                }, 2000);
                
              }
            })
          }else {
            console.log('판매하기')
          }
        }else {
          swal(
            "이미 등록된 상품입니다",
            "마켓에서 확인해보세요 !",
            "warning",
            {button:"확인"}
          );
        }
      },
      noRedirectAnalysis() {
        swal(
          "확인불가",
          "아무도 응답을 하지않았습니다",
          "error",
          {
          button:"확인"
          }
        );
      },
      surveyRemove() {
       swal({
          text: "정말 삭제하시겠어요?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
      },
    }
  }
</script>

<style scoped>
  .center_card {
    margin: 0 auto;
  }
  * {
    text-decoration: none;
  }
</style>