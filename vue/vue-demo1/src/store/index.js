import { createStore } from "vuex";
import  axios  from "axios";

//Vuex核心作用：管理组件之间的状态
export default createStore({
    //所有的状态放在这
    state: {
        counter: 0
    },
    getters: {
        getCounter(state) {
            return state.counter > 0 ? state.counter : 'counter数据异常'
        }
    },
    mutations: {
        addCounter(state, num) {
            state.counter += num
        }
    },
    //异步操作准备
    actions: {
        asyncAddCounter({commit}){
            axios.get("http://iwenwiki.com/api/generator/list.php").then(res=>{
                commit("addCounter",res.data[0]);
            })
        }
    },
    modules: {

    }
})
