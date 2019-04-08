import Vue from 'vue'

export default new Vue()

// 버스는 되도록 lifecycle hook안에 작성
// emit으로 보내고 on으로 받는다 
// bus.$emit('')   bus.$on('')
// data(){
//   return{
//     loadingStatus:false
//   }
// },
// methods: {
//   startSpinner(){
//     this.loadingStatus = true
//   },
//   endSpinner(){
//     this.loadingStatus = false
//   }
// },
// created() {
//   bus.$on('start', this.startSpinner)
// },
// on을 한경우에 beforeDestory로 bus.$off를 해줘야함 ( 계속 쌓여서 )
// bus.$off('start',this.startSpinner)