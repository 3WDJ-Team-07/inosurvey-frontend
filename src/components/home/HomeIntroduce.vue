<template lang="html">
  <v-fade-transition mode="out-in">
    <v-layout column>
      
      <v-flex xs12>
        <div
          class="pa-5" 
          data-aos="fade-right" 
          data-aos-delay="200" >
          <v-layout row　align-center justify-center>
          <span class="text-xs-left text-md-left ">
            <span class="headline info--text text-xs-left font-weight-black">依頼者</span>
            <div class="mt-4 title message" >
              回答者を指定して必要な情報を<br>
              提供してもらうことができます。<br>
              分析結果は様々な形で表示されます。
            </div>
          </span>
          <v-img src="/static/request.png" class="ma-5" max-width="30%"></v-img>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12>
        <div
          class="pa-5" 
          data-aos="fade-right" 
          data-aos-delay="200"
          >
          <v-layout  align-center justify-center>
              <v-img src="/static/respond.png" class="ma-5" max-width="30%" centered></v-img>
              <span class="text-xs-left text-md-left ">
                <span class="headline info--text text-xs-left font-weight-black">回答者</span>
                <div class="mt-4 title message" >
                  スマートフォンで気軽にアンケートに<br>
                  参加できます。アンケートに回答すると<br>
                  INOがもらえます。
                </div>
              </span>
          </v-layout>
        </div>
      </v-flex>
      <!-- ino 설명 추가하기  -->
      <v-flex md12 text-md-center text-xs-center>
        <v-img src="/static/background.png">
        <div
          height="30vh" 
          class="pa-5 mt-5"
          data-aos="flip-up" 
          data-aos-delay="200" >
          <v-card-text class="display-2 mt-5">
             INO-Surveyをはじめてみませんか?
          </v-card-text>
          <v-btn color="info" round large router :to="{name: 'join'}">スタート</v-btn>
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
 </style>