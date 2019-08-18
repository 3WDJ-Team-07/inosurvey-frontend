<template>
  <v-container style="margin:0;padding:0;">
    <v-container grid-list-xs class="blue lighten-1">
      <v-layout column class="hoverEvent">
        <v-flex xs12>
          <input 
            class="form-control headline" 
            v-if="isEditTitle" type="text" 
            v-model="getTitle" ref="inputTitle" 
            @blur="onSubmitTitle" 
            @keyup.enter="onSubmitTitle"
          >
          <div 
            v-else class="font-weight-bold white--text"
            style="font-size: 33px; height: 33px; line-height:30px;"
            @click="onClickTitle" 
            v-html="formTitle"
          ></div>
        </v-flex>
      </v-layout>	
    </v-container>
    <v-container grid-list-xs class="blue-grey lighten-5">
      <v-layout column class="hoverEvent">
        <v-flex xs12 class="ma-1">
          <v-textarea
            v-if="isEditIntro"
            v-model="getIntro"
            ref="inputIntro"
            @blur="onSubmitIntro" 
            @keyup.enter="onSubmitIntro"
            solo class="title"
          ></v-textarea>
          <div 
            v-else class="title grey--text"
            @click="onClickIntro"
          > {{ getIntro }} </div>
        </v-flex>
      </v-layout>	
    </v-container>
  </v-container>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
        isEditTitle: false,
        isEditIntro: false
			}
		},
		computed: {
			...mapState(['formTitle','formIntro']),
			getTitle: {
        get() { return this.$store.state.formTitle },
        set(value) { this.$store.commit('UPDATE_TITLE', value) }
      },
      getIntro:{ 
        get() { return this.$store.state.formIntro },
        set(value) { this.$store.commit('UPDATE_INTRO', value) }
      }
		},
		methods: {
			onClickTitle() {
				this.isEditTitle = true
				this.$nextTick(() => this.$refs.inputTitle.focus())
      },
      onClickIntro() {
				this.isEditIntro = true
				this.$nextTick(() => this.$refs.inputIntro.focus())
			},
			onSubmitTitle() { this.isEditTitle = false },
			onSubmitIntro() { this.isEditIntro = false }
		},
	}
</script>

<style scoped>
	.hoverEvent{
		transition: background-color 1s ease;
	}
  .hoverEvent:hover{
    background-color: #EAEAEA;
    cursor: pointer;
  }
</style>
