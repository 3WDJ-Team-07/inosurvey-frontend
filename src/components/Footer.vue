/* 푸터 */

<template>
  <v-footer height="auto" color="#FAFAFA" class="mb-5">
    <v-container 
      fill-height 
      grid-list-lg
    >
      <v-layout 
        row 
        justify-center 
        align-center 
        wrap>
        <v-flex sm6>
          <v-card-text class="black--text pa-3 text-md-center">{{ $t('Footer.text')}}</v-card-text>
        </v-flex>
        <v-flex xs12>
          <div class="text-md-center">&copy;2019 — {{ $t('Footer.company') }}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>


