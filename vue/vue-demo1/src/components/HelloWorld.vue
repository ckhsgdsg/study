<template>
  <div class="hello">
    <h3>学习Vue模板语法</h3>
    <div>{{ baiduHTML }}</div>
    <div v-html="baiduHTML"></div>
    <div v-bind:id="dynamicId"></div>
    <p>{{ num + 100 }}</p>
    <p>{{ flag1 ? '真的' : '假的' }}</p>
    <p v-if="flag2">哈哈哈</p>
    <p v-else="flag2">呵呵呵</p>
    <p v-show="flag3">嘿嘿嘿</p>
    <li v-for="items in newList" :key="items.id">
      {{ items.title }}
    </li>
    <button v-on:click="count +=1">现在数字为{{ count }}</button>
    <button @click="fn1">消息撤回</button>
    <p>{{ content }}</p>
    <button @click="fn2(3,4)">3+4={{ sum }}</button>
    <button @click="fn3('you')">fuck{{ who }}</button>
    <ul @click="fn4(items)" v-for="(items,index) in names" :key="index">{{ items }}</ul>
    <input v-model.lazy="message" placeholder="请输入">
    <p>{{ message }}</p>
  </div>
</template>

<script>
//{{}}中的内容可以为动态显示，允许单行表达式
//v-html：可以解析标签
//v-bind：动态属性，可以用:简写
//v-if：只有返回值为true才显示
//v-else：配套v-if，如果返回值是false则显示
//v-show：控制当前内容是否显示
//v-if和v-show区别：
//  v-if如果是false则内容中的时间监听器和子组件会删除，true时再重建
//  v-show如果是false原先内容还是存在，只是利用display:none隐藏
//  切换少的情况下使用v-if，频繁的话使用v-show减少损耗
//v-for：就地更新原则。根据key值跟踪每个节点是否改变。如果列表中新增内容，原先的不会重新渲染，只会将后续新增的内容重新渲染出来
//v-on：事件，可以用@click简写
//v-model：表单元素实时获取实时同步
//  .lazy：当失去焦点时或回车时获取
//  .trim：自动去掉空格

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: "",
      baiduHTML: "<a href='https://www.baidu.com'>百度</a>",
      dynamicId: 1,
      num: 100,
      flag1: true,
      flag2: false,
      flag3: false,
      newList: [
        {
          id: '1001',
          title: 'S忍'
        },
        {
          id: '1002',
          title: 'A忍'
        },
        {
          id: '1003',
          title: 'B忍'
        }
      ],
      count: 1,
      content:'fuck',
      sum:0,
      who:'',
      names:["青年艾","死门凯","达鲁伊"],
    }
  },
  methods:{
    fn1(event){
      this.content='消息被撤回了';
      event.target.innerHTML='撤回消息'
    },
    fn2(x,y){
      this.sum=x+y
    },
    fn3(data){
      this.who=data
    },

  }
}
</script>
