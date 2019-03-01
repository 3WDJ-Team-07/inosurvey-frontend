<template>
  <div class="text-xs-center">
    <v-dialog v-model="isRequestDialog" width="500">
      <v-card>
        <v-toolbar dark class="grey darken-2">        
            <v-toolbar-title class="headline">요청자</v-toolbar-title>
        </v-toolbar>
        <v-card-text>히후히후</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="SET_IS_REQUEST_DIALOG(false)"> OK </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'isRequestDialog',
    computed: {
      ...mapState([
        'isRequestDialog'
      ])
    },
    methods: {
      ...mapMutations([
        'SET_IS_REQUEST_DIALOG'
      ])
    }
}
</script>