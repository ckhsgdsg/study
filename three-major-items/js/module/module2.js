var hello = 'fuck you';
export function getInfo(){
    console.log(hello);
}
export var renzhe1='青年艾';
export var renzhe2='死门凯';
export var renzhe3='须佐佐';
export var renzhe4='惠比寿';
export var renzhe5='死初代';
export function getNewArenzhe(){
    console.log(renzhe1);
}

//一个js只能有一个default
export function getNewSrenzhe(){
    console.log(renzhe2);
}
export default function(){
    console.log(renzhe4);
}