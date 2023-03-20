//存放网络请求的方法
import axios from "axios";
import path from "./path";

const api = {
    //网络请求方案

    //诚品详细地址
    getChengpin(){
        return axios.get(path.baseUrl+path.chengpin);
    }
}

export default api