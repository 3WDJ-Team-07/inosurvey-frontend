/* 로그아웃 페이지 */

<template>
  <div></div>
</template>

<script>
	export default {
		name: 'logout',
		created(){	// 로그아웃 컴포넌트로 이동시 토큰 제거 
			this.$store.dispatch('DESTROY_TOKEN')
			.then(response => {
				this.$router.push({name:'home'})
			})  // 성공시 메인페이지로 리다이렉트
		}
	}
</script>