<template>
  <div>
    <v-container fluid grid-list-md pt-5 mt-5>
      <v-layout row wrap justify-center>
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
        <v-flex xs2 md2 class="text-xs-center">
          <v-card height="80vh" max-width="300" class="pt-5">
            <v-card flat height="15vh" fill-height>
              <div class="headline font-weight-bold">모금함 이름</div>
            </v-card>
            <v-card flat  height="30vh" fill-height>
              <div class="headline font-weight-bold">소개 이미지</div>
            </v-card>
            <v-card flat  height="20vh" fill-height>
              <div class="headline font-weight-bold">모금함 설명</div>
            </v-card>
            <v-card flat height="10vh" fill-height>
              <div class="headline font-weight-bold">모금함 정보</div>
            </v-card>
          </v-card>
        </v-flex>
        <v-flex xs8>
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
    components: { AddDonationBody },
    methods:{
      add(){
        this.$router.replace("donation")
      }
    }
  }
</script>