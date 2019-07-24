<template lang="html">
  <v-fade-transition mode="out-in">
    <v-layout
      row wrap 
      text-md-center 
      text-xs-center>
      <v-flex xs12 sm12 md6>
        <v-card
          dark tile 
          flat color="#29B6F6" 
          height="75vh" class="pa-5" 
          data-aos="fade-right" 
          data-aos-delay="200" >
          <v-card-text class="display-1 mt-2 mb-3 font-weight-black">回答者</v-card-text>
          <v-img src="/static/respond.png" width="35%" class="center"></v-img>
          <v-card-text class="pa-5">
            <span class="headline font-weight-bold">
              必要な情報を持っている集団を直接選択して<br>
              確実な情報を提供してもらってください。<br>
              色んな様式で結果を分析してください。
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card
          dark tile 
          flat color="#616161" 
          height="75vh" class="pa-5" 
          data-aos="fade-left" 
          data-aos-delay="300" >
          <v-card-text class="display-1 mt-2 mb-3 font-weight-black">作成者</v-card-text>
          <v-img src="/static/request.png" width="35%" class="center"></v-img>
          <v-card-text class="pa-5">
            <span class="headline font-weight-bold">
              モバイルの環境で便利にアンケートに<br>
              参加してください。アンケートに回答して<br>
              データに対する正当な補償を受けなさい。
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md12 text-md-center text-xs-center>
        <v-card
          tile flat 
          height="40vh" 
          class="pa-5 mt-5"
          color='#FAFAFA' 
          data-aos="flip-up" 
          data-aos-delay="200" >
          <v-card-text class="display-2">
            気になりませんか？
          </v-card-text>
          <v-btn color="info" large router :to="{name: 'join'}">スタート</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-fade-transition>
</template>

 <style scoped>
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    transition: .5s ease;
  }
 </style>