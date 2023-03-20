<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- id和age传递到MyComponentVue文件中 -->
  <!-- <Props组件交互 :id="myname" :nianling="age" :shuzu="arr1" @backone="getbackone"/> -->
  <!-- <shengmingzhouqi /> -->
  <!-- <thirdparty /> -->
  <!-- <Axios网络请求Vue /> -->
  <!-- <net跨域 /> -->
  <!-- <Vuex读取 /> -->
  <!-- <Vue3新特性 :newname="newname1"/> -->
  <!-- 路由的显示路口 -->
  <!-- <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/News">新闻</router-link> |
  </nav>
  <hr>
  <router-view></router-view> -->
  <!-- <p>{{ backneirong }}</p> -->
  <element引用 /> 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Props组件交互 from './components/Props组件交互.vue';
// import shengmingzhouqi from './components/生命周期.vue';
// import thirdparty from './components/引入第三方.vue';
// import Axios网络请求Vue from './components/Axios网络请求.vue';
// import net跨域 from './components/net跨域.vue';
// import Vuex读取 from './components/Vuex读取.vue';
// import Vue3新特性 from './components/Vue3新特性.vue';
// import { provide } from 'vue';
import element引用 from './components/element引用.vue';

export default {
  name: 'App',
  data(){
    return{
      // myname:"ckh",
      // age:25,
      // arr1:[5,8,10],
      // backneirong:"",
      // newname1: '李雪琴',
    }
    
  },
  components: {
    //HelloWorld,
    // Props组件交互
    // shengmingzhouqi
    // thirdparty,
    // Axios网络请求Vue,
    // net跨域,
    // Vuex读取,
    // Vue3新特性,
    element引用,
  },
  methods:{
    // getbackone(data){
    //   this.backneirong=data;
    // } 
  },
  setup(){
    //使用provide父组件向子组件传递参数，不可反向传参，不限层级
    // provide("ninjia",'死门凯');
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding: 30px;
}
nav a{
  font-weight: bold;
  color:#2c3e50;
}
nav a:hover{
  color: green;
}
</style>
