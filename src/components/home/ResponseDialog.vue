<template>
  <div class="text-xs-center">
    <v-dialog v-model="isResponseDialog" width="500">
      <v-card>
        <v-toolbar dark color="info">        
            <v-toolbar-title class="headline">응답자</v-toolbar-title>
        </v-toolbar>
        <v-card-text>후하후하</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
          color="primary" flat 
          @click="SET_IS_RESPONSE_DIALOG(false)"
          >OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'isResponseDialog',
    computed: {
      ...mapState([
        'isResponseDialog'
      ])
    },
    methods: {
      ...mapMutations([
        'SET_IS_RESPONSE_DIALOG'
      ])
    }
}
</script>