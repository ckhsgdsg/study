//该文件主要封装网络请求参数
import axios from "axios";
import querystring from "querystring";

const instance = axios.create({
    //网络请求的公共配置
    timeout: 5000
})

//错误处理方案
const errorresponse = (status, info) => {
    switch(status){
        case 400:
            alert("语法错误");
            break;
        case 401:
            alert("服务器认证失败");
            break;
        case 403:
            alert("拒绝访问");
            break;
        case 400:
            alert("语法错误");
            break;
        case 404:
            alert("地址错误");
            break;
        case 500:
            alert("后端服务遇到意外");
            break;
        case 502:
            alert("服务器无响应");
            break;
        default:
            alert(info);
            break;
    }
}

//拦截器
//发送数据之前
instance.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = querystring.stringify(config.data);
        }
        //包含网络请求的所有信息
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

//获取数据之前
instance.interceptors.response.use(
    config => {
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },
    error => {
        const { response } = error;
        //错误数据
        errorresponse(response.status, response.info);
    }
)

export default instance;