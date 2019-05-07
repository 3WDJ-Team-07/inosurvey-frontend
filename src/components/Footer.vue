/* 푸터 */

<template>
  <v-footer height="auto" color="#FAFAFA">
    <v-container>
      <v-flex xs12>
        <v-divider class="my-4"/>
        <div class="text-xs-center">
          &copy; 2019 — {{ $t('Footer.company') }}
          &nbsp;&nbsp;{{ $t('Footer.projects') }}
        </div>
      </v-flex>
    </v-container>
  </v-footer>
</template>


