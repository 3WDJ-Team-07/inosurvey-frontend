/* 설문요청페이지(결제)
		1. 테이블은 임시로 지정
*/

<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div class="display-1 pb-4">설문 견적</div>
    </v-layout>
    <v-container fluid grid-list-md class="border_style">
      <table>
        <tr>
          <td>총요금</td>
          <td>원</td>
      	</tr>
        <tr>
          <td>예상 응답자수</td>
          <td>명</td>
        </tr>
        <tr>
          <td>응답자 가격</td>
					<td>원</td>
        </tr>
        <tr>
          <td>대상 지정 옵션</td>
          <td>원</td>
        </tr>
      </table>
      <v-btn large color="info" block>확인 ( 결제 )</v-btn>
    </v-container>
  </v-container>
</template>

<script>
	export default {
		data(){
			return{
				items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
			}
		}
	}
</script>

<style scoped>
  .border_style {
    border: 1px solid lightgray;
  }
</style>
