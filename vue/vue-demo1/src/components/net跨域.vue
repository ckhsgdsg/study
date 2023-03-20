<template>
    <h3>跨域解决方案</h3>
</template>

<script>
//跨域解决方法详见vue.config.js
import axios from 'axios';
    export default{
        mounted(){
            axios.get("/api/FingerUnion/list.php").then(res=>{
                console.log(res.data);
            })
        }
    }
</script>