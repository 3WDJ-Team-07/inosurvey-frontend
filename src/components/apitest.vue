<template>
    <div height="100vh">
        API result :
        <div v-if="loading">
            @@@@@@@ 보근이 데이터 가져오는중 @@@@@@@<br>
            @@@@@@@ 보근이 데이터 가져오는중 @@@@@@@<br>
            @@@@@@@ 보근이 데이터 가져오는중 @@@@@@@<br>
            @@@@@@@ 보근이 데이터 가져오는중 @@@@@@@<br>
        </div> 
        <div v-else>
            <pre>{{ apiRes }}</pre>
        </div>
    </div>
</template>

<script>
import { dumi } from '../api'

export default {
    data(){
        return{
            loading: false,
            apiRes: ''
        }
    },
    created(){
        this.fetchData()
    },
    methods: {
        fetchData(){
            this.loading = true
            dumi.dataSet()
            .then(data => {
                this.apiRes = data
            })
            .finally(data => {
                this.loading = false
            })
        }
    },
}
</script>

<style>

</style>
