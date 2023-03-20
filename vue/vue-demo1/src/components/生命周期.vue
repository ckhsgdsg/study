<template>
    <h3>生命周期函数</h3>
    <p>{{ neirong1 }}</p>
    <button @click="neirong1='有东西的'">点击</button>
</template>

<script>
    export default{
        data(){
            return{
                neirong1:""
            }
        },
        beforeCreate(){
            console.log('组件创建之前');
        },
        created(){
            console.log('组件创建之后');
        },
        beforeMount(){
            console.log('组件挂载之前');
        },
        mounted(){
            //通常把网络请求放在这个位置
            //先让页面组件显示，告诉用户方页面存在。之后拿取数据添加到各个组件中
            console.log('组件挂载之后');
        },
        beforeUpdate(){
            console.log('组件更新之前');
        },
        updated(){
            console.log('组件更新之后');   
        },
        beforeUnmount(){
            console.log('组件卸载之前');
            //把消耗性能的处理杀掉
        },
        unmounted(){
            console.log('组件卸载之后');
        }
    }
</script>