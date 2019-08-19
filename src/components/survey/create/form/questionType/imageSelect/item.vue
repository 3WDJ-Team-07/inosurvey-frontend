<template>
  <v-flex xs4>
    <v-card>
        <image-input v-model="avatar">
          <div slot="activator" class="pt-2">
            <v-avatar size="300px" tile v-if="!avatar" class="grey lighten-3 ml-3">
              <span>写真を入れてください</span>
            </v-avatar>
            <v-avatar size="300px" tile v-else class="pt-3 ml-3">
              <img :src="avatar.imageURL" alt="avatar">
            </v-avatar>
          </div>
        </image-input>
      <v-card-title primary-title>
        <input 
          v-if="!inputQuestion" 
          v-model="ImageValue.value"
          type="text" 
          class="form-control subheading" 
          style="width:400px;"
        >
        <label v-else class="title font-weight-bold">{{ImageValue.value}}</label>
      </v-card-title>
      <v-card-actions style="float:right;">
        <v-btn color="grey" dark @click="removeSingleChoice(itemIndex)">削除</v-btn>
        <v-btn color="info" @click="addNewSingleChoice">追加</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex';
  import ImageInput       from './ImageInput'
  import { EventBus }     from '@/utils/bus'

  export default {
    props: [
      'ImageValue',
      'inputQuestion',
      'questionIndex',
      'itemIndex'
    ],
    components: { ImageInput },
    data() {
      return {
        ImageValues: { value: '' || "内容を指定してください。", image: ''},
        avatar: null,
        requestUrl: ''
      }
    },
    updated() {
      EventBus.$emit('questionIndex', this.questionIndex)
      EventBus.$emit('itemIndex', this.itemIndex)
      console.log( (this.avatar.imageURL).split('amazonaws.com/')[1] )
    },
    methods: {
      ...mapMutations(['REMOVE_ITEM','INPUT_ITEMS']),
      ...mapActions(['REQUEST_IMG_URL']),
      addNewSingleChoice() {
        this.INPUT_ITEMS({
          items: this.ImageValues,
          questionIndex: this.questionIndex
        })
      },
      removeSingleChoice(itemIndex) {
        this.REMOVE_ITEM({
          questionIndex: this.questionIndex,
          itemIndex: itemIndex
        })
        this.REQUEST_IMG_URL({
          file: (this.avatar.imageURL).split('amazonaws.com/')[1]
        })
      }
    }
  }
</script>
