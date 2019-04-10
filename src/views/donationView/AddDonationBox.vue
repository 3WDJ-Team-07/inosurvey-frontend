/* 기부페이지 모금함 상세 */

<template>
  <div>
    <v-container fluid grid-list-md pt-4 mt-5>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="#FAFAFA" height="10vh" flat >
            <div fluid grid-list-md>
                <div class="display-1 font-weight-bold pt-3 ml-5 xs-2">
                  모금함 등록
                </div>
            </div>
          </v-card>
          <v-divider/>
        </v-flex>
        <v-flex xs2 md2>
          <v-card height="80vh" max-width="300" class="pt-5 text-xs-center">
            <v-card flat height="12vh" fill-height>
              <div class="headline font-weight-bold">모금함 이름</div>
            </v-card>
            <v-card flat  height="28vh" fill-height>
              <div class="headline font-weight-bold">소개 이미지</div>
            </v-card>
            <v-card flat  height="22vh" fill-height>
              <div class="headline font-weight-bold">모금함 설명</div>
            </v-card>
            <v-card flat height="10vh" fill-height>
              <div class="headline font-weight-bold">모금함 정보</div>
            </v-card>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-card height="80vh" class="pa-4">
            <AddDonationBody/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>    
</template>
<script>
import AddDonationBody from '@/components/donation/AddDonationBody'

export default {
  name: 'adddonationbox',
  components: {
    AddDonationBody
  },
  methods:{
    add(){
      this.$router.replace("donation")
    }
  }
}
</script>

<style>
</style>
