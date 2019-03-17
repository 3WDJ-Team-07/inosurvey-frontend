<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <div class="display-1 pb-4">설문 견적</div>
        </v-layout>
        <v-container fluid grid-list-md class="borderStyle">
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
// 빈값일때는 받지않기 구현하기
export default {
    data(){
        return{
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }
    }
}
</script>

<style scoped>
    .borderStyle{
        border: 1px solid lightgray;
    }
    .center {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    }
</style>
