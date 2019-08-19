<template>
  <div>
    <v-container fluid grid-list-md pt-5 mt-5>
       <v-form
        @submit.prevent="adddonation"
        id="add-donation-form"
        enctype="multipart/form-data"
      >
        <v-layout row>
          <v-layout row wrap>
            <v-flex xs10>
              <div class="display-2 font-weight-bold pa-3 ml-5">
                <span v-if="this.title.length==0" class="grey--text text--darken-1">募金箱登録</span>
                <span v-else>{{title}}</span>
              </div>
            </v-flex>
            <v-flex xs2>
              <div class="mr-5 pa-3">
                <v-btn block color="info" type="submit" form="add-donation-form">
                  登録する
                </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs3 class="border_style">
          <v-card class="text-xs-center" flat style="background-color:#FAFAFA;" >
            <v-container fluid>
              <v-layout align-center justify-space-around column fill-height>
                <div class="display-1 font-weight-bold py-5 my-2">募金箱名</div>
                <div class="display-1 font-weight-bold py-5 my-5">紹介イメージ</div>
                <div class="display-1 font-weight-bold py-5 my-5">説明</div>
                <div class="display-1 font-weight-bold py-5">情報</div>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs9 class="border_style">
          <v-card  flat style="background-color:#FAFAFA;">
            <v-container fluid>
              <v-layout column fill-height>
                <div style="padding-top:3%">
                  <v-layout>
                    <v-flex xs2 mr-5>
                      <v-select
                        :items="category_item"
                        v-model="category"
                        label="カテゴリー"
                        item-text="name"
                        item-value="value"
                        append-icon="arrow_drop_down"
                        solo hide-details>
						          </v-select>
                    </v-flex>
                    <v-flex xs5>
                      <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        :counter="30"
                        label="募金箱名"
                        required>
                      </v-text-field>
                    </v-flex>
                    
                  </v-layout>
                </div>
                <div>
                  <div
                    class="image-input mt-4"
                    :style="{ 'background-image': `url(${imageData})` }"
                    @click="chooseImage"
                  >
                    <span
                      v-if="!imageData"
                      class="placeholder"
                    >
                      イメージを選択してください
                    </span>
                    <input
                      class="file-input"
                      ref="fileInput"
                      type="file"
                      @input="onSelectFile"
                    >
                  </div>
                </div>
                <div class="py-4 my-3">
                  <v-flex xs5>
                    <v-textarea
                      v-model="content" solo
                      :rules="contentRules"
                      :counter="255"
                      label="募金箱について説明してください"
                    >
                    </v-textarea>
                  </v-flex>
                </div>
                <div class="py-4">
                  <v-layout>
                    <v-flex xs3>
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
                            label="募金締め切り日"
                            prepend-icon="event"
                            readonly
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          ref="picker"
                          v-model="closed_at"
                          max="2024-12-31"
                          min="2019-06-19"
                          @change="save"
                        ></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs2>
                      <v-text-field type="number" v-model="target_amount" label="目標募金額" required>
                      </v-text-field>
                    </v-flex>
                    <v-flex class="mt-4">INO</v-flex>
                  </v-layout>
                </div>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
      </v-form>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapState }   from 'vuex'
  import { donation }               from '@/api/index'

  export default {
    computed: {
      ...mapState(['userinfo']),
    },
    data() {
      return {
        title:'',
        titleRules: [
          //모금함 이름 규격
          v => !!v || '募金箱名をご記入ください。',
          v => v.length <= 30 || '募金箱名は30字以内でお願いします。'
        ],
        contentRules: [
          //모금함 설명 규격
          v => !!v || '募金箱の紹介をご記入ください。',
          v => v.length <= 255 || '募金箱の紹介は255字以内でお願いします。'
        ],
        file:'',
        content:'',
        closed_at:null,
        target_amount:'',
        menu:false,
        // imageData: ""
        imageData: null,
        category:'',
        category_item: [
          {name: '児童 / 青少年', id: 1},
          {name: '老人', id: 2},
          {name: '障碍者', id: 3},
          {name: 'グローバル', id: 4},
          {name: '家族 / 女性', id: 5},
          {name: '市民社会', id: 6},
          {name: '動植物', id: 7},
          {name: 'その他', id: 8}
        ],
      }
    },
    watch:{
      menu(val){
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    methods: {
      ...mapActions(['ADDDONATION','FETCH_DONATION']),
      chooseImage () {
        this.$refs.fileInput.click()
      },
      onSelectFile () {
        const input = this.$refs.fileInput
        const files = input.files
        if (files && files[0]) {
          const reader = new FileReader()
          reader.onload = e => {
            this.imageData = e.target.result
          }
          reader.readAsDataURL(files[0])
          this.file = input.files[0]
        }
      },
      save (closed_at) {
        this.$refs.menu.save(closed_at)
      },
      adddonation() {
        let data = new FormData()
        data.append('user_id', this.userinfo.id)
        data.append('category',this.category)
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
        this.$router.push({ name: 'donation' })
      },
    },
  }
</script>

<style scoped>
  .image-input {
    display: block;
    width: 260px;
    height: 260px;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
  }
  .placeholder {
    background: #F0F0F0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 15px;
  }
  .placeholder:hover {
    background-color: #E0E0E0;
  }
  .file-input {
    display: none;
  }
  .border_style {
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
  }
  .border_style:nth-child(1) {
    border-right: 2px solid lightgrey;
  }
</style>