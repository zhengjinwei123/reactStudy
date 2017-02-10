"use strict";
//定义类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

let a = new Point(1,2);
console.log(a.toString());


if(true){
    function f(){
        console.log(1111111);
    }

    f();
}

const PI=3.14;
//const PI2;

//冻结常量对象
const t = Object.freeze([1,2,3]);
console.log(t);
//t.push(4);
console.log(PI);

var d = 1;
console.log(global.d)


setInterval(()=>{console.log(111)},1000);



