import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
const app = createApp(App)

//createApp(App).mount('#app')

//用.use明确安装路由功能
import router from './router' 
app.use(router)

// 将Axios挂载全局
import axios from "axios"
app.config.globalProperties.ckhaxios = axios


//引入vuex
import store from './store';
app.use(store)

//引入element-plus组件(完整引入)
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)

//引入element-plus字体组件
import elementIcon from './plugins/icons'
app.use(elementIcon)

app.mount('#app')
