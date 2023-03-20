<template>
    <h3>prop传递数据</h3>
    <p>{{ id }}</p>
    <p>{{ nianling }}</p>
    <ul v-for="items in shuzu"><li>{{ items }}</li></ul>
    <button @click="sendback">回传参数</button>
</template>

<script>

export default {
    //通过props接受传递的参数
    //不限制类型：String、Number、Boolean、Array、Object、Function
    //数组和对象的default一定要用函数返回

    //通过$emit向父级组件传参：（'字符串'，'传递的数据'）
    //使用事件的方式回传
    name:"MyComponent",
    props:{
        id:{
            type:String,
            default:"",
        },
        nianling:{
            type:Number,
            default:0,
        },
        shuzu:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    data(){
        return{
            backcontent:'sb',
        }
    },
    methods:{
        sendback(){
            this.$emit('backone',this.backcontent);
        }
    }
}
</script>

<!-- scoped：当前样式只在当前组件内生效 -->
<style scoped>
h3{
    color:red;
}
</style>