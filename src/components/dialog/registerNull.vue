/* 회원가입 모두입력 설명 모달창 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="isRegisterNullDialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card class="pa-3" elevation-10>
				<span 
          class="headline right grey--text" 
          @click="SET_IS_REGISTER_NULL(false)">
          <i class="fas fa-times"></i>
        </span>
        <v-card-text class="pl-5 pb-5 ml-2">
          <span class="title font-weight-thin grey--text">모든 작성란을 채워 주세요.</span>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'registerNull',
  computed: {
    ...mapState([
      'isRegisterNullDialog'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_IS_REGISTER_NULL'
    ])
  }
}
</script>

<style scoped>
	*{
		overflow: hidden;
	}
</style>