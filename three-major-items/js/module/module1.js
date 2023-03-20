import { getInfo as gI } from "./module2";  //as：别名
gI();
function getInfo(){
    console.log('mother');
}
getInfo();

import * as muye from "./module2";
console.log(muye.renzhe3);
muye.getNewArenzhe();

//默认导入module2中的default函数,并且可以给匿名函数创建名字
import Bren from "./module2";
Bren();



//测试方法：
//  安装全局babel-cli：cnpm install -g babel-cli
//  安装babel-preset-env：cnpm install -D babel-preset-env
//  运行代码：babel-node --presents env xxx.js