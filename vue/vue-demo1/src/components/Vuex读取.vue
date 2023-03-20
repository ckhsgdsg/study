<template>
    <p>counter:{{ $store.state.counter }}</p>
    <p>{{ counter }}</p>
    <p>以上通过state获取</p>
    <hr>
    <p>counter:{{ $store.getters.getCounter }}</p>
    <p>{{ getCounter }}</p>
    <p>以上通过getters获取</p>
    <hr>
    <button @click="fn1">自增</button>
    <button @click="fn1">自增</button>
    <p>以上调用mutations函数</p>
    <hr>
    <button @click="fn2()">获取数组</button>
</template>

<script>
    import { mapState,mapGetters,mapMutations, mapActions } from 'vuex';

    export default {
        //读取vuex的数据
        computed:{
            ...mapState(["counter"]),
            ...mapGetters(["getCounter"]),

        },
        methods:{
            ...mapMutations(["addCounter"]),
            fn1(){
                
                //mutations固定调用方式
                //this.$store.commit("addCounter",15);
                this.addCounter(15);
            },
            ...mapActions(["asyncAddCounter"]),
            fn2(){
                //this.$store.dispatch("asyncAddCounter");
                this.asyncAddCounter();
            }
        }
    }
</script>