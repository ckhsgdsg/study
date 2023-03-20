//新增for..in循环
function _forin() {
    var str = 'ckhsgdsg';
    for (let i of str) {
        console.log(i);
    }
}

//动态创建a标签
function _dongtaia() {
    var href = "https://www.baidu.com";
    var text = "百度"
    var baidu = "<a href='" + href + "' > '" + text + "' </a>"
    console.log(baidu);
    var baidu1 = `<a href="${href}">"${text}"</a>`;
    console.log(baidu1);
}

//字符串新增方法
function _zfc() {
    var allstr = 'wdnmd';
    var str1 = 'n';
    var str2 = ' sb  '
    console.log(allstr.includes(str1, 2));       //查找内容是否包含，从2下标开始找
    console.log(allstr.startsWith(str1));       //头部是否对应
    console.log(allstr.endsWith(str1));         //尾部是否对应
    console.log(str1.repeat(3));    //重复三次，变成nnn，但是不影响原数据。0的话返回空字符串
    console.log(str1.padStart(5, 'abcd'));   //看字符串是否足够长度5，不够就从头添加abcd，不影响原数据
    console.log(str1.padStart(6, 'abcd'));
    console.log(str1.padEnd(5, 'abcd')); //看字符串是否足够长度5，不够就从尾添加abcd
    console.log(str1.padEnd(6, 'abcd'));
    console.log(str2.length);
    document.write(str2.trim().length);
    console.log(str2.trimStart().length);
    console.log(str2.trimEnd().length);
    console.log(str2.at(-3));   //查找对应下表的字符
}

//数组新增方法
function _shuzu() {
    arr1 = [1, 2, 3, 4, 5];
    console.log(...arr1);   //1 2 3 4 5
    console.log(Math.max.apply(null, arr1)); //借用math的max找出最大值
    console.log(Math.max(...arr1));

    arr2 = [6, 7, 8, 9, 0];
    console.log(arr1.concat(arr2));
    console.log([...arr1, ...arr2]);

    //类数组、伪数组只能使用数组的读取方式和length属性，不能使用方法
    function add() {
        console.log(arguments);
        console.log(Array.from(arguments)); //转化为真数组
        console.log(arguments[0] + arguments[1]); //argument可以获取参数
    }
    add(10, 20);
    var h1s = document.querySelectorAll('h1');
    console.log(h1s);
    console.log(Array.from(h1s));   //转化为真数组

    var Student = {
        "0": 'ckh',
        "1": 25,
        "2": '男',
        length: 4
    }
    console.log(Student);
    console.log(Array.from(Student));   //转化为真数组,读取不到length，不假length无法读取

    console.log(Array.of(11, 12, 13));
}

//对象拓展方法
function _duixiangtuozhan() {
    //属性简洁表示法
    var name = 'ckh';
    var Student = {
        //name:name,
        name,
        age: 25,
        //getName:function(){
        //    console.log(this.name);
        //}
        getName() {
            console.log(this.name);
        }
    }
    Student.getName();
    function getPoint() {
        var x = 10.23;
        var y = 20.34;
        // return{
        //     x:x,
        //     y:y
        // }
        return { x, y }
    }
    console.log(getPoint().x, getPoint().y);

    //表达式
    let name1 = 'username';
    let Student1 = {
        [name1]: 'ckhsgdsg', //动态属性名
        ['pass' + 'word']: 123456
    }
    console.log(Student1);

    //
    var z = { a: 10, b: 20 };
    var z1 = { ...z }
    console.log(z1);
}

//箭头函数
function _jiantou() {
    //常规函数
    function _fn1() {

    }

    //赋值函数
    var _fn2 = function (x, y) {
        return x + y;
    }
    console.log(_fn2(2, 3));
    //上下等同
    //箭头函数
    var _fn3 = (x, y) => x + y;
    console.log(_fn3(2, 3));

    var _fn4 = (x, y) => {
        var z = 4;
        return x + y + z;
    }
    console.log(_fn4(2, 3));

    var _fn5 = function () {
        return {
            x: 10,
            y: 20
        }
    }
    //上下等同
    var _fn6 = () => ({ x: 10, y20 });
}

//set数据结构
function _setshujujiegou() {
    const s1 = new Set();
    var arr1 = ['你们', '你们', '来这里', '吃饭', '觉得', '饭很', '好吃', '我看行'];
    arr1.forEach(x => s1.add(x));    //重复数据无法放入
    console.log(s1);

    const arr2 = new Set(['你们', '来这里', '吃饭', '就像', '我给你们拉面', '一样很开心']);
    console.log(...arr2);

    console.log(...new Set([...arr1, ...arr2].join(''))); //数组去重后，转化为字符串，去重每个字

    const s2 = new Set();
    s2.add('5');
    s2.add(5);
    console.log(s2);    //不会发生类型转换，5和'5'不同
    console.log(s2.size);

    console.log(s2.delete('5'));    //返回布尔值true，确认删除

    console.log(s2.clear());
    console.log(s2);
}

//Async函数
function _async() {
    function timeout(ms) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('定时器');
                resolve();
            }, ms);
        })
        return promise;
    }
    async function asyncprint(ms, value) {
        await timeout(ms);
        console.log(value);
    }
    //asyncprint(100,"hello");

    function timein(s) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('111');
                resolve();
            }, s)
        })
    }

    async function xianshi(s, value) {
        await timein(s * 1000);
        console.log(value);
    }

    xianshi(0.000000000000000000001, '222');
}

//class函数
function _class() {
    class Student {
        //constructor为类的默认方法，可以为空，不写则会自动添加空方法
        //实例属性
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //实例方法
        getName() {
            console.log(this.name);
        }

        //静态方法
        static getAge() {
            console.log(this.age);
        }
    }

    var p = new Student("ckh", 25);
    p.getName();        //实例方法调用方式
    Student.getAge();   //静态方法调用方式
    Student.age = 200;    //静态属性
    Student.getAge();

    class muyecun {
        constructor(name, level) {
            this.name = name;
            this.level = level;
        }

        getName() {
            console.log(this.name);
        }

        static getLevel() {
            console.log(this.level);
        }
    }
    class renzhe extends muyecun {
        constructor(name, level, skill) {
            //子类必须调用super，把父类的参数填入
            super(name, level);
            this.skill = skill;
        }
        getSkill() {
            console.log(this.skill);
        }
    }
    var rz = new renzhe('迈特凯', 'A','体术');
    renzhe.level = 'A';
    renzhe.getLevel();
    rz.getSkill();
}

//

//_forin();
//_dongtaia();
//_zfc();
//_shuzu();
//_duixiangtuozhan();
//_jiantou();
//debugger
//_setshujujiegou();
//_async();
//_class();