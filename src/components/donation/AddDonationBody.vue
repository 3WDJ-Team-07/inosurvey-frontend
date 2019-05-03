<template>
  <v-container fluid grid-list-md  class="font-weight-bold">
    <v-layout>
      <v-flex>
        <v-form @submit.prevent="adddonation"
        id="add-donation-form"
        enctype="multipart/form-data">
          <v-card flat height="12vh" fill-height>
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
              <v-layout row wrap justify-end>
                <v-flex sm3>
                  <v-btn large color="info" type="submit"
                  form="add-donation-form">
                  등록하기
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-card>
          <v-card flat height="30vh" fill-height>
            <div>
              <!-- <v-avatar size="250px" tile class="grey lighten-3 ml-3">
                <span>사진을 넣어주세요</span>
              </v-avatar> -->
              //이미지 preview 추가
              <input type="file" id="file" ref="file" @change="fileUpload()">
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
              <v-flex xs5>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="200"
                  lazy
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator>
                    <v-text-field
                      v-model="closed_at"
                      label="모금마감일"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="closed_at"
                    max="2024-12-31"
                    min="2019-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="target_amount" label="목표 모금액" required>
                </v-text-field>
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
  import { mapActions,mapState }   from 'vuex'
  export default {
    computed: {
      ...mapState(['userinfo']),
    },
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
        closed_at:null,
        target_amount:'',
        menu:false
      }
    },
    watch:{
      menu(val){
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    methods: {
      ...mapActions(['ADDDONATION']),
      fileUpload() {
        this.file = this.$refs.file.files[0]
      },
      save (closed_at) {
      this.$refs.menu.save(closed_at)
    },
      adddonation() {
        let data = new FormData()
        data.append('user_id', this.userinfo.id)
        data.append('is_donator', this.userinfo.is_donator)
        data.append('title',this.title)
        data.append('file',this.file)
        data.append('content',this.content)
        data.append('closed_at',this.closed_at)
        data.append('target_amount',this.target_amount)
        let config = {
          headers : {
            'Content-Type' : 'multipart/form-data'
          }
        }
        this.ADDDONATION(data, config)
        this.$router.replace({name:'donation'})
      },
    },
  }
</script>

<style scope>

</style>
