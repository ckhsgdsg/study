<template>
    <p>{{ chengpin }}</p>
    <!-- <p>{{ chengpin1 }}</p> -->
</template>

<script>
    //import axios from "axios"
    //需要加载全局变量详看main.js
    import querystring from "querystring"
    import api from "../api/index"

    export default{
        data(){
            return{
                chengpin:{},
            }
        },
        mounted(){
            //get请求方式
            this.ckhaxios({
                method:"get",
                url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
            }).then(res =>{
                console.log(res.data);
                this.chengpin=res.data.chengpinDetails[0].title;
            })

            //post请求方式
            //需要额外安装querystring，利用querystring.srtingify({})包括数据
            this.ckhaxios({
                method:"post",
                url:"http://iwenwiki.com/api/blueberrypai/login.php",
                data: querystring.stringify({
                    user_id:"iwen@qq.com",
                    password:"iwen123",
                    verification_code:"crfvw"
                })
            }).then(res =>{
                console.log(res.data);
            })

            //get快捷方案
            this.ckhaxios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php').then(res =>{
                console.log(res.data);
            })

            //post请求方案
            this.ckhaxios.post('http://iwenwiki.com/api/blueberrypai/login.php',querystring.stringify({
                user_id:"iwen@qq.com",
                password:"iwen123",
                verification_code:"crfvw"
            })).then(res =>{
                console.log(res.data);
            })

            //调用index中的网络请求
            api.getChengpin().then(res =>{
                console.log(res.data);
            })
        }
    }
</script>