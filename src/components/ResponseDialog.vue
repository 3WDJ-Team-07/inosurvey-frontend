<template>
  <div class="text-xs-center">
    <v-dialog
       v-model="this.$store.state.ResponseDialog"
      width="500"
    >
      <v-card>
        <v-toolbar dark color="info">        
            <v-toolbar-title class="headline">응답자</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          후하후하
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="ResponseDialogChange"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'responseDialog',
    methods: {
      ...mapMutations(['ResponseDialogChange'])
    }
}
</script>