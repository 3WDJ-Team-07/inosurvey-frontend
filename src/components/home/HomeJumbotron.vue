<template>
  <v-fade-transition mode="out-in">
    <v-img 
     src="/static/main.png"
     :key="$route.path"  
     height="100vh"
     gradient="to bottom,  
     rgba(128, 128, 128, .9), 
     rgba(128, 128, 128, .8), 
     rgba(0, 0, 0, .6), 
     rgba(0, 0, 0, .8)">
      <v-fade-transition mode="out-in">
        <v-container :key="$route.path" fill-height>
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-flex :key="$route.path" text-xs-center>
                <h1 class="display-2 white--text font-weight-bold">
                  {{$t('Home.jumbotronTitle')}}
                </h1>
                <div class="subheading white--text">
                  {{$t('Home.jumbotronSubTitle')}}
                </div>
                <v-btn color="info" router :to="{name : 'survey'}" 
                large class="title font-weight-bold mt-4 pl-5 pr-5 pa-4">
                  {{ $t('Home.btnText')}}
                </v-btn>
              </v-flex>
            </v-fade-transition>
            <v-btn class="floating mb-5" absolute flat fab bottom right>
              <v-icon
               class="grey--text" 
               x-large 
               v-scroll-to="{ el: '#element',offset:-100,duration:1500}">
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
