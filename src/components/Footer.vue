/* 푸터 */

<template>
  <v-footer height="auto">
    <v-container 
      fill-height 
      grid-list-lg
    >
      <v-layout 
        row 
        justify-center 
        align-center 
        wrap>
        <v-flex xs12 sm12 md7>
          <v-card-text class="black--text pa-3">{{ $t('Footer.text')}}</v-card-text>
        </v-flex>
        <v-flex xs12>
          <v-divider class="mb-2"/>
          <div class="text-md-center">&copy;2018 — {{ $t('Footer.company') }}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>


