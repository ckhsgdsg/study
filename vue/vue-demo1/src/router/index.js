import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about/',
        component: () => import("../views/AboutView.vue"),
        //重定向，让每次加载都显示第一个页面
        redirect:"/about/One",
        //路由嵌套
        children: [
            {
                //二级导航不要加斜杠
                path: "One",
                component: () => import("../views/AboutList/AboutOne.vue")
            },
            {
                //二级导航不要加斜杠
                path: "Two",
                component: () => import("../views/AboutList/AboutTwo.vue")
            },
            {
                //二级导航不要加斜杠
                path: "Three",
                component: () => import("../views/AboutList/AboutThree.vue")
            },
        ]
    },
    {
        path: '/News',
        name: "news",
        //异步加载方式，当页面未显示时代码不会进行执行，一般非首页都使用该加载方式
        component: () => import("../views/NewsView.vue")
    },
    {
        path: '/NewsDetails/:CropName',
        name: "newsdetails",
        //异步加载方式，当页面未显示时代码不会进行执行，一般非首页都使用该加载方式
        component: () => import("../views/NewsDetailsView.vue")
    },
]

const router = createRouter({
    //hashhistory和history的区别：
    //hashhistory：
    //  home:http://localhost:8080/#/
    //  about:http://localhost:8080/#/about

    //history：
    //  home:http://localhost:8080/
    //  about:http://localhost:8080/about
    //此种方式需要配合后端配合进行重定向，否则会出现404问题
    history: createWebHashHistory(),
    routes
})

export default router;