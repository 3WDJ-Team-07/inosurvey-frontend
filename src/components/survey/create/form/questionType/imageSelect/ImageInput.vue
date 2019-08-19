<template>
  <div>
    <!-- slot parent -->
    <div @click="launchFilePicker()">
      <slot name="activator"></slot>
    </div>
    <!-- style hidden ref로 지정 -->
    <input 
      type="file"
      ref="file"
      :name="uploadFieldName"
      @change="onFileChange($event.target.name, $event.target.files)"
      style="display:none">
    <!-- error modal -->
    <v-dialog v-model="errorDialog" max-width="300">
      <v-card>
        <v-card-text class="subheading">{{errorText}}</v-card-text>
        <v-card-actions>
          <v-btn @click="errorDialog = false" color="info" block>確認</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'
  import { EventBus }                 from '@/utils/bus'

  export default {
    name: 'image-input',
    data() {
      return {
        errorDialog: null,
        errorText: '',
        uploadFieldName: 'file',
        maxSize: 1024,
        questionIndex:0,
        itemIndex:0
      }
    },
    props: {
      value: Object,
    },
    methods: {
      ...mapActions(['REQUEST_IMG_SELECT']),
      ...mapMutations(['INPUT_FORM_S3IMG']),
      launchFilePicker() {
        this.$refs.file.click();
      },
      onFileChange(fieldName, file) {
        const { maxSize } = this
        let imageFile = file[0]
        if (file.length>0) {
          let size = imageFile.size / maxSize / maxSize
          if (!imageFile.type.match('image.*')) {
            // 사진이 아닐때
            this.errorDialog = true
            this.errorText = '写真型ファイルだけ入れてください'
          } else if (size>10) {
            // 사이즈 체크
            this.errorDialog = true
            this.errorText = '写真型ファイル大きすぎます！！10MB以下のファイルを指定してください。'
          } else {
            EventBus.$on('itemIndex', itemIndex => {
              this.itemIndex = itemIndex
            })
            EventBus.$on('questionIndex', questionIndex => {
              this.questionIndex = questionIndex
            })
            // FormData에 파일 추가 및 파일을 이미지 URL로 변환
            let formData = new FormData()
            formData.append("file", imageFile)
            this.REQUEST_IMG_SELECT(formData)
            .then(response => {
              let imageURL = response
              this.$emit('input', { formData, imageURL })  // 부모한테 FormData, 이미지 URL 보냄
              return response
            }).then((response) => {
              this.INPUT_FORM_S3IMG({
                imgUrl: response,
                questionIndex: this.questionIndex,
                itemIndex: this.itemIndex
              })
            })
          }
        }
      }
    }
  }
</script>
