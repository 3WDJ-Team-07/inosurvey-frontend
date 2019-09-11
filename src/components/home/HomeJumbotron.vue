<template>
  <v-fade-transition mode="out-in">
    <v-img
     src="/static/main.png"
     :key="$route.path"
     height="100vh"
>
      <v-fade-transition mode="out-in">
        <v-container :key="$route.path" fill-height>
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-flex :key="$route.path" text-xs-left>
                <h1 class=" white--text font-weight-bold">
                  {{$t('Home.jumbotronTitle')}}
                </h1>
                <h1 class="display-2 white--text font-weight-bold">
                  {{$t('Home.jumbotronLogo')}}
                </h1>
                <div class="title white--text mt-4">
                  {{$t('Home.jumbotronSubTitle')}}
                </div>
                <v-btn color="white" router :to="{name : 'survey'}" round
                 class="title info--text font-weight-bold mt-4 pl-5 pr-5 pa-4">
                  {{ $t('Home.btnText')}}
                </v-btn>
              </v-flex>
            </v-fade-transition>
            <v-btn class="floating mb-5" absolute flat fab bottom right >
              <v-icon
               class="grey--text"
               x-large
               v-scroll-to="{ el: '#element',offset:-50,duration:1200}">
               expand_more
              </v-icon>
            </v-btn>
          </v-layout>
          
        </v-container>
        
      </v-fade-transition>
    </v-img>
  </v-fade-transition>
</template>

 <style scoped>
  .floating{
    left:49%;
    bottom: 5%;
  }
 </style>
