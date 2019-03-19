<template>
    <div>

    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('DESTROY_TOKEN')
        .then(response => {
           this.$router.push({name:'home'})
        })  // 프로미스로 받아서 성공하면 리다이렉트 로직 
    }
}
</script>

<style>

</style>
