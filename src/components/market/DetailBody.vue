<template>
  <v-container fluid grid-list-md  class="font-weight-bold">
    <v-layout>
      <v-flex>
        <v-card flat height="28vh" fill-height>
          <div>
            <span class="headline">20-40대 직장인의 피로도를 알아봅니다....</span>
            <span class="grey--text ml-5">(주)대한건강</span>
          </div>
          <div>
            <i class="fas fa-user fa-lg ma-2"></i>
            <span>500명</span>
          </div>
          <div>
            <i class="fas fa-coins fa-lg ma-2"></i>
            <span>60이노</span>
          </div>
          <div>
            <i class="far fa-calendar-alt fa-lg ma-2"></i>
            <span>2019.01.01 ~ 2019.02.28</span>
          </div>
          <div>
            <v-chip color="info" text-color="white">연령대 - 20대, 30대, 40대</v-chip>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card flat height="38vh" fill-height>
          <div>
            <div class="title font-weight-bold">
              Q. 질문 1 
            </div>
            <div class="subheading font-weight-bold mt-3">
              <span class="mx-3">① 선택지</span>
              <span class="mx-3">② 선택지</span>
              <span class="mx-3">③ 선택지</span>
              <span class="mx-3">④ 선택지</span>
            </div>
          </div>
          <div class="mt-5">
            <div class="title font-weight-bold">
              Q. 질문 2 
            </div>
            <div class="mt-3">
              <v-textarea
                label="질문2 답변칸"
                value="생각을 자유롭게 서술하세요"
                outline disabled>
              </v-textarea>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
