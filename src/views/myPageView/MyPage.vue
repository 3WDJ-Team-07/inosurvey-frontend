/* 마이페이지 */

<template>
  <v-container
    fluid grid-list-md 
		text-sm-center
    class="pa-5 mt-5">
		<div class="display-2 pa-5 mt-5 font-weight-bold">
			<span class="blue--text">추호진 </span>
			<span>님의 마이페이지</span> 
		</div>
    <v-layout 
      row wrap align-center 
      justify-center class="pt-4 ml-5">
      <v-flex d-flex xs12 sm3 class="mr-5">
				<v-card class="border_round pa-4 elevation-4">
					<v-card-title>
						<div style="margin:0 auto">
							<div class="display-1 font-weight-bold">응답 설문 내역</div>
							<div class="title mt-4">대중교통 이용 실태 조사</div>
							<div class="title mt-4">좋아하는 과자브랜드 조사</div>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn color="info" id="btn_center" class="title font-weight-bold" large :to="{name: 'detailsRecord'}">더보기</v-btn>
					</v-card-actions>
				</v-card>
    	</v-flex>
			<v-flex d-flex xs12 sm3 class="mr-5">
				<v-card class="border_round pa-4 elevation-4">
					<v-card-title>
						<div style="margin:0 auto">
							<div class="display-1 font-weight-bold">구매 설문 내역</div>
							<div class="title mt-4">대중교통 이용 실태 조사</div>
							<div class="title mt-4">좋아하는 과자브랜드 조사</div>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn color="info" id="btn_center" class="title font-weight-bold" large>더보기</v-btn>
					</v-card-actions>
				</v-card>
    	</v-flex>
			<v-flex d-flex xs12 sm3 >
				<v-card class="border_round pa-4 elevation-4">
					<v-card-title>
						<div style="margin:0 auto">
							<div class="display-1 font-weight-bold">이노 지갑</div>
							<div class="headline mt-4 font-weight-black mt-4 mb-4">가용이노 <span class="display-1 font-weight-black">7500</span></div>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn color="info" id="btn_center" class="title font-weight-bold" large>더보기</v-btn>
					</v-card-actions>
				</v-card>
    	</v-flex>
  	</v-layout>
  </v-container>
</template>


<style scoped>
	#btn_center{
		border-radius: 5%;
		margin: 0 auto;
		width: 80%;
	}
	.border_round{
		border-radius: 5%;
	}
</style>
