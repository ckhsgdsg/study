<template>
    <div id="box1">
        <ul>
            <li v-for="(items,index) in wyf.list" :key="index">{{ items }}</li>
        </ul>
        <button @click="GetWyf">{{ myname }}</button>
        <p>{{ newname }}</p>
        <p>{{ ninjia1 }}</p>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { onMounted } from 'vue';
import { inject } from 'vue';
export default {
    props:{
        newname:String,
        default:"",
    },
    //组合式API
    //setup类似data，可以把method方法、props交互写在里头
    //setup中没有this
    
    setup(props,ctx) {
        

        console.log(props.newname);
        console.log(ctx );
        //ref基本类型
        const myname = ref("ckh");
        //reactive复杂类型
        const wyf = reactive({
            list: ['你们','来这里','吃饭','觉得','饭很','好吃','我看行']
        })

        function GetWyf(e){
            //e.target.innerHTML="吴亦凡";
            myname.value='吴亦凡';
        }
        //setup中生命周期函数：onBeforeMount、onMounted、onBeforeUpdate、onUpdated、onBeforeUnmount、onUnmounted
        //相比以往优势：同一个生命周期函数可以存在多个
        onMounted(()=>{
            console.log('onMounted1')
        })
        onMounted(()=>{
            console.log('onMounted2')
        })

        //inject接受父组件传的参数
        const ninjia1 = inject("ninjia");

        return {
            myname,
            wyf,
            GetWyf,
            ninjia1,
        }


    }
}
</script>