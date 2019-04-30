<template>
  <v-container fluid grid-list-md  class="font-weight-bold">
    <v-layout>
      <v-flex>
        <v-form @submit.prevent="adddonation" id="add-donation-form" enctype="multipart/form-data">
          <v-card flat height="15vh" fill-height>
            <v-layout row wrap>
              <v-flex xs5>
                <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :counter="30"
                  label="모금함이름"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-card>
          <v-card flat height="30vh" fill-height>
            <div>
              <!-- <input type="file" id="file" ref="file" @change="fileUpload()"> -->
              <v-avatar size="250px" tile class="grey lighten-3 ml-3">
              <span>사진을 넣어주세요</span>
            </v-avatar>
            </div>
          </v-card>
          <v-card flat  height="20vh" fill-height>
            <v-flex xs5>
              <v-textarea v-model="content" solo label="모금함에 대해 설명해주세요">
              </v-textarea>
            </v-flex>
          </v-card>
          <v-card flat height="5vh" fill-height>
            <v-layout>
              <v-flex xs2>
                <v-text-field v-model="closed_at" label="모금마감일" required></v-text-field>
                <!-- <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="250"
                  :nudge-top="250"
                  lazy
                  offset-y
                  min-width="300px"
                >
                  <template v-slot:activator>
                    <v-text-field
                      v-model="date"
                      label="Deadline"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    landscape
                    ref="picker"
                    v-model="date"
                    max="2024-12-31"
                    :min="todayData"
                    @change="save"
                  ></v-date-picker>
                </v-menu> -->
              </v-flex>
              <v-flex xs2 class="ml-4 mr-4">
                <v-text-field v-model="target_amount" label="목표 모금액" required></v-text-field>
              </v-flex>
              <v-flex xs3 class="mt-4">이노</v-flex>
              <v-flex xs7>
                <v-btn large color="info" block type="submit" class="pt-4 pb-5 title font-weight-bold" form="add-donation-form">등록하기</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title:'',
        titleRules: [
          //모금함 이름 규격
          v => !!v || '모금함 이름을 작성해주세요.',
          v => v.length <= 30 || '모금함 이름은 30자 이내여야합니다.'
        ],
        file:'',
        content:'',
        closed_at:'',
        target_amount:''
      }
    },
    methods: {
      fileUpload() {
        this.file = this.$refs.file.files[0]
      },
      adddonation() {
        let box = new FormData()
        box.append('title',this.title)
        box.append('file',this.file)
        box.append('content',this.content)
        box.append('closed_at',this.closed_at)
        box.append('target_amount',this.target_amount)
        this.$store.dispatch('ADDDONATION',box)
        this.$router.push({name:'donation'})
      },
    },
  }
</script>

<style>
  .image {
    width: 15%;
    margin-bottom: 10px;
  }
</style>
