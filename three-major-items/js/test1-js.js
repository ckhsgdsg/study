function _duixiangtuozhan(){
    //属性简洁表示法
    var name='ckh';
    var Student={
        //name:name,
        name,
        age:25,
        //getName:function(){
        //    console.log(this.name);
        //}
        getName(){
            console.log(this.name);
        }
    }
    Student.getName();
    function getPoint(){
        var x = 10.23;
        var y = 20.34;
        // return{
        //     x:x,
        //     y:y
        // }
        return{x,y}
    }
    console.log(getPoint().x,getPoint().y);
    
    //表达式
    let name1='username';
    let Student1={
        [name1]:'ckhsgdsg', //动态属性名
        ['pass'+'word']:123456
    }
    console.log(Student1);

    //
    var z={a:10,b:20};
    var z1={...z}
    console.log(z1);
}

_duixiangtuozhan();