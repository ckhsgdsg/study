//------------------------------------变量---------------------------------------
function _bianliang() {
    console.log(num);
    var num = 10;
    console.log(num);
    // 执行流程为：
    //  var num=10  变量提升：JS工作方式是先获取所有声明的变量再进行执行
    //  console.log(num)    打印变量，显示undefined
    //  num=10
}
//------------------------------------输出---------------------------------------
function _shuchu() {
    alert("我是你的小爹");
    document.write("我是你的中爹");
    console.log("我是你的大爹");
}
//-----------------------------------数据类型--------------------------------------
function _shujuleixing() {
    //数据类型一共有8种：
    //  基础数据类型（原始类型）：var数值、string字符串、boolean布尔值
    //  合成数据类型（复合类型）：object对象
    //  特殊值:null、undefined（区别为null代表对象为空，undefined代表数值为空）
    //  ES6新增：Symbol、Bigint
    var age = 20;
    var name = "你大爹";
    var sex = '男';
    var flag1 = true;
    var flag2 = false;
    var student = {
        name: "陈大爹",
        age: 25,
        sex: true
    }
    var n1 = null;
    var u1 = undefined;
}
//------------------------------------运算符--------------------------------------
function _yunsuanfu() {
    //判断基本数据类型使用，判断对象类型不准确
    var age = null;
    var student = {
        name: "陈大爹",
        age: 25,
        sex: true
    }
    console.log(typeof student);
    console.log(typeof age);    //打印age类型，结果同上为object对象
    console.log("以上为typeoof运算符");
    console.log("");

    var num1 = 10;
    var num2 = 5;
    sum1 = num1 + num2;
    console.log(sum1);
    console.log(num1++ + 2);    //打印为12，打印后自加
    console.log(++num2 - 1);    //打印为5，加后打印
    var num3 = 2;
    var num4 = 5;
    console.log(num3 += num4);    //num3=num3+num4，结果为7
    console.log("以上为赋值运算符");
    console.log("");

    var num5 = 20;
    var num6 = '20';
    console.log(num5 < num6);   //结果为false
    console.log(num5 == num6);  //结果为true
    console.log(num5 === num6);   //结果为flase,类型不同，数值相同
    console.log(num5 != num6);    //结果为false
    console.log(num5 !== num6);   //结果为true
    console.log("以上为比较运算符");
    console.log("");

    console.log(!{ age: 1 });      //除undefined、null、false、0、NaN、空字符串('')取反得到true，其余取反全为false
    var num1 = 100 == 100;
    var num2 = 100 > 100;
    var num3 = 110 == 110;
    var num4 = 110 < 100;
    var num5 = !num1;

    var tandt = num1 && num3;
    var tort = num1 || num3;
    var fandf = num2 && num4;
    var forf = num2 || num4;
    var tandf = num1 && num2;
    var torf = num1 || num2;
    console.log("真且真：" + tandt + "\n真或真：" + tort + "\n假且假：" + fandf + "\n假或假：" + forf + "\n真且假：" + tandf + "\n真或假：" + torf);
    var num6 = 0;
    console.log(!num6++);
    console.log("以上为布尔运算符");
    console.log("");

    num = 11
    console.log(num % 2 == 0 ? "偶数" : "奇数");
    console.log("以上为三目运算符");
}
//-----------------------------------条件语句--------------------------------------
function _tiaojian() {
    var chouka = true;
    var card = "鸣人";
    if (chouka) {
        if (card === "死门凯") {
            console.log("5片死门凯");
        }
        else if (card === "青年艾") {
            console.log("4片青年艾");
        }
        else {
            console.log("非洲人");
        }
    }
    else {
        console.log("不抽了");
    }
    console.log("以上为ifelse");
    console.log("");

    var shuzi = 2;
    switch (shuzi) {
        case 1:
            document.write("星期一");
            break;
        case 2:
            document.write("星期二");
            break;
        case 3:
            document.write("星期三");
            break;
        case 4:
            document.write("星期四");
            break;
        case 5:
            document.write("星期五");
            break;
        case 6:
            document.write("星期六");
            break;
        case 7:
            document.write("星期日");
            break;
        default:
            document.write("输入错了SB！");
            break;
    }
    console.log("以上为switch");
    console.log("");
}
//-----------------------------------循环语句--------------------------------------
function _xunhuan() {
    for (var x = 1; x < 10; x++) {
        document.write("<br>");
        for (var y = 1; y <= x; y++) {
            var ret = 0;
            ret = y * x;
            document.write(y + "*" + x + "=" + ret);
            document.write("\t");
        }
    }
    document.write("<br>");
    document.write("以上为for");
    document.write("<br>");

    var z = 1;
    while (z < 8) {

        // if(z==3){
        //     continue;
        // }
        if (z == 5) {
            break;
        }
        document.write(z + "<br>");
        z++;
    }
    document.write("以上为while");
    document.write("<br>");
}
//-----------------------------------字符串--------------------------------------
function _zifuchuan() {
    var s1 = "  我是你的\"大爹\"，懂了吗小逼\
    崽子<br>  "
    var s2 = "爷爷不懂你个傻逼"
    document.write(s1);
    document.write("字符串长度为：" + s1.length + "<br>");  //长度为24，转义符不算，崽子到左边的距离4个空白位置
    document.write("字符串的第21个位置的字符为：" + s1.charAt(20) + "<br>");
    document.write("字符串最后一位的字符为：" + s1.charAt(s1.length - 1));
    document.write("<br><br>以上为charAt<br><br>");
    document.write(s1.concat(s2, "!!!", "<br>"));  //concat参数可以添加多个参数
    var s3 = s1 + s2;   //字符串可以相加
    document.write(s3);
    document.write("<br><br>以上为concat<br><br>");
    document.write(s2.substring(0, 3) + "<br>");  //打印字符串0~2位，如果0和3相反即第一个参数大于第二个参数，则自动更换位置，如果为负数，自动替换为0
    document.write(s2.substring(2));     //打印字符串2~结束
    document.write("<br><br>以上为substring<br><br>");
    document.write(s2.substr(-5, 4) + "<br>");     //打印字符串从倒数第五个开始，4个长度的数值。如果第二个参数为负数则会替换为0，则返回""
    document.write(s2.substr(-4));       //打印倒数四个位置的数值
    document.write("<br><br>以上为substr<br><br>");
    document.write(s2.indexOf('你', 4));   //打印“你”在字符串第四个位置及以后的位置的下标，没有则反馈-1。数字可以省略
    document.write("<br><br>以上为indexof<br><br>");
    document.write(s1.trim().length + "<br>");   //去除字符串两端的空格以及转义符
    document.write(s1.trimStart());     //去除开始的部分
    document.write(s1.trimEnd());       //去除尾部
    document.write("<br><br>以上为trim<br><br>");
    var s3 = "你们.来这里.吃饭.觉得.饭很.好吃.我看行"
    document.write(s3.split(".", 5) + "<br>");  //显示为数组形式，以.切割，数组变为["你们","来这里","吃饭","觉得","饭很","好吃","我看行"]，只返回5个
    document.write(s3.split("") + "<br>");
    document.write(s3.split());
    document.write("<br><br>以上为split<br><br>");
}
//-----------------------------------数组--------------------------------------
function _shuzu() {
    var arr1 = [[1, 2], [3, 4]];
    document.write(arr1[1][1] + "<br>");    //输出a数组中1下标位置的数组中的1下标位置的数值
    document.write(arr1.length + "<br>");
    var s1 = "你们.来这里.吃饭.觉得.饭很.好吃.我看行"
    var arr2 = s1.split(".");
    for (var i in arr2) {
        document.write(arr2[i] + "<br>");
    }
    document.write("<br><br>以上为数组forin<br><br>");

    document.write(Array.isArray(s1 + "<br>"));
    document.write(Array.isArray(arr2));
    document.write("<br><br>以上为Array.isArray<br><br>");

    document.write(arr2.push("你们", "来这里", "吃饭", "就像", "我给你们拉面", "一样很开心") + "<br>");  //显示添加完后的数组长度
    document.write(arr2 + "<br>");
    document.write(arr2.pop() + "<br>");  //删除最后一个元素，并打印删除的元素
    document.write(arr2 + "<br>");
    document.write(arr2.shift() + "<br>");    //删除第一个元素，并打印删除的元素
    document.write(arr2 + "<br>");
    var arr3 = [100, 200, 300];
    var j;
    while (j = arr3.shift()) {
        document.write(j + "<br>");
    }
    console.log(arr3);
    var arr4 = s1.split(".");
    document.write(arr4.unshift("我是吴亦凡", "来一段freestyle") + "<br>");    //在开头添加一个元素，显示添加完后的数组长度，同上，可以添加多个元素
    document.write(arr4 + "<br>");
    document.write("<br><br>以上为数组增删改<br><br>");

    var arr5 = [11, 22, 33, 44, null, undefined];
    document.write(arr5.join("s") + "<br>");  //结果为11s22s33s44ss，把数组转化为字符串，其中null和undefined转化为空
    document.write("<br><br>以上为join<br><br>");

    arr6 = ["你们", "来这里", "吃饭", "就像", "我给你们拉面", "一样很开心"];
    arr7 = ["开心nm"];
    document.write(arr6.concat("wyf", arr7, ['sb']));
    document.write("<br><br>以上为concat<br><br>");

    document.write(arr5.reverse() + "<br>");
    s2 = "1234567890"
    document.write(s2.split("").reverse().join(""));    //翻转字符串
    document.write("<br><br>以上为reverse<br><br>");

    document.write(arr6.indexOf("就像"));   //返回下标，未找到返回-1
    document.write("<br><br>以上为indexof<br><br>");
}
//-----------------------------------对象--------------------------------------
function _duixiang() {
    var Student = {
        name: "ckh",
        age: 25,
        iq: 10000,
        mname: function () {
            console.log("cwz")
        },
        sons: ["zzy", "hwf"],
        jobs: {
            job1: "yunwei",
            job2: "kaifa"
        }
    }
    document.write(Student.jobs.job2);
    document.write("<br><br>以上为对象结构<br><br>");

    document.write(Math.abs(-1) + "<br>");   //绝对值
    document.write(Math.max(5, 20, 8, -9) + "<br>");    //求最大,若内容为空则返回Infinity
    document.write(Math.min(5, 20, 8, -9) + "<br>"); //求最小，若内容为空则返回-Infinity
    document.write(Math.floor(-4.1) + "<br>");    //向小取整
    document.write(Math.ceil(3.1) + "<br>");    //向大取整
    document.write(Math.random() + "<br>");    //取0<=x<1的一个伪随机数x
    function suijishu(min, max) {
        // 0~1 * (4-2) → 0~2,0~2 + 2 → 2~4
        var result = Math.random() * (max - min) + min;
        console.log(result);
    }
    suijishu(2, 4);
    document.write("<br><br>以上为math函数<br><br>");

    document.write(Date.now() + "<br>");   //时间的毫秒，1970年1月1日00：00~今天过的毫秒数
    document.write(new Date() + "<br>");   //时间
    var t1 = new Date();
    document.write(t1.getFullYear() + "<br>"); //返回年份
    document.write(t1.getMonth() + 1 + "<br>"); //返回月份，系统返回的数字需要+1才是真正月份
    document.write(t1.getDate() + "<br>");  //返回日期
    document.write(t1.getDay() + "<br>");   //返回周几
    document.write(t1.getHours() + "<br>"); //返回几小时
    document.write(t1.getMinutes() + "<br>");   //返回几分钟
    document.write(t1.getSeconds() + "<br>");   //返回几秒
    document.write(t1.getMilliseconds() + "<br>");  //返回几毫秒
    document.write(t1.getTime() + "<br>");  //同Date.now
    document.write(t1.getFullYear() + "-" + (t1.getMonth() + 1) + "-" + t1.getDate() + "\t" + t1.getHours() + ":" + t1.getMinutes() + ":" + t1.getSeconds() + "<br>");

    function leftDay(){
        var today=new Date().getTime();
        var endday=new Date(new Date().getFullYear(),11,31,23,59,59,999).getTime();
        var oneDay=1000*60*60*24;
        var result=(endday-today)/oneDay;
        document.write(Math.floor(result));
    }
    leftDay();
    document.write("<br><br>以上为date函数<br><br>");
}
//-----------------------------------dom--------------------------------------
function _document(){

}
//------------------------------------执行---------------------------------------
//_bianliang();
//_shuchu();
//_yunsuanfu();
//_tiaojian();
//_xunhuan();
_zifuchuan();
//_shuzu();
//_duixiang();
//_document();
