/* 메인 페이지 */

<template>
	<span>
		<HomeJumbotron/>
		<HomeContext/> 
		<HomeIntroduce/>
		<!-- 스크롤을 내렸을때 나오는 상승 버튼 -->
		<v-btn 
			color="info" dark fixed bottom right fab
			v-scroll-to="{ el: '#top', offset:-10,duration:1000}"
			data-aos="fade-left" data-aos-delay="600">
		<v-icon>expand_less</v-icon> 
		</v-btn>
	</span>
</template>

<script>
	import HomeJumbotron from '@/components/home/HomeJumbotron'
	import HomeContext from '@/components/home/HomeContext'
	import HomeIntroduce from '@/components/home/HomeIntroduce'

	export default {
		name: 'home',
		components: {
			HomeJumbotron,
			HomeContext,
			HomeIntroduce,
		}
	}
</script>