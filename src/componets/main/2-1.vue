<template>
    <div>
        <img :src="imgurls" alt="点我呀!">
    </div>
</template>

<script>
    import imgurl from "../../assets/logo.png";
    export default {
        data() {
            return{
                imgurls:imgurl
            }
        }
    }
</script>

<style>

</style>