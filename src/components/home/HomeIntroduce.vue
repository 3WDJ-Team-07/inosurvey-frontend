<template lang="html">
  <v-fade-transition mode="out-in">
    <v-layout column>
      <v-flex xs12>
        <div
          class="pa-5" 
          data-aos="fade-right" 
          data-aos-delay="200" >
          <v-layout row　align-center>
            <v-img src="/static/respond.png" class="ma-5" max-width="30%"></v-img>
          <span class="text-xs-left text-md-left ">
            <span class="headline info--text text-xs-left font-weight-black">回答者</span>
            <div class="mt-4 title message" >
              モバイルの環境で便利にアンケートに<br>
              参加してください。アンケートに回答して<br>
              データに対する正当な補償を受けなさい。
            </div>
          </span>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12>
        <div
          class="pa-5" 
          data-aos="fade-right" 
          data-aos-delay="200" >
          <v-layout row　align-center>
          <span class="text-xs-left text-md-left ">
            <span class="headline info--text text-xs-left font-weight-black">依頼者</span>
            <div class="mt-4 title message" >
              必要な情報を持っている集団を直接選択して<br>
              確実な情報を提供してもらってください。<br>
              色んな様式で結果を分析してください。
            </div>
          </span>
          <v-img src="/static/request.png" class="ma-5" max-width="30%"></v-img>
          </v-layout>
        </div>
      </v-flex>
      <v-flex md12 text-md-center text-xs-center>
        <v-img src="/static/background.png">
        <div
          height="30vh" 
          class="pa-5 mt-5"
          data-aos="flip-up" 
          data-aos-delay="200" >
          <v-card-text class="display-2 mt-5">
            気になりませんか？
          </v-card-text>
          <v-btn color="info" class="rounded" large router :to="{name: 'join'}">スタート</v-btn>
        </div>
        </v-img>
      </v-flex>
    </v-layout>
  </v-fade-transition>
</template>

 <style scoped>
 .message{
   line-height: 200%
 }
  .rounded{
		border-radius: 30px;
	}
 </style>