function foo() {
    this.a = 999;
}

function foo2(m , n) {
    this.a = m + n;
}



caoxue = {
    a : 1,
    b : 2
}

victor = {
    a : 1,
    b : 2
}

foo.apply(caoxue);
console.log(caoxue.a);

foo2.apply(victor,[5,5]);
console.log(victor.a);

function chuzi(){
    for(var i=0;i<arguments.length;i++) {
        console.log(arguments[i]);
    }
}

function fuwuyuan(){
    chuzi.apply(null,arguments);
}

fuwuyuan("鱼香肉丝","糖醋排骨","拍黄瓜");




function sum() {
    var _sum = 0;
    for(var i = 0; i<arguments.length;i++) {
        _sum += arguments[i];
    }
    return _sum;
}

console.log(sum(1,2,3));

function average() {
    var _sum = sum.apply(null, arguments);
    var avg = _sum / arguments.length;
    return avg;
}

console.log(average(1,2,3));


var arr = [1,2,3,4,1,5,6,6,7,7,8,10];

console.log(Math.max.apply(null,arr));